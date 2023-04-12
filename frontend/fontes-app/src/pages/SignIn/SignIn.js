import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

export default function SignIn() {
  const [login, setLogin] = useState({ username: '', password: '' });
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setShowMessage(true);
  }

  const handleChange = ({ target: { value, name } }) => {
    setLogin({
      ...login,
      [name]: value,
    });
  }

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="page">
        <form onSubmit={ handleSubmit } className="formLogin">
            <h1>Entrar</h1>
            <p>Digite os seus dados de acesso no campo abaixo.</p>
            <label htmlFor="username">Usuário</label>
            <input autoComplete='current-username' onChange={ handleChange } name="username" type="text" placeholder="Digite seu usuário" autoFocus={ true } />
            <label htmlFor="password">Senha</label>
            <input autoComplete='current-password' onChange={ handleChange } name="password" type="password" placeholder="Digite sua senha" />
            <div onClick={ () => navigateTo('/signup') }>
              <span>Ainda não possuo conta. <p className="link">Inscreva-se</p></span>
            </div>
            { showMessage && <p className="invalid-user">Usuário ou senha inválidos</p> }
            <input type="submit" value="Acessar" className="btn" />
        </form>
    </div>
  );
}
