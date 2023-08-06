import {  Typography } from '@mui/material'
import 'animate.css'
import React, { useEffect, useState } from 'react'

const Head = () => {
  const[sentence , setSentence] = useState('')
  const [currentIndex , setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true);
  const fullSentence = "Create , edit and delete your tasks below!"
  const cursorIntervalTime = 500;
  

  useEffect(() => {
    
    const interval = setInterval(() =>{
      if(currentIndex < fullSentence.length){
        setSentence((prevSentence) => prevSentence + fullSentence[currentIndex])
        setCurrentIndex((prevIndex) => prevIndex+1)
      }else{
        clearInterval(interval)
      }
    }, 50 )
    return () =>{
      clearInterval(interval)
    }
  },[currentIndex , fullSentence])  

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, cursorIntervalTime);

    return () => clearInterval(cursorInterval);
    
  }, []);

  return (
    <>
      <Typography variant='h3' textAlign='center' fontWeight='bold'
        className="animate__animated  animate__bounceInDown">
                To-do-app</Typography>
      <Typography variant='h6' textAlign='center'>{sentence}{showCursor ? "|" : null}</Typography>
      
    </>
  )
}

export default Head
