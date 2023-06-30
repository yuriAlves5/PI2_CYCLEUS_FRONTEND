import "./register.scss"

import React from 'react';

import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/login');
  }

  function validaForm(data){
    let emailDiferente = false;
    let senhaDiferente = false;
    //antes disso tem que buscar se o email ou telefone ja esta no banco de dados
    if(data.email.endsWith("@aluno.unb.br") || data.email.endsWith("@unb.br")){
      if(data.password == data.passwordConfirm)
      return true
    }
    return false
  }

  function verificaAlerta(data){
    if(!data.email.endsWith("@aluno.unb.br") && !data.email.endsWith("@unb.br"))
      return "Insira um email institucional!"
    if(data.password != data.passwordConfirm)
      return "Confirmação de senha inválida!"
    //aqui tenho que fazer os IF's caso credenciais ja constarem no banco
  }

  const onSubmit = data => {
    console.log(data)
    if(validaForm(data)){
      console.log("realizar cadastro") //enviar cadastro pro back e redirecionar pro login
      alert("Confirme o cadastro no seu email institucional.")
      navigateToHome();

    }
      else
    alert(verificaAlerta(data))
    
  }

  return (
    <div className="register-wrapper">
      <div className="register-container">
      
       <div className="register-title">
            <h2>
                CADASTRE-SE ao CYCLEUS
            </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

        </div>

        <form className="register-form"  onSubmit={handleSubmit(onSubmit)}> 
                <input required="true" type="email" placeholder="matricula@aluno.unb.br" {...register("email")}/>
                <input required="true" type="password" placeholder="Digite sua senha" {...register("password")}/>
                <input required="true" type="password" placeholder="Confirme sua senha" {...register("passwordConfirm")}/>
                <input required="true" type="tel" placeholder="Entre com o celular" {...register("tel")}/>

                <button className="create-btn"><strong>Criar conta</strong></button>
        </form>

        

      </div>
    
    </div>

  );
};

export default Register;