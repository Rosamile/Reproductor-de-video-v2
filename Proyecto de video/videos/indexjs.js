const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handleplay)
$pause.addEventListener('click', handlepause)
$backward.addEventListener('click', handlebackward)
$forward.addEventListener('click', handleforward)

function handleplay() {
    http://127.0.0.1:3000/videos/index.html
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('le diste click al boton de reproducir')
}

function handlepause() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('le diste click al boton de pause')
}

function handlebackward() {
    $video.currentTime = 10
    console.log('para atrás 10 segundos', $video.currentTime)
}

function handleforward() {
    console.log($video.currentTime)
    $video.currentTime = 10
    console.log('para adelante 10 segundos', $video.currentTime)
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', hanleloaded)
$video.addEventListener('timeupdate', hanletimeupdate)

function hanleloaded() {
    $progress.max = $video.duration
    console.log('ha cargado mi video', $video.duration)
}

function hanletimeupdate() {
    $progress.value = $video.currentTime
    console.log('tiempo actual', $video.currentTime)
}

$progress.addEventListener('input', hanleinput)
function hanleinput() {
    $video.currentTime = $progress.value
    console.log('progress.value')
}