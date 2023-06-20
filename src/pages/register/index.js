import "./register.scss"

import React from 'react';

const Register = () => {
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

        <form className="register-form"> 
                <input type="email" placeholder="matricula@aluno.unb.br"/>
                <input type="password" placeholder="Digite sua senha"/>
                <input type="password" placeholder="Confirme sua senha"/>
                <input type="tel" placeholder="Entre com o número do seu celular"/>
                
        </form>

        <button className="create-btn"><strong>Criar conta</strong></button>

      </div>
    
    </div>

  );
};

export default Register;