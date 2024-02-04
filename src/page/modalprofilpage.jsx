import React from "react"
import { useNavigate } from "react-router-dom"
import { Users } from "./elemet"
function Modalprofil({isOpen, isClose}) {
  return (
    <>{isOpen &&(

    
    <div className="ModalBg" style={{ zIndex: "54"}}>
      <div className="Modal rounded bg-white" style={{ zIndex: "55" }}>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12 text-center mt-2" style={{ textAlign: "center", fontWeight: "600" }}>
                Переключение между аккаунтами
                <a style={{ textAlign: "right", float: "right", marginRight: "10px" }}>
                  <i class="mt-2 fa-solid fa-xmark fa-xl" style={{ textAlign: "right",cursor:"pointer" }} onClick={isClose} ></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-12 mt-5" style={{cursor:"pointer"}}>
                <div className="row">
                  <div className="col-3">
                    <img className="rounded-circle" style={{width:"70px", marginLeft:"10px"}} src={Users[0].img} alt="" />
                  </div>
                  <div className="col-7 mt-3">
                    ggwp_legendary
                  </div>
                  <div className="col-2 mt-3">
                    <i class="fa-solid fa-circle-check fa-xl"></i>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-5" style={{cursor:"pointer"}}>
                <div className="row">
                  <div className="col-3">
                    <img className="rounded-circle" style={{width:"70px", marginLeft:"10px"}} src={Users[1].img} alt="" />
                  </div>
                  <div className="col-7 mt-3">
                    Nurseit
                  </div>
                  <div className="col-2 mt-3">
                    <i class="fa-solid fa-circle-check fa-xl"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5 border pb-3 pt-3" style={{ textAlign: "center"}}>
              <a style={{ textDecoration: "none" }}>Войти в существующий аккаунт</a>
            </div>
          </div>
        </div>
      </div>
    </div>
)}
    </>
  )
}
export default Modalprofil