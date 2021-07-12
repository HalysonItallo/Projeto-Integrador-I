import { useState, useEffect } from 'react'

import history from '../../history'
import axios from 'axios'

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(null)
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)
  const [userType, setUserType] = useState('')

  const baseUrl = 'https://eduacademic.herokuapp.com'

  function handleLogin(registration, password) {
    axios({
      method: 'post',
      url: baseUrl + '/authenticate',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        registration: registration,
        password: password,
      },
    })
      .then(function (response) {
        if (response.status === 200) {
          setToken(response.data.token)
        }
      })
      .catch(function (error) {
        setToken(null)
        setAuthenticated(false)
      })
  }

  useEffect(() => {
    if (token !== null) {
      getUser()
      setAuthenticated(true)
      history.push('/grade')
    }
  }, [token])

  function getUser() {
    axios({
      method: 'get',
      url: baseUrl + '/getProfile',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(function (response) {
        if (response.status === 200) {
          setUserId(response.data[0].id)
          setUserType(response.data[0].type)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  function handleLogout() {
    setAuthenticated(null)
    setToken(null)
    history.push('/')
  }

  return { authenticated, handleLogin, handleLogout, token, userId, userType }
}
