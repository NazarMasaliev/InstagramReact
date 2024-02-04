import { useNavigate } from 'react-router-dom'
import Modalprofil from './modalprofilpage';
import { useEffect, useState } from 'react';
import Modalexit from './modalforexit';
import { Users } from './elemet';
import $ from 'jquery';
export const Lnav = () => {
  const [findprofil, setfindprofil] = useState([]);
  function FindProfilInModal(nick) {
    const findprof = Users.filter((i) => nick == i.nickname || nick == i.profilname)
    if (findprof.length > 0) {
      setfindprofil(findprof)
    }
    else {
      setfindprofil([])
    }
  }


  const [modal, setModal] = useState(false);
  function close() {
    setModal(false)
  }
  const history = useNavigate();
  function Home() {
    history('/instprofilpage')
  }

  function goinprofil() {
    history('/fprofil')
  }
  const [modalInfoOpen, setmodalInfoOpen] = useState(false);
  function Closemodal() {
    setmodalInfoOpen(false)
  }


  return (

    <div className="leftMenu" style={{ paddingLeft: "10px", float: "left", width: "250px", borderRight: "solid 1px", borderRightColor: "grey", height:"100vh"}}>
      <Modalprofil isOpen={modalInfoOpen} isClose={Closemodal}></Modalprofil>
      <Modalexit isOpen={modal} isClose={close}></Modalexit>
      <div className="MainFindBlock border bg-white p-3 rounded">
        <div className="row">
          <div className="col-12 mt-1">
            <h4>Поисковый запрос</h4><i class="fa-solid fa-circle-xmark fa-lg" style={{ cursor: "pointer", float: "right" }} onClick={() => { $('.MainFindBlock').css({ 'left': '-450px', 'transition': '1s' }); $('.iconButton').css({ 'width': '100%' }); $('.blockForModal').css({ 'display': 'block' }) }}></i>
          </div>
          <div className="col-12 mt-4 border-bottom pb-4">
            <div className="form-group modalinpblock">
              <input onChange={(e) => FindProfilInModal(e.target.value)} type="text" className="inpmol rounded" placeholder="Поиск" /><i class="fa-solid fa-circle-xmark fa-lg" style={{ cursor: "pointer" }} ></i>
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
              {findprofil.length > 0 ?
                <>
                  {findprofil.map((i) =>
                    <div className="col-12 mt-4">
                      <div className="FindHover pt-2" style={{ float: "left", height: "60px", width: "100%", paddingLeft:"10px"}}>
                        <div className="row">
                          <div className="col-2">
                            <img className='rounded-circle' style={{width:"50px", height:"50px",}} src={i.img} alt="" />
                          </div>
                          <div className="col-8" style={{ lineHeight: "1", paddingTop:"5px" }}>
                            <div className="row">

                              <div className="col-12" style={{ fontWeight: "500" }}>
                                {i.nickname}
                              </div>
                              <div className="col-12" style={{ color: "gray" }}>
                                {i.profilname}
                              </div>
                            </div>
                          </div>
                          <div className="col-2" style={{paddingTop:"12px"}}>
                            <i class="fa-solid fa-xmark fa-lg" style={{ cursor: "pointer" }}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  )

                  }
                </> :
                <>
                  <div className="col-12">Нет результата</div>
                </>

              }


            </div>
          </div>

        </div>
      </div>
      <div>
        <ul className="p-2" style={{ fontWeight: "400", display: "grid" }}>
          <li className="mt-5">
            <div style={{ float: "left" }} className='iconButton' onClick={Home}><div style={{ float: "left" }}><i class="fa-solid fa-house fa-xl"></i></div><div style={{ float: "left" }} className='blockForModal'><span className="blockForModal" style={{ marginLeft: "20px" }}>Главная</span> </div></div>
          </li>
          <li className="mt-2">
            <div style={{ float: "left" }} className='iconButton' onClick={() => { $('.MainFindBlock').css({ 'left': '70px', 'transition': '1s' }); $('.blockForModal').css({ 'display': 'none' }); $('.iconButton').css({ 'width': 'auto', 'paddingRight': '8px' }) }}><div style={{ float: "left" }}><i class="fa-solid fa-magnifying-glass fa-xl"></i></div><div className="blockForModal" style={{ marginLeft: "20px", float: "left" }}>Поисковый запрос</div></div>
          </li>
          <li className="mt-2 pt">
            <div style={{ float: "left" }} className='iconButton'><div style={{ float: "left" }}><i class="fa-solid fa-compass fa-xl"></i></div><div style={{ float: "left" }} className='blockForModal'><span className="blockForModal" style={{ marginLeft: "20px" }}>Интересное</span></div></div>
          </li>
          <li className="mt-2">
            <div style={{ float: "left" }} className='iconButton'><div style={{ float: "left" }}><i class="fa-solid fa-clapperboard fa-xl"></i></div><div style={{ float: "left" }} className='blockForModal'><span className="blockForModal" style={{ marginLeft: "20px" }}>Reels</span></div></div>
          </li>
          <li className="mt-2">
            <div style={{ float: "left" }} className='iconButton' onClick={() => history('/Message')}><div style={{ float: "left" }}><i class="fa-brands fa-facebook-messenger fa-xl"></i></div><div style={{ float: "left" }} className='blockForModal'><span className="blockForModal" style={{ marginLeft: "20px" }}>Сообщения</span></div></div>
          </li>
          <li className="mt-2">
            <div style={{ float: "left" }} className='iconButton'><div style={{ float: "left" }}><i class="fa-regular fa-heart fa-xl"></i></div><div style={{ float: "left" }} className='blockForModal'><span className="blockForModal" style={{ marginLeft: "20px" }}>Уведомление</span></div></div>
          </li>
          <li className="mt-2">
            <div style={{ float: "left" }} className='iconButton'><div style={{ float: "left" }}><i class="fa-solid fa-square-plus fa-xl"></i></div><div style={{ float: "left" }} className='blockForModal'><span className="blockForModal" style={{ marginLeft: "20px" }}>Создать</span></div></div>
          </li>
          <li className="mt-2">
            <div style={{ float: "left" }} className='iconButton' onClick={goinprofil}><div style={{ float: "left" }}><i class="fa-solid fa-user fa-xl"></i></div><div style={{ float: "left" }} className='blockForModal'><span className="blockForModal" style={{ marginLeft: "20px" }}>Профиль</span></div></div>
          </li>
          <li className=" pt-5">
            <div style={{ float: "left" }} className='iconButton'><div style={{ float: "left" }}><i class="fa-brands fa-threads fa-xl"></i></div><div style={{ float: "left" }} className='blockForModal'><span className="blockForModal" style={{ marginLeft: "20px" }}>Threads</span></div></div>
          </li>
          <li className="mt-3 pb-3">
            <div style={{ float: "left" }} className='iconButton' onClick={() => setModal(true)} ><div style={{ float: "left" }}><i class="fa-solid fa-bars fa-xl"></i></div> <div style={{ float: "left" }} className='blockForModal'><span className="blockForModal" style={{ marginLeft: "20px" }}>Еще</span></div></div>
          </li>
        </ul>
      </div>

    </div>
  )
}
