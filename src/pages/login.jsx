import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import logo from '../resources/Imagenes/logo.png';


const Title = styled.h1`
  font-weight: 600;
  font-size: 50px;
  line-height: 75px;
  color: #262626;
  width: 100%;
  margin: 0;
  margin-bottom: 21px
`;

const Input = styled.input.attrs(props => ({
  type: "email",
  size: props.size || "1em",
  }))`
  width: 100%;
  padding: 14px 12px;
  border: 1px solid #799283;
  color: #799283;
  border-radius: 12px;
  font-size: 16px;
  margin-bottom: 28px;
  &:invalid {
    color: red; 
    border-color: red;
  }
`;

  // Input's attrs will be applied first, and then this attrs obj
const PasswordInput = styled(Input).attrs({
  type: "password",
  })`
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "#135846" : "white"};
  color: ${props => props.primary ? "white" : "#135846"};

  font-weight: 500;
  font-size: 16px;
  padding: 15px 28px;
  border: 1px solid #135846;
  border-radius: 12px;
  cursor: pointer;
`;

const SubTitle = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #799283;
  margin: 0;
  align-self: center;
  margin-bottom: 5px;
`;

export const Login = () => {

  let navigate = useNavigate();


  function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let email = formData.get("email");
    let password = formData.get("pass");
    if (email === process.env.REACT_APP_EMAIL_DASHBOARD && password === process.env.REACT_APP_PASSWORD_DASHBOARD) {
      event.currentTarget[1].setAttribute("style", 'color: #799283; border-color: #799283;');
      localStorage.setItem("login", true);
      navigate("/");
    } else {
      event.currentTarget[1].setAttribute("style", 'color: red; border-color: red;');
    }
  }

  return (
    <section style={{ height: '100%', display: 'flex', }}>
      <div style={{ backgroundColor: 'white', width: '50%', display: 'flex', borderRadius: '12px', margin: 'auto', boxShadow: '0px 16px 30px rgba(0, 0, 0, 0.14)', }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', width: '50%', padding: '41px 49px', justifyContent: 'space-between', }}>
            <Title>Login</Title>
            <form onSubmit={handleSubmit}>
              <Input placeholder="Email" name="email" size="2em" />
              <PasswordInput placeholder="Password" name="pass" size="2em" />
              <SubTitle>Email: admin@hotelmiranda.com<br/>Password: Admin1234</SubTitle>
              <Button primary>Login</Button>
            </form>
          </div>
          <img src={logo} style={{ width: '50%', height: 'fit-content', margin: 'auto', padding: '41px 49px',}}/>
      </div>
    </section>
  )
}