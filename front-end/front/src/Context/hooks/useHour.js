import { useState, useContext } from 'react'
import { Context } from '../AuthContext'
import axios from 'axios'

export default function useHour() {
  const [grade, setGrade] = useState({})

  const { token } = useContext(Context)

  const baseUrl = 'https://eduacademic.herokuapp.com'

  function showAllGrades() {
    axios({
      method: 'get',
      url: baseUrl + '/authenticate',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(function (response) {
        if (response.status === 200) {
          setGrade(response.data)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return { grade, showAllGrades }
}
