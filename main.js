// Seleção de elementos HTML

const Mario=document.querySelector('.Mario')
const pipe=document.querySelector('pipe')
const startButton=document.querySelector('starButton')
const restartButton=document.querySelector('restartButton')
const gameOver=document.querySelector('gameOver')

// Definição de Audios

const audioStart=new Audio ('sound/audio_theme.mp3')
const audioGameOver=new Audio ('sound/audio_gameover.mp3')
const audioMario=new Audio ('sound/MARIO_soung_audio_theme.mp3')

// Variaveis de Controle do jogo

let gemeInterval=null

// funçẽs para iniciar o jogo

const startGame=()=>{}
pipe.classList.add('pipe-animation')
