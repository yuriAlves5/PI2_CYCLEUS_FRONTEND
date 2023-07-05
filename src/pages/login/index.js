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
  
  function validaForm(data){

    if(data.email.endsWith("@aluno.unb.br") || data.email.endsWith("@unb.br")){
        //verificar email no banco de dados
          return true
    }
    return false
  }

  function verificaAlerta(data, taNoBanco){
    if(!data.email.endsWith("@aluno.unb.br") && !data.email.endsWith("@unb.br"))
      return "Insira um email institucional!"
    if(taNoBanco == false)
      return "Este endereço de email não consta no banco dados!"
  }

  const onSubmit = data => {
    if(validaForm(data)){
      
      navigateToStation()
    }
    
    else  
    alert(verificaAlerta(data, true))
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