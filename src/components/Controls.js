import styles from './css-modules/Controls.module.css'
import TimerMusic from './TimerMusic.js'
import Som from '../audios/LosingMyMindNEFFEX.mp3'
import React, {useEffect, useState} from 'react'
import { durationAudio } from './TimerMusic.js'

var ActivePlay = false
var audio = new Audio()
audio.src = Som
 
var range
var time


function Controls(){
    
    useEffect(() =>{
        const rangeElement = document.getElementById('range')
        const timeElement = document.getElementById('time')
        time = timeElement
        range = rangeElement
    })

    return(
        <>
        <div className={styles.container}>
            <button><i className="fa-solid fa-backward-step"></i></button>
            <button onClick={() =>{AudioPlay()}} id="play"><i className="fa-solid fa-play" htmlFor="play"></i></button>
            <button><i className="fa-solid fa-forward-step"></i></button>
            
        </div>
        <TimerMusic audio={audio}/>
        </>
        
    )
}

export default Controls

function AudioPlay(){
    const button = document.getElementById('play')

    ActivePlay = !ActivePlay

    if(ActivePlay){
        button.innerHTML = `
        <i class="fa-solid fa-pause" htmlFor="play"></i>
        `
        audio.play()
        audio.ontimeupdate = () =>{
            Play()
        }
    }else{
        button.innerHTML = `
        <i class="fa-solid fa-play" htmlFor="play"></i>
        `
        audio.pause()
    }
}


function Play(){
    range.value = audio.currentTime
    range.setAttribute('max', audio.duration)
    var checkValue = range.max / 100
    var value = range.value / checkValue
    range.style.background = `linear-gradient(90deg, #d9d9d9 ${value}%, #d9d9d954 ${value}%)`

    time.innerText = durationAudio(audio.currentTime)

    if(durationAudio(audio.currentTime) == durationAudio(audio.duration)){
        const button = document.getElementById('play')
        button.innerHTML = `
        <i class="fa-solid fa-play" htmlFor="play"></i>
        `
        ActivePlay = false
    }
}