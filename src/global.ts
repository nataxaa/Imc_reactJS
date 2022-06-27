import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  
  body{
    background-color:#EBEBD3 ;
  }
  

`


export const Container = styled.div`
  margin: 0 auto ;
  text-align:center ;
  align-items:center ;
  
  h1{
    font-family:sans-serif ;
    margin-top:3rem ;
  }
  

  

`

export const Form = styled.div`
  align-items:center ;
  padding:10px ;
  border-radius:10px ;


  margin-top:7rem ;
  font-family:sans-serif ;
  background-color:#EA8C55 ;
  width:10rem ;
  height:12rem ;
  right:-37rem ;
 display:flex ;
 position:relative ;

 flex-direction:column ;

 input{
  padding:8px ;
  font-size:1rem ;
  border:none ;
  background-color: #EBEBD3 ;
  outline:none ;
  border-radius:10px ;  
  margin-bottom:1rem ;
  width:4rem ;
  
 }

 button{
  
  padding:8px ;
  border:none ;
  border-radius:10px ;
  background-color:#5FDD9D ;
  :hover{
    opacity:0.8 ;
  }
 }

 span{
  margin-top:0.5rem ;
 }

`