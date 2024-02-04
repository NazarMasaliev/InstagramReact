import { useState } from "react"
import Modalprofil from "./modalprofilpage"
import { useNavigate } from "react-router-dom";
import { Users } from "./elemet";

function Modalexit({isOpen, isClose}){
  const history = useNavigate()
  const [modal, setmodal] = useState(false);
  function close(){
    setmodal(false)
  }
  const exit = () =>{
    localStorage.removeItem('token')
    history('/')
  }

  return(
    <>{ isOpen && (
    <div className="MainModalExit">
      <Modalprofil isOpen={modal} isClose={close} ></Modalprofil>
      <button className="btnInModal rounded">Настройки</button>
      <button className="btnInModal rounded">Ваши действия</button>
      <button className="btnInModal rounded">Сохраненное</button>
      <button className="btnInModal rounded" >Переключить режим</button>
      <button className="btnInModal rounded">Сообщить о проблеме</button>
      <button className="btnInModal rounded" onClick={() => setmodal(true)}>Переключение между аккаунтами</button>
      <button className="btnInModal rounded" onClick={exit}>Выйти</button>
      <button className="btnInModal rounded" onClick={isClose}>Развернуть</button>
    </div>)}</>
  )
}
export default Modalexit