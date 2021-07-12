import React, { useContext } from 'react'
import NavBar from '../components/NavBar'
import '../styles/grade.css'
import '../styles/global.css'
import SideBar from '../components/SideBar'

export default function Grade() {
  return (
    <>
      <div className="wrapper">
        <NavBar canBack={false} />
        <div className="content content-center">
          <div className="container">
            <SideBar />
            <div className="content-grade">
              <div className="select-school-subjects">
                <h1>Matemática</h1>
              </div>
              <div className="info-grade">
                <label className="text-grade">Matemática</label>
                <div className="show-grade">
                  <div className="show-info-grade">
                    <label className="text-grade">Mensal</label>
                    <label className="text-grade">Notas</label>
                  </div>
                  <div className="div-content-grade">
                    <div className="content-grade">
                      <div className="order-two-months">
                        <label>1º</label>
                      </div>
                      <div className="note-two-months">
                        <label>10.00</label>
                      </div>
                    </div>

                    <div className="content-grade">
                      <div className="order-two-months">
                        <label>1º</label>
                      </div>
                      <div className="note-two-months">
                        <label>10.00</label>
                      </div>
                    </div>

                    <div className="content-grade">
                      <div className="order-two-months">
                        <label>1º</label>
                      </div>
                      <div className="note-two-months">
                        <label>10.00</label>
                      </div>
                    </div>

                    <div className="content-grade">
                      <div className="order-two-months">
                        <label>1º</label>
                      </div>
                      <div className="note-two-months">
                        <label>10.00</label>
                      </div>
                    </div>

                    <div className="content-grade">
                      <div className="order-two-months">
                        <label>1º</label>
                      </div>
                      <div className="note-two-months">
                        <label>10.00</label>
                      </div>
                    </div>

                    <div className="content-grade">
                      <div className="order-two-months">
                        <label>1º</label>
                      </div>
                      <div className="note-two-months">
                        <label>10.00</label>
                      </div>
                    </div>

                    <div className="content-grade">
                      <div className="order-two-months">
                        <label>1º</label>
                      </div>
                      <div className="note-two-months">
                        <label>10.00</label>
                      </div>
                    </div>

                    <div className="content-grade">
                      <div className="order-two-months">
                        <label>1º</label>
                      </div>
                      <div className="note-two-months">
                        <label>10.00</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
