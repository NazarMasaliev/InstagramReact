import { useEffect, useState } from "react"
import MessLeft from "./messegpageicon"
import { Users, messages } from "./elemet";


function Message() {
  const [login, setLogin] = useState(null)
  function showLoginInPage() {
    const login = Users.filter((i) => i.id == localStorage.getItem('token'))
    if (login.length > 0) {
      setLogin(login[0])
    }
    else {
      setLogin(null)
    }
  }

//

  const [messageElement, setmessageElement] = useState([]);
  const Show = () => {
    const usermessage = Users.filter((i) => i.user1 == localStorage.getItem('token') || i.user2 == localStorage.getItem('token'));
    if (usermessage.length > 0) {
      setmessageElement(usermessage);
    }
    else {
      setmessageElement([])
    }
  }


//




  const [chat, setChat] = useState([]);
  const token = localStorage.getItem('token');
 
  const ShowChat = (id) => {
    const usermessage = messages.filter((i) => i.chat_id == id);
    if (usermessage.length > 0) {
      setChat(usermessage);
    }
    else {
      setChat([])
    }
  }

  //


  useEffect(() => {
    Show();
    showLoginInPage();
  }, [])



  return (
    <div className="container-fluid p-0" style={{ position: "fixed" }}>
      <MessLeft></MessLeft>

      <div className="row">
        <div className="col-12 p-0">
          <div className="messageDiv" style={{ width: "28%", float: "left", paddingLeft: "27px" }}>
            <div className="row">
              <div className="col-12 mt-5">
                <div className="row">
                  {login != null ?
                    <div className="col-6">
                      <span style={{ fontWeight: "700", fontSize: "22px", }}>{login.nickname}</span>
                    </div>
                    : <></>}
                  <div className="col-6" style={{ textAlign: "right" }}>
                    <i class="fa-solid fa-pen-to-square fa-xl" style={{ marginRight: "25px" }}></i>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-6 mt-3">
                    <span style={{ fontWeight: "700" }}>Сообщения</span>
                  </div>
                  <div className="col-6 mt-3" style={{ textAlign: "right" }}>
                    <span style={{ color: "gray", fontWeight: "600", marginRight: "12px" }}><small>Запросы </small></span>
                  </div>
                </div>
              </div>
              <div className="col-12 overInCol mt-1" style={{ cursor: "pointer" }}>
                <div className="row">
                  {messageElement.length > 0 ?
                    <>
                      {messageElement.map((i) =>
                        <div className="col-12 mt-3 darkBg" style={{ cursor: "pointer" }} onClick={() => ShowChat(i.id)}>
                          <div className="row">
                            <div className="col-2">
                              <img className="rounded-circle" src={i.img} alt="" style={{ width: "60px", height:"60px" }} />
                            </div>
                            <div className="col-9 mt-2" style={{ lineHeight: "1.3" }}>
                              <div className="row">
                                <div className="col-12">
                                  <span>{i.profilname}</span>
                                </div>
                                <div className="col-12">

                                  <small style={{ fontSize: "13px" }}>
                                    Последнее сообщение
                                  </small>

                                </div>
                              </div>
                            </div>
                            <div className="col-1"></div>
                          </div>
                        </div>
                      )}
                    </>
                    :
                    <></>}
                </div>
              </div>
            </div>
          </div>
          <div className="MessageShowDiv border" style={{ width: "72%", float: "left", height: "725.5px" }}>
            {chat.length > 0 ?
              <>
                {chat.map((i) =>
                  <div className="row" style={{ padding: "10px" }}>
                    <div className="col-12 pt-2 pb-3 border-bottom">
                      <div className="row">
                        <div className="col-6" >
                          <button style={{ border: "none", background: "white" }}>
                            <img style={{ width: "50px" }} src="https://avatars.mds.yandex.net/i?id=d0525adcc4e0165ea8a89c446d00ff523bbe7ff7-12525650-images-thumbs&n=13" className="rounded-circle" alt="" />
                          </button>
                          <button style={{ marginTop: "10px", background: "white", border: "none" }}><b>{i.profilname}</b></button>

                        </div>
                        <div className="col-6 pt-1" style={{ textAlign: "right" }}>
                          <i class="fa-solid fa-phone fa-xl " style={{ marginRight: "15px" }}></i>
                          <i class="fa-solid fa-video fa-xl" style={{ marginRight: "15px" }}></i>
                          <i class="fa-solid fa-circle-exclamation fa-xl" style={{ marginRight: "15px" }}></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 scrollDiv2">
                      <div className="row">
                        <div className="col-12" style={{ textAlign: "center" }}>
                          <div className="row">
                            <div className="col-12 mt-4">
                              <img className="rounded-circle" style={{ width: "100px" }} src="https://avatars.mds.yandex.net/i?id=d0525adcc4e0165ea8a89c446d00ff523bbe7ff7-12525650-images-thumbs&n=13" alt="" />
                            </div>
                            <div className="col-12 mt-4">
                              <i class="fa-solid fa-phone fa-xl"></i>
                            </div>
                            <div className="col-12">
                              <span style={{ color: "gray" }}>
                                {i.profilname}... Instagram
                              </span>
                            </div>
                            <div className="col-12">
                              <button className="rounded border-0 mt-4"> Смотреть профиль</button>
                            </div>
                          </div>
                        </div>

                        <>
                          {i.user_id != token ?
                            <div className="col-12 mt-5" style={{ textAlign: "left" }}>
                              <img className="rounded-circle" style={{ width: "30px", marginLeft: "10px" }} src="https://avatars.mds.yandex.net/i?id=d0525adcc4e0165ea8a89c446d00ff523bbe7ff7-12525650-images-thumbs&n=13" alt="" />
                              <span className="rounded-pill" style={{ marginLeft: "5px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", background: "#EFEFEF" }}>
                                {i.message}
                              </span>
                            </div>
                            :
                            <div className="col-12 mt-4" style={{ textAlign: "right" }}>
                              <span className="rounded-pill text-white" style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", background: "#3797F0" }}>
                                {i.message}
                              </span>
                            </div>
                          }
                        </>

                      </div>
                    </div>
                    <div className="col-12 mt-3">
                      <div className="row">
                        <div className="col-11 border rounded-pill" style={{ height: "45px", paddingTop: "8px", marginLeft: "40px", }}>
                          <div className="Smile" style={{ width: "4%", float: "left" }}>
                            <i class="fa-solid fa-face-smile fa-xl"></i>
                          </div>
                          <div className="InpWrite" style={{ float: "left", width: "80%" }}>
                            <div className="form-group border-0">
                              <input style={{ width: "100%", }} type="text" className="inpinmessage" placeholder="Напишите что нибудь" />
                            </div>
                          </div>
                          <div className="iconDivInMessage" style={{ float: "left", textAlign: "right", width: "16%" }}>
                            <i class="fa-solid fa-microphone fa-xl" style={{ textAlign: "right", marginRight: "13px" }}></i><i class="fa-regular fa-image fa-xl" style={{ textAlign: "right", marginRight: "13px" }}></i><i class="fa-regular fa-heart fa-xl" style={{ textAlign: "right", marginRight: "13px" }}></i>
                          </div>

                        </div>
                      </div>

                    </div>

                  </div>
                )}
              </>
              :
              <></>}
          </div>
        </div>
      </div>

    </div>

  )
}
export default Message