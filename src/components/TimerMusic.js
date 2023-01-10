import React, { useRef, useLayoutEffect } from 'react'
import styles from './css-modules/TimerMusic.module.css'

function TimerMusic(){
    const element = useRef()
    
    useLayoutEffect(()=>{
        const range = element.current
        range.addEventListener('mousemove',()=>{
            eventRange(range)
        })
    })

    return(
        <div  className={styles.container}>
            <input type="range" id='range' ref={element}/>
            <div>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default TimerMusic

function eventRange(range){
    var value = range.value
    range.style.background = `linear-gradient(90deg, #d9d9d9 ${value}%, #d9d9d954 ${value}%)`   
}

