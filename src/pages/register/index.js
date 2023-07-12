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
    //tem que buscar se o email ou telefone ja esta no banco de dados
    if(data.email.endsWith("@aluno.unb.br") || data.email.endsWith("@unb.br")){
      if(data.password == data.passwordConfirm)
        if(data.celular.length == 11)
          return true
    }
    return false
  }

  function verificaAlerta(data){
    if(!data.email.endsWith("@aluno.unb.br") && !data.email.endsWith("@unb.br"))
      return "Insira um email institucional!"
    if(data.password != data.passwordConfirm)
      return "Confirmação de senha inválida!"
    if(data.celular.length != 11)
      return "Insira um número de telefone válido com 11 dígitos!"
    //aqui tenho que fazer os IF's caso credenciais ja constarem no banco
  }

  const onSubmit = data => {
    console.log(data)
    if(validaForm(data)){
      //enviar cadastro pro back e redirecionar pro login
      alert("Confirme o cadastro no seu email institucional.")
      alert(data.celular.length)
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
            Seja muito bem-vindo ao bicicletário eletrônico CYCLEUS, faça o seu cadastro para usurfruir dos nosso serviços!
            </p>

        </div>

        <form className="register-form"  onSubmit={handleSubmit(onSubmit)}> 
                <input required="true" type="email" placeholder="matricula@aluno.unb.br" {...register("email")}/>
                <input required="true" type="password" placeholder="Digite sua senha" {...register("password")}/>
                <input required="true" type="password" placeholder="Confirme sua senha" {...register("passwordConfirm")}/>
                <input required="true" type="tel" placeholder="celular (xx)xxxxxxxxx" {...register("celular")}/>

                <button className="create-btn"><strong>Criar conta</strong></button>
        </form>

        

      </div>
    
    </div>

  );
};

export default Register;