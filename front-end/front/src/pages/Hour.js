import React, { useContext, useEffect } from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import { HourContext } from '../context/HourContext'
import '../styles/hour.css'

export default function Hour() {
  const { grade } = useContext(HourContext)

  useEffect(() => {
    console.log(grade)
  }, [])

  return (
    <>
      <div className="wrapper">
        <NavBar canBack={false} />
        <div className="content content-center">
          <div className="container">
            <SideBar />
            <div className="content-hour">
              <label>Horário do 8° ano do ensino fundamental</label>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Segunda</th>
                    <th>Terça</th>
                    <th>Quarta</th>
                    <th>Quinta</th>
                    <th>Sexta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>14:00</td>
                    <td>Mat</td>
                    <td>Geo</td>
                    <td>Port</td>
                    <td>Ing</td>
                    <td>Hist</td>
                  </tr>
                  <tr>
                    <td>15:00</td>
                    <td>Mat</td>
                    <td>Geo</td>
                    <td>Port</td>
                    <td>Ing</td>
                    <td>Hist</td>
                  </tr>
                  <tr>
                    <td>16:00</td>
                    <td>Mat</td>
                    <td>Geo</td>
                    <td>Port</td>
                    <td>Ing</td>
                    <td>Hist</td>
                  </tr>
                  <tr>
                    <td>17:00</td>
                    <td>Mat</td>
                    <td>Geo</td>
                    <td>Port</td>
                    <td>Ing</td>
                    <td>Hist</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
