import React, { useRef, useEffect } from 'react'
import styles from './css-modules/TimerMusic.module.css'

var value = 0

function TimerMusic({ audio }){
   useEffect(()=>{
        const durationElement = document.getElementById('duration')
        durationElement.innerText = durationAudio(audio.duration)
   })
    return(
        <div  className={styles.container}>
            <input type="range" id='range' onChange={(event)=>{eventRange(event.target, audio)}} step='1' />
            <div>
                <span id='time'>00:00</span>
                <span id='duration'>00:00</span>
            </div>
        </div>
    )
}

export default TimerMusic

function eventRange(range, audio){
    range.setAttribute('max', audio.duration)
    var checkValue = range.max / 100
    value = range.value / checkValue 
    audio.currentTime = range.value
    range.style.background = `linear-gradient(90deg, #d9d9d9 ${value}%, #d9d9d954 ${value}%)`
}

export function durationAudio(duration){
    var minutes = Math.floor(duration / 60)
    var seconds = Math.floor(duration - minutes * 60)
    return `${('0' + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`
}