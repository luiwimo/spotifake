let songs = []
let currentSong = 1

const title = document.querySelector('h1')
const input = document.querySelector('input')
const label = document.querySelector('label')
const prev = document.querySelector('#prev')
const play = document.querySelector('#play')
const next = document.querySelector('#next')
const player = document.querySelector('audio')
player.volume=0.4
console.log(player)

function getSongs(event){
//console.log(event.target.files)  
  songs = event.target.files
  label.style.display = 'none'
  playSong()
}

function playSong(){
  const song = URL.createObjectURL(songs[currentSong-1])
  title.innerText = songs[currentSong-1].name.slice(0, -4)
  console.log(player)
  player.setAttribute('src', song)
  play.innerText = "Play"
  player.play()
  play.onclick = pause
}

function playCurrent(){
  play.innerText = "Play"
  player.pause()
  play.onclick = pause

}

function pause(){
  play.innerText = "Pause"
  player.play()
  play.onclick = playCurrent

}

function nextSong(){
  currentSong++
  playSong()
}

function prevSong(){
    currentSong--
    playSong()
}

input.onchange = getSongs
play.onclick = playSong
prev.onclick = prevSong
next.onclick = nextSong


