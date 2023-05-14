import React from 'react'

const Button = ({height,text,padding, typeYes, disabled,handleLogin, onClick}) => {
  return (
    <button 
    type={typeYes ? 'submit' : ''}
    disabled={disabled}
    onClick={onClick}
    style={{
        backgroundColor:'#FF4A51',
        justifyItems:'center',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        display:'flex',
        height:height,
        padding:padding,
        borderRadius:'3rem',   
    }}
    >
    <text className={`font-poppins text-bold text-center text-white font-bold `}>{text}</text>
  </button>
  )
}

export default Button
