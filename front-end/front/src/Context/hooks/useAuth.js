import { useState, useEffect } from 'react';

import history from '../../history';
import axios from 'axios';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [data, setData] = useState({
    registration: '',
    password: ''
  })
  
  const baseUrl = 'https://eduacademic.herokuapp.com';

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setAuthenticated(true);
    }
  }, []);
  
  function handleLogin(registration, password) {    
  
     axios({
      method: 'post',
      url: baseUrl+'/authenticate',
      headers: {
        "Content-Type": "application/json",
      },
      data: {
      "registration": registration,
      "password": password
      }
    }).then(function (response) {
      localStorage.setItem('token', response.data.token);
    })
    .catch(function (error) {
      console.log(error);
    });;
    setAuthenticated(true);
   history.push('/grade');
    
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    history.push('/login');
  }
  
  return { authenticated, handleLogin, handleLogout };
}