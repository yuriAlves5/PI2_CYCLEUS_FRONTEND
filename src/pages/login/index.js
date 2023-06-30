import "./login.scss"

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";


const Login = () => {

  const navigate = useNavigate();

  const navigateToStation = () => {
    navigate('/station');
  }

  const navigateToHome = () => {
    navigate('/home');
  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    if(true){
      alert("uhul")
      navigateToStation()
    }
      //realizar login... tem q mandar requisicao pro back e ver se as credenciais batem
    else  
    alert("Credenciais invalidas")
      //
  }
  
  return (
    <div className="login-wrapper">
      <div className="login-container">

        <button className="login-header" onClick={navigateToHome}><img src="./cycleus-marine.png"/></button>

        <h1>Faça seu login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input id="email" className="login-input" type="email" placeholder="aluno@unb.br" {...register("email")}/>
          <input id="password" className="login-input" type="password" placeholder="Digite sua senha"{...register("password")}/>

          <button type="submit" className="submit-btn"><strong>Login</strong></button>
        
        </form>

    

      </div>
    
    </div>

  );
};

export default Login;