import React, { useState, useEffect } from 'react';
import './App.css';
import {TextField, Button } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import io from 'socket.io-client';
import axios from 'axios';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

let socket : SocketIOClient.Socket;

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      BASEURL: string;
    }
  }
}

function App() {
  const [lobbyName, setLobbyName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [playerInLobby, setPlayerInLobby] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [gameOwner, setGameOwner] = useState('');
  const [gameMembers, setGameMembers] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [questionAnswer, setQuestionAnswer] = useState('');
  const [gameInProgress, setGameInProgress] = useState(Boolean);
  const [gameAnswers, setGameAnswers] = useState<{ question: string, answer: string}[][]>([]);


  


  useEffect(() => {
    const setupSocket = async () => {
      socket = io('https://lb.ltng.link');
      console.log(socket);
  
      
      // If game created, hide the menu
      socket.on('gameCreated', (response: {gameOwner: string, joined: boolean, members: string[]}) => {
        if (response.joined) {
          setPlayerInLobby(true);
          setGameOwner(response.gameOwner);
          setGameMembers(response.members);
        }
      })
  
      // on game join
      socket.on('gameJoined', (response: {gameOwner: string, joined: boolean, members: string[]}) => {
        if (response.joined) {
          setPlayerInLobby(true);
          setGameOwner(response.gameOwner);
          setGameMembers(response.members)
        }
      })
  
      // when player join update members
      socket.on('playerJoined', (response : { members: string[]}) => {
        console.log(response)
        setGameMembers(response.members);
      });
  
      // when game started
      socket.on('gameStarted', (response: { gameStarted: boolean, question: string }) => {
        setGameInProgress(response.gameStarted)
        setCurrentQuestion(response.question);
      })
  
      socket.on('allQuestionsAnswered', (response: { question: string, answer: string}[][]) => {
        console.log('all questions answered!')
  
        const questionTable: {question: string, answer: string}[][] = [];
        response.map((question, i) => {
          question.map((answers, j) => {
            if (questionTable[j] === undefined) {
              questionTable[j] = [];
            }
            questionTable[j][i] = {question: answers.question, answer: answers.answer}
          })
        })
  
        setGameAnswers(questionTable)
        setGameInProgress(false);
      });
  
      socket.on('newQuestion', (response: {question: string}) => {
        console.log(response);
        setCurrentQuestion(response.question);
      })
    }
    setupSocket();
  }, [])


  const createGame = () => {
    if (lobbyName === '' || username === '') {
      setError(true);
      setErrorText('Lobbyname / Username is required');
      return false;
    }

    setError(false);
    setErrorText('');
    const createGameCredentials = { lobbyName, username, password };
    console.log('trying')
    socket.emit('createGame', createGameCredentials)
  }
  
  const joinGame = () => {
    if (lobbyName === '' || username === '') {
      setError(true);
      setErrorText('Lobbyname / Username is required');
      return false;
    }

    setError(false);
    setErrorText('');
    const createGameCredentials = { lobbyName, username, password };
    socket.emit('joinGame', createGameCredentials)
  }

  const startGame = () => {
    const createGameCredentials = { lobbyName, username };
    socket.emit('startGame', createGameCredentials)
  }

  const submitAnswer = () => {
    if (questionAnswer === '') {
      setError(true);
      setErrorText('Answer cannot be empty you silly goose');
      return false;
    }

    setError(false);
    setErrorText('');
    const createGameCredentials = { lobbyName, username, answer: questionAnswer };
    socket.emit('submitAnswer', createGameCredentials)
  }
  
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <div style={{width: "100%"}}>
        { (gameOwner !== username && !gameInProgress && playerInLobby) && 
          <div> Waiting for {gameOwner} to start the game </div>
        }
        {
          (!gameInProgress && gameAnswers[0] !== undefined) &&
          <div style={{display: "flex", textAlign: "left"}}>
            {gameAnswers.map((answer) => {
              return (
                <ul style={{listStyleType: 'none'}}>
                {answer.map((a) => {
                    return <li>{a.question} - {a.answer}</li>
                })}
                </ul>
              )
            })}
            </div>    
        }
        { gameInProgress &&
        <div style={{flexDirection: "row", display: "flex", width: "100%"}}>
          <div className="members" style={{width: "10%"}}>
            Players
            <ul style={{listStyleType: 'none'}}>
              {gameMembers.map((member) => {
                return (
                  <li>{member}</li>
                )
              })}
            </ul>
          </div>
          <div style={{padding: "32px", width: "90%", boxSizing: "border-box"}}>
            <div style={{fontSize: "128px", paddingBottom: "64px"}}>{currentQuestion}</div>
            {error && <div style={{color: 'red', fontSize: "14px", margin: '12px'}}>{errorText}</div>}
            <div className="createJoin" style={{padding: "16px", display: "flex", justifyContent: "center", alignItems: "center"}}> 
              <TextField style={{margin: '12px'}} color="primary" id="standard-basic" label="Answer" onChange={(e) => setQuestionAnswer(e.target.value) } value={questionAnswer}/>
              <Button className="button" style={{margin: '4px'}} color="primary" onClick={() => submitAnswer()}> Submit </Button>
            </div>
          </div>
          </div>
        }
        { !playerInLobby &&
          <React.Fragment>
            <div className="textFields" style={{display: "inline-grid", padding: "16px" }}> 
              <TextField required style={{margin: '12px'}} color="primary" id="standard-basic" label="LobbyName" onChange={(e) => setLobbyName(e.target.value) } value={lobbyName}/>
              <TextField required style={{margin: '12px'}} color="primary" id="standard-basic" label="Username" onChange={(e) => setUserName(e.target.value) } value={username}/>
              <TextField style={{margin: '12px'}} color="primary" id="standard-basic" label="Password" onChange={(e) => setPassword(e.target.value) } value={password}/>
              {error && <div style={{color: 'red', fontSize: "14px", margin: '12px'}}>{errorText}</div>}
            </div>
            <div className="createJoin"> 
              <Button className="button" style={{margin: '4px'}} color="primary" onClick={() => joinGame()}> Join Game </Button>
              <Button className="button" style={{margin: '4px'}} color="primary" onClick={() => createGame()}> Create Game </Button>
            </div>
          </React.Fragment>
        }       
        { (gameOwner !== '' && gameOwner === username && !gameInProgress) && 
          <Button className="button" style={{margin: '4px'}} color="primary" onClick={() => startGame()}> Start Game </Button>
        }
  
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
