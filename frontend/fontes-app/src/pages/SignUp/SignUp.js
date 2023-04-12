import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectContext from '../../context/ProjectContext';




export default function SignUp() {
  const [login, setLogin] = useState({ username: '', password: '', name: '' });
  const [showMessage, setShowMessage] = useState(false);
  const { setUsername } = useContext(ProjectContext);
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createUser(login);
    if (res.ERROR) {
      return onFail(res.ERROR);
    }
    return onSuccess(res.username);
  }

  async function createUser(credentials) {
    return fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(res => res.json())
      .catch(res => console.log(res.ERROR));
   }

  function onSuccess(username) {
    setErrorMessage('');
    setShowMessage(false);
    setUsername(username);
    navigateTo("/home")
  }
  
  function onFail() {
    setShowMessage(true);
    setErrorMessage("Usuário indisponível");
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
            <h1>Inscreva-se</h1>
            <p>Digite os seus dados de acesso no campo abaixo.</p>
            <label htmlFor="name">Nome Completo</label>
            <input autoComplete='current-name' onChange={ handleChange } name="name" type="text" placeholder="Digite seu nome" autoFocus={ true } />
            <label htmlFor="username">Usuário</label>
            <input autoComplete='current-username' onChange={ handleChange } name="username" type="text" placeholder="Digite seu usuário" />
            <label htmlFor="password">Senha</label>
            <input autoComplete='current-password' onChange={ handleChange } name="password" type="password" placeholder="Digite sua senha" />
      
            { showMessage && <p className="invalid-user">{ errorMessage }</p> }
            <input type="submit" value="Criar conta" className="btn" />
        </form>
    </div>
  );
}
