import React, { useState, useEffect } from 'react';
import './App.css';
import {TextField, Button, Fab } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import io from 'socket.io-client';
import UserIcon from '../icons/user.svg';
import LobbyIcon from '../icons/lobby.svg';
import PasswordIcon from '../icons/password.svg';
import QuestionIcon from '../icons/question.svg';
import Avatar from 'avataaars';
import { randomAvatar } from '../randomav';
import { GameMembers } from './types';

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
  const [gameMembers, setGameMembers] = useState<GameMembers[]>([]);
  const [gameWaitingRoom, setGameWaitingRoom] = useState<GameMembers[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [questionAnswer, setQuestionAnswer] = useState('');
  const [gameInProgress, setGameInProgress] = useState(Boolean);
  const [gameAnswers, setGameAnswers] = useState<{ question: string, answer: string}[][]>([]);
  const [questionIndex, setQuestionIndex ]= useState(0);

  const [lobbyError, setLobbyError] = useState({error: false, message: ''});
  const [usernameError, setUserNameError] = useState({error: false, message: ''});
  const [passwordError, setPasswordError] = useState({error: false, message: ''});


  const [showJoin, setShowJoin] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showFields, setShowFields] = useState(false);

  // Socket listener
  useEffect(() => {
    const setupSocket = async () => {
      socket = io('http://localhost:3005');
      console.log(socket);
  
      
      // If game created, hide the menu
      socket.on('gameCreated', (response: {gameOwner: string, joined: boolean, members: GameMembers[]}) => {
        if (response.joined) {
          setPlayerInLobby(true);
          setGameOwner(response.gameOwner);
          setGameMembers(response.members);
        }
      })
  
      // on game join
      socket.on('gameJoined', (response: {gameOwner: string, joined: boolean, members: GameMembers[], waitingRoom: GameMembers[]}) => {
        if (response.joined) {
          setPlayerInLobby(true);
          setGameOwner(response.gameOwner);
          setGameMembers(response.members)
          setGameWaitingRoom(response.waitingRoom);
        }
      })
  
      // when player join update members
      socket.on('playerJoined', (response : { members: GameMembers[], waitingRoom: GameMembers[]}) => {
        setGameMembers(response.members);
        setGameWaitingRoom(response.waitingRoom);
      });
  
      // when game started
      socket.on('gameStarted', (response: { gameStarted: boolean, question: string, questionIndex: number, members: GameMembers[], waitingRoom: GameMembers[] }) => {
        setGameInProgress(response.gameStarted)
        setCurrentQuestion(response.question);
        setQuestionIndex(response.questionIndex);
        setGameMembers(response.members);
        setGameWaitingRoom(response.waitingRoom);
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
        setQuestionIndex(0);
      });
  
      socket.on('newQuestion', (response: {question: string, questionIndex: number}) => {
  
        setCurrentQuestion(response.question);
        setQuestionIndex(response.questionIndex);
      })
      
      socket.on('playerLeft', (response : { members: GameMembers[], waitingRoom: GameMembers[]}) => {
        setGameMembers(response.members);
        setGameWaitingRoom(response.waitingRoom);
      })

      socket.on('validationError', (response: {error: string}) => {
        setError(true);
        setErrorText(response.error)
        setTimeout(() => {
          setError(false);
        }, 3000);
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
        disconnectFromGame();
        hideCreateJoin();
      }
    }

    window.addEventListener('hashchange', handleHashChange);
  }, []);

  // Helpers for the buttons
  const createGame = () => {
    let error = false;

    if (!lobbyName) {
      setLobbyError({error:true, message: "Lobby Name cannot be empty"})
      error = true;
    } else {
      setLobbyError({error:false, message: ''})
    }
    if (!username) {
      setUserNameError({error:true, message: "Username cannot be empty"})
      error = true;
    } else if (username.length > 12) {
      setUserNameError({error:true, message: "Username maximum of 12 characters"})
      error = true;
    } else  {
      setUserNameError({error:false, message: ''})
    }

    if (error) {
      return false;
    }

    setLobbyError({error: false, message: ''});
    setUserNameError({error: false, message: ''});
    setPasswordError({error: false, message: ''});
    const createGameCredentials = { lobbyName, username, password };
    console.log('trying')
    socket.emit('createGame', createGameCredentials)
    window.location.hash = lobbyName;
  }
  
  const joinGame = () => {
    let error = false;

    if (!lobbyName) {
      setLobbyError({error:true, message: "Lobby Name cannot be empty"})
      error = true;
    } else {
      setLobbyError({error:false, message: ''})
    }
    if (!username) {
      setUserNameError({error:true, message: "Username cannot be empty"})
      error = true;
    } else if (username.length > 12) {
      setUserNameError({error:true, message: "Username maximum of 12 characters"})
      error = true;
    } {
      setUserNameError({error:false, message: ''})
    }

    if (error) {
      return false;
    }

    const createGameCredentials = { lobbyName, username, password };
    socket.emit('joinGame', createGameCredentials)
    window.location.hash = lobbyName;
  }

  const startGame = () => {
    const createGameCredentials = { lobbyName, username };
    socket.emit('startGame', createGameCredentials)
  }

  const handleEnterSubmit = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.keyCode === 13) {
      submitAnswer()
    }
  }

  const submitAnswer = () => {
    if (questionAnswer === '') {
      setError(true);
      setErrorText('Answer cannot be empty you silly goose');
      return false;
    }

    setError(false);
    setErrorText('');
    setQuestionAnswer('');
    const createGameCredentials = { lobbyName, username, answer: questionAnswer };
    socket.emit('submitAnswer', createGameCredentials)
  }

  const disconnectFromGame = () => {
    socket.emit('leaveGame', {lobbyName})
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
        { playerInLobby &&
          <div className="gameLobby">
            { playerInLobby &&
              <React.Fragment>
                <div className="gameScreen">
                  <div className="gameScreenHeader">
                    <div className="gameScreenLogoContainer">
                      <div className="gameScreenLogo">?!</div>
                      Who<br/>What<br/>Where<br/>
                    </div>
                    <div className="gameScreenRound">{questionIndex === 0 ? 'Waiting for new game' :'Round' }<br/>{questionIndex !== 0 ? questionIndex : ''}</div>
                  </div>
                  <div className="gameScreenContainer">
                      { (gameOwner !== username && !gameInProgress && playerInLobby) && 
                        <div className="waitingText"> Waiting for {gameOwner} to start the game </div>
                      }
                      { (!gameInProgress && gameAnswers[0] !== undefined) &&
                        <div>
                          {gameAnswers.map((answer) => {
                            return (
                              <div>
                              {answer.map((a) => {
                                  return <li>{a.question} - {a.answer}</li>
                              })}
                              </div>
                            )
                          })}
                          </div>    
                      }
                      { gameInProgress &&
                        <React.Fragment>
                          <div className="question">{currentQuestion}</div>
                          {error && <div>{errorText}</div>}
                          <div className="answerContainer"> 
                            <TextField autoComplete="off" className="answerTextField" required color="primary" variant="outlined" id="standard-basic" onChange={(e) => setQuestionAnswer(e.target.value) } value={questionAnswer} onKeyDown={(e) => handleEnterSubmit(e)}/>
                            <Button className="submitAnswerButton" style={{margin: '4px'}} color="primary" onClick={() => submitAnswer()}> Submit </Button>
                          </div>
                        </React.Fragment>
                      }
                      { (gameOwner !== '' && gameOwner === username && !gameInProgress) && 
                      <div className="startButtonContainer">
                      <Button className="startButton" color="primary" onClick={() => startGame()}> Start Game </Button>
                      </div>
                      }
                  </div>
                  <div className="gameScreenChatContainer">
                    
                  </div>
                </div>
                <div className="memberSidebar">
                  <div className="memberSidebarTitle">Players - {gameMembers.length}</div>
                  <div className="memberList">
                    {gameMembers.map((member) => {
                      return (
                        <div className="memberItem"><img className="memberAvatar" src={member.avatar}/>{member.username}</div>
                      )
                    })}
                  </div>
                  <div className="waitingRoomSidebarTitle">Waiting Room - {gameWaitingRoom.length}</div>
                  <div className="waitingRoomList">
                    {gameWaitingRoom.map((member) => {
                      return (
                        <div className="memberItem"><img className="memberAvatar" src={member.avatar}/>{member.username}</div>
                      )
                    })}
                  </div>
                </div>
              </React.Fragment>
            }
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
                  <div className="textFieldError2">{usernameError.error && usernameError.message}</div>
                </div>
                  <div className="textFieldContainerSmall">
                  <div className="textFieldTags">
                  <img className="textFieldIcon" src={LobbyIcon} />
                    <div className="textFieldTitle">Lobby Name *</div>
                  </div>
                  <TextField autoComplete="off" className="textField" required color="primary" variant="outlined" id="standard-basic" onChange={(e) => setLobbyName(e.target.value) } value={lobbyName}/>
                  <div className="textFieldError2">{lobbyError.error && lobbyError.message}</div>
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
                  <div className="textFieldError2">{usernameError.error && usernameError.message}</div>
                </div>
                <div className="textFieldContainer">
                  <div className="textFieldTags">
                  <img className="textFieldIcon" src={LobbyIcon} />
                    <div className="textFieldTitle">Lobby Name *</div>
                  </div>
                  <TextField autoComplete="off" className="textField" required color="primary" variant="outlined" id="standard-basic" onChange={(e) => setLobbyName(e.target.value) } value={lobbyName}/>
                  <div className="textFieldError2">{lobbyError.error && lobbyError.message}</div>
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
                  <div style={{color: '#ecbebe', fontSize: "14px", minHeight: '18px', opacity: error ? '1' : '0', transition: 'opacity 0.5s'}}>{errorText}</div>}
                  <Button className="createButton" color="primary" onClick={() => createGame()}> Create Game </Button>
                  <Button className="joinButton" color="primary" onClick={() => joinGame()}> Join Game </Button>
                </div>
                
                <div className="createJoinButtonsContainerSmall">
                  {error && <div style={{color: '#ecbebe', fontSize: "14px", minHeight: '18px', opacity: error ? '1' : '0', transition: 'opacity 0.5s'}}>{errorText}</div>}
                  <Button className="createButton" color="primary" onClick={() => displayCreate()}> Create Game </Button>
                  <Button className="joinButton" color="primary" onClick={() => displayJoin()}> Join Game </Button>
                </div>
                
              </div>
            </div>
            }

          </div>
        }       
  
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
