import React from 'react'
import styled from 'styled-components'
import LoginLogo from "./assets/images/login-logo.svg"
import GoogleImage from "./assets/images/google.svg"
import HeroImage from "./assets/images/login-hero.svg"
const Header = styled.div`
width:90%;
margin-left:auto;
margin-right:auto;
display:flex;
flex-direction: row;
justify-content:space-between;
align-items:center;
& img{
    width: 100px;

  }

`;
const ContainerBtn = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
gap: 20px;
`
const LoginButton = styled.button`
  background-color: #fff;
  color: #0077b5;
  padding: 8px 17px;
  border: 1px solid #0077b5;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #0077b5;
    color: #fff;
  }

`;
const SignUpButton = styled.button`
  background-color: #0077b5;
  color: #fff;
  padding: 8px 17px;
  border: none;
  border-radius: 10px;
  font-size: 14px;

  cursor: pointer;

  &:hover {
    background-color: #006699;
  }
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #0077B5;
  text-align: left;
  margin-top: 2rem;
  color: #0a66c2; 
`;
const ContentLogin  = styled.div`
position: absolute;
top:70px;
left: 100px;
@media (max-width: 768px) {
  left:40px;
  right:40px;
  
  
        }

& .login_dev{
  width:60%

  @media(max-width: 768px) {
    width:100%
  
        }
}
  

& .HeroImage{
  position: absolute;
    width: 400px;
    top: 51%;
    right: -100px;
    @media (max-width: 768px) {
      width: 300px;
    top: 140%;
    left: auto;
    right: auto;
        }
}
`
const ButtonLogin = styled.button`

width: 250px;
    border-radius: 25px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border: 2px solid rgb(0, 0, 0);
    outline: 0px;
    display: flex;
    transition: all.3s ease;
    margin-top: 50px;
    cursor: pointer;
    &:focus{
      transform: scale(.95);
    }

`
function Login() {

  return (
<>
<Header >
    <img src={LoginLogo} alt="" />
    <ContainerBtn>
    <LoginButton>Sign in</LoginButton>

      <SignUpButton>Sign up</SignUpButton>
    </ContainerBtn>
    </Header>
    
    <ContentLogin>
    
    <div className="login_dev">
    <Title>Welcome To Your Profational 
      
      <br/>
      Commuinty</Title>
    <ButtonLogin>
    Sign In With
      <img src={GoogleImage} alt="" />
  
    </ButtonLogin>
    </div>
    <img className="HeroImage"src={HeroImage} alt="" />

    </ContentLogin>
    </>
  )
}

export default Login