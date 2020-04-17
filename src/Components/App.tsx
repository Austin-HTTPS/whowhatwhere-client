import React, { useState, useEffect } from 'react';
import './App.css';
import {TextField, Button, Fab } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import io from 'socket.io-client';
import UserIcon from '../icons/user.svg';
import LobbyIcon from '../icons/lobby.svg';
import PasswordIcon from '../icons/password.svg';
import QuestionIcon from '../icons/question.svg';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const darkTheme = createMuiTheme({
  palette: {
    type: 'light',
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

  const [lobbyError, setLobbyError] = useState({error: false, message: ''});
  const [usernameError, setUserNameError] = useState({error: false, message: ''});
  const [passwordError, setPasswordError] = useState({error: false, message: ''});


  const [showJoin, setShowJoin] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showFields, setShowFields] = useState(false);

  // Socket listener
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

  // Deal with resize, to fix the garbage css
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1270) {
        setShowCreate(false);
        setShowJoin(false);
        setShowFields(false);
      }
    }

    window.addEventListener('resize', handleResize);
  }, []);

  // Deal with hash change, hackfix back button phone
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '') {
        hideCreateJoin();
      }
    }

    window.addEventListener('hashchange', handleHashChange);
  }, []);

  // Helpers for the buttons
  const createGame = () => {
    if (lobbyName === '' || username === '') {
      if (!lobbyName) {
        setLobbyError({error:true, message: "Lobby Name cannot be empty"})
      } else {
        setLobbyError({error:false, message: ''})
      }
      if (!username) {
        setUserNameError({error:true, message: "Username cannot be empty"})
      } else {
        setUserNameError({error:true, message: ''})
      }
      return false;
    }

    setLobbyError({error: false, message: ''});
    setUserNameError({error: false, message: ''});
    setPasswordError({error: false, message: ''});
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

  const displayCreate = () => {
    window.location.hash = '#createGame'
    setShowCreate(true);
    setShowFields(true);
  }

  const displayJoin = () => {
    window.location.hash = '#joinGame'
    setShowJoin(true);
    setShowFields(true);
  }

  const hideCreateJoin = () => {
    window.location.hash = ''
    setShowCreate(false);
    setShowJoin(false);
    setShowFields(false);
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
          <div style={{display: "flex", textAlign: "left", color: 'white', height: '100vh'}}>
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
        <div style={{flexDirection: "row", display: "flex", width: "100%", height: '100vh'}}>
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
          <div style={{padding: "32px", width: "90%", boxSizing: "border-box", color: 'white'}}>
            <div style={{fontSize: "128px", paddingBottom: "64px"}}>{currentQuestion}</div>
            {error && <div style={{color: 'red', fontSize: "14px", margin: '12px'}}>{errorText}</div>}
            <div className="createJoin" style={{padding: "16px", display: "flex", justifyContent: "center", alignItems: "center"}}> 
            <TextField autoComplete="off" className="textField" required color="primary" variant="outlined" id="standard-basic" onChange={(e) => setQuestionAnswer(e.target.value) } value={questionAnswer}/>
              <Button className="button" style={{margin: '4px'}} color="primary" onClick={() => submitAnswer()}> Submit </Button>
            </div>
          </div>
          </div>
        }

        { !playerInLobby &&
          <div className="createOrJoinLobbyContainer">

            <div className="introductionSection"> 
              <div className="introTitleContainer">
                <img className="introIcon" src={QuestionIcon} />
                <div className="introTitle">Who What Where</div>
              </div>
              { showFields && <div className="dividerSmall"></div> }
              { !showFields &&
              <React.Fragment>
              <div className="introContent"> 
                An Interactive Story building game to play with friends. <br/><br/>
                Challenge your friends to a game of Who, What, Where? An Ad-libs inspired interactive story building game 
                where you and your friends answer a series of 9 questions. The answers get mashed together to create wild stories. <br/><br/>
                <div className="extraPlayerText">Best played with 3-9 players </div>
              </div>
              <div className="divider"></div>
              </React.Fragment>
              }
              { showFields && 
                <div className="textFieldSmallContainer">
                  <div className="backArrow">
                  </div>
                  <div className="textFieldContainerSmall">
                  <div className="textFieldTags">
                    <img className="textFieldIcon" src={UserIcon} />
                    <div className="textFieldTitle">Username *</div>
                  </div>
                  <TextField autoComplete="off" className="textField" required color="primary" variant="outlined" id="standard-basic" onChange={(e) => setUserName(e.target.value) } value={username}/>
                  <div className="textFieldError2">{lobbyError.error && lobbyError.message}</div>
                </div>
                  <div className="textFieldContainerSmall">
                  <div className="textFieldTags">
                  <img className="textFieldIcon" src={LobbyIcon} />
                    <div className="textFieldTitle">Lobby Name *</div>
                  </div>
                  <TextField autoComplete="off" className="textField" required color="primary" variant="outlined" id="standard-basic" onChange={(e) => setLobbyName(e.target.value) } value={lobbyName}/>
                  <div className="textFieldError2">{usernameError.error && usernameError.message}</div>
                </div>
                  <div className="textFieldContainerSmall">
                  <div className="textFieldTags">
                    <img className="textFieldIcon" src={PasswordIcon} />
                    <div className="textFieldTitle">Password</div>
                  </div>
                  <TextField autoComplete="off" type="password" className="textField" color="primary" variant="outlined" id="standard-basic" onChange={(e) => setPassword(e.target.value) } value={password}/>
                  <div className="textFieldError2">{passwordError.error && passwordError.message}</div>
                </div>  
                  { showCreate && <Button className="createButtonSmall" color="primary" onClick={() => createGame()}> Create Game </Button> }
                  { showJoin && <Button className="joinButtonSmall" color="primary" onClick={() => joinGame()}> Join Game </Button> }
                </div>
              }
              
            </div> 

            {!showFields && 
            <div className="createOrJoinSection">
              <div className="createJoin"> 
                <div className="textFieldContainer">
                  <div className="textFieldTags">
                    <img className="textFieldIcon" src={UserIcon} />
                    <div className="textFieldTitle">Username *</div>
                  </div>
                  <TextField autoComplete="off" className="textField" required color="primary" variant="outlined" id="standard-basic" onChange={(e) => setUserName(e.target.value) } value={username}/>
                  <div className="textFieldError2">{lobbyError.error && lobbyError.message}</div>
                </div>
                <div className="textFieldContainer">
                  <div className="textFieldTags">
                  <img className="textFieldIcon" src={LobbyIcon} />
                    <div className="textFieldTitle">Lobby Name *</div>
                  </div>
                  <TextField autoComplete="off" className="textField" required color="primary" variant="outlined" id="standard-basic" onChange={(e) => setLobbyName(e.target.value) } value={lobbyName}/>
                  <div className="textFieldError2">{usernameError.error && usernameError.message}</div>
                </div>
                <div className="textFieldContainer">
                  <div className="textFieldTags">
                    <img className="textFieldIcon" src={PasswordIcon} />
                    <div className="textFieldTitle">Password</div>
                  </div>
                  <TextField autoComplete="off" type="password" className="textField" color="primary" variant="outlined" id="standard-basic" onChange={(e) => setPassword(e.target.value) } value={password}/>
                  <div className="textFieldError2">{passwordError.error && passwordError.message}</div>
                </div>             
                <div className="createJoinButtonsContainer">
                  {error && <div style={{color: 'red', fontSize: "14px", margin: '12px'}}>{errorText}</div>}
                  <Button className="createButton" color="primary" onClick={() => createGame()}> Create Game </Button>
                  <Button className="joinButton" color="primary" onClick={() => joinGame()}> Join Game </Button>
                </div>
                
                <div className="createJoinButtonsContainerSmall">
                  {error && <div style={{color: 'red', fontSize: "14px", margin: '12px'}}>{errorText}</div>}
                  <Button className="createButton" color="primary" onClick={() => displayCreate()}> Create Game </Button>
                  <Button className="joinButton" color="primary" onClick={() => displayJoin()}> Join Game </Button>
                </div>
                
              </div>
            </div>
            }

          </div>
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
