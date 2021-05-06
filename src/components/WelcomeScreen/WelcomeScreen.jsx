import React, {useRef, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from "three"

const WelcomeScreen = ({children}) => {
  const myRefDiv = useRef(null)
  
  const [vanta, setVanta] = useState(0)

  useEffect( () => {
  
    if(!vanta){
      console.log('entra')
      setVanta(Clouds({
        THREE,
        el: myRefDiv.current,
        Color: 0x000000,
      }))      
    }

    return ()=>{
      if(vanta){
        vanta.destroy()
      }
    }

  },[vanta])
  

    return (
        <div ref={myRefDiv} className="full">
            {children}
        </div>
    )
}

WelcomeScreen.propTypes = {
  children: PropTypes.node,
}

export default WelcomeScreen
/*
import React,{useRef,useEffect,useState} from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from "three"
 
 
const WelcomeScreen = ({children}) => {
  const myRefDiv = useRef(null)
  const [vanta,setVanta] = useState(0)
 
  useEffect(()=>{
    if(!vanta){
      setVanta(Clouds({
        THREE,
        el : myRefDiv.current
        
      }))
    }
    return ()=>{
      if(vanta){
        vanta.destroy()
      }
    }
  }, [vanta])
 return (
   <div ref={myRefDiv}>
     WelcomeScreen
   </div>
 )
   
}
 
WelcomeScreen.propTypes = {
children: PropTypes.node,
}
 
export default WelcomeScreen*/