import { useNavigate } from "react-router-dom"
import Modalexit from "./modalforexit";
import { useEffect, useState } from "react";
import $ from "jquery";




function MessLeft() {
  const history = useNavigate();
  const [modalexit, setmodalexit] = useState(false);
  function closemodalexit(){
    setmodalexit(false)
  }
  return (
    
    <div className="leftMenu" style={{ paddingRight: "10px", paddingLeft: "10px", float: "left", width: "auto", borderRight: "solid 1px", borderRightColor: "grey" }}>
      <Modalexit isOpen={modalexit} isClose={closemodalexit}></Modalexit>
      <div className="MainFindBlock border bg-white p-3 rounded">
        <div className="row">
          <div className="col-12 mt-1">
            <h4>Поисковый запрос</h4><i class="fa-solid fa-circle-xmark fa-lg" style={{ cursor: "pointer", float: "right" }} onClick={() => { $('.MainFindBlock').css({ 'left': '-450px', 'transition': '1s' }) }}></i>
          </div>
          <div className="col-12 mt-4 border-bottom pb-4">
            <div className="form-group modalinpblock">
              <input type="text" className="inpmol rounded" placeholder="Поиск" /><i class="fa-solid fa-circle-xmark fa-lg" style={{ cursor: "pointer" }}></i>
            </div>
          </div>
          <div className="col-12 FindScroll mt-2">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-6" style={{ textAlign: "left" }}>
                    <span><b>Недавнее</b></span>
                  </div>
                  <div className="col-6" style={{ textAlign: "right" }}>
                    <small className="text-primary">Очистить все</small>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-4">
                <div className="FindHover" style={{ float: "left", height: "60px", width: "100%", paddingTop: "15px" }}>
                  <div className="row">
                    <div className="col-2">
                      <img src="#" alt="" />
                    </div>
                    <div className="col-8" style={{ lineHeight: "1" }}>
                      <div className="row">
                        <div className="col-12" style={{ fontWeight: "500" }}>
                          dsadasd
                        </div>
                        <div className="col-12" style={{ color: "gray" }}>
                          AKSDAJLDK
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <i class="fa-solid fa-xmark fa-lg" style={{ cursor: "pointer" }}></i>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
      <div>
         <ul className="p-2" style={{ fontWeight: "400"}}>
        <li className="mt-5">
          <button onClick={() => history('/instprofilpage')} className='iconButton' style={{ textAlign: "center", paddingRight: "7px" }}><i class="fa-solid fa-house fa-xl"></i> </button>
        </li>
        <li className="mt-2">
          <button className='iconButton' style={{ textAlign: "center", paddingRight: "7px" }} onClick={() => { $('.MainFindBlock').css({ 'left': '75px', 'transition': '1s' }) }}><i class="fa-solid fa-magnifying-glass fa-xl"></i></button>
        </li>
        <li className="mt-2 pt">
          <button className='iconButton' style={{ textAlign: "center", paddingRight: "7px" }}><i class="fa-solid fa-compass fa-xl"></i></button>
        </li>
        <li className="mt-2">
          <button className='iconButton' style={{ textAlign: "center", paddingRight: "7px" }}><i class="fa-solid fa-clapperboard fa-xl"></i></button>
        </li>
        <li className="mt-2">
          <button className='iconButton' style={{ textAlign: "center", paddingRight: "7px" }} onClick={() => history('/message')}><i class="fa-brands fa-facebook-messenger fa-xl"></i></button>
        </li>
        <li className="mt-2">
          <button className='iconButton' style={{ textAlign: "center", paddingRight: "7px" }}><i class="fa-regular fa-heart fa-xl"></i></button>
        </li>
        <li className="mt-2">
          <button className='iconButton' style={{ textAlign: "center", paddingRight: "7px" }}><i class="fa-solid fa-square-plus fa-xl"></i></button>
        </li>
        <li className="mt-2">
          <button className='iconButton' style={{ textAlign: "center", paddingRight: "7px" }} onClick={() => history('/fprofil')}><i class="fa-solid fa-user fa-xl"></i></button>
        </li>
        <li className=" pt-5">
          <button className='iconButton' style={{ textAlign: "center", paddingRight: "7px" }}><i class="fa-brands fa-threads fa-xl"></i></button>
        </li>
        <li className="mt-3">
          <button className='iconButton' style={{ textAlign: "center", paddingRight: "7px" }} onClick={() =>setmodalexit(true)}><i class="fa-solid fa-bars fa-xl"></i></button>
        </li>
      </ul>
      </div>
     
    </div>
  )
}
export default MessLeft