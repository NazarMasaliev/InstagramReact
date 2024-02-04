import { Lnav } from "./leftnav"
import { Users } from "./elemet"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ActualyInProfil, PostLenta } from "../api/Publicationinprofil";


function Profile() {
  const history = useNavigate()
  const [actualyImg, setActualyImg] = useState([]);
  const [postLenta, setpostLenta] = useState([]);
  const [thisUser2, setthisUser] = useState(null);
  function ShowPostLenta() {
    const lenta = PostLenta.filter((i) => i.post_in_profil == localStorage.getItem('token'))
    if (lenta.length > 0) {
      setpostLenta(lenta)
    }
    else {
      setpostLenta([])
    }
  }



  function showActualyImg() {
    const actualy = ActualyInProfil.filter((i) => i.actualy_id == localStorage.getItem('token'))
    if (actualy.length > 0) {
      setActualyImg(actualy)
    }
    else {
      setActualyImg([])
    }
  }
  const Show = () => {
    let search = Users.filter((i) => i.id == localStorage.getItem('token'));
    console.log('user', search);
    if (search.length > 0) {
      setthisUser(search[0]);
    } else {
      setthisUser(null);
    }
  }
  useEffect(() => {
    showActualyImg();
    Show();
    ShowPostLenta();
  }, [])
  return (
    <div className="container-fluid p-0">
      <Lnav />
      {thisUser2 != null ?
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12 mt-4">
                <div className="row">
                  <div className="col-4 text-right pt-4" style={{ textAlign: "right" }}>
                    <img src={thisUser2.img} alt="" width={150} style={{ borderRadius: "50%", marginRight: "30px" }} />
                  </div>
                  <div className="col-8">
                    <div className="row">
                      <div className="col-12 pt-3" style={{ paddingLeft: "50px" }}>
                        <span style={{ fontSize: "20px" }}>{thisUser2.name}</span> <button className="Rprofil" style={{ marginLeft: "20px" }}>Редактировать профиль</button><button className="Rprofil" style={{ marginLeft: "20px" }}>Посмотреть архив</button><button className="bg-white border-0" style={{ marginLeft: "20px" }}><i class="fa-solid fa-gear fa-xl"></i></button>
                      </div>
                      <div className="col-12 mt-3">
                        <button className="bg-white border-0" style={{ marginLeft: "30px" }}> <span style={{ fontWeight: "500" }}>{thisUser2.profilpublication}</span> публикаций</button> <button className="bg-white border-0"> <span style={{ fontWeight: "500", marginRight: "5px" }}>{thisUser2.profilfollowers}</span>подписчиков</button>  <button className="bg-white border-0"> <span style={{ fontWeight: "500", marginRight: "5px" }}>{thisUser2.profilfollower}</span>подписок</button>
                      </div>
                      <div className="col-12 mt-3" style={{ fontWeight: "600", paddingLeft: "45px" }}>
                        {thisUser2.name}
                      </div>
                      <div className="col-12 mt-1">
                        <button className="border-0 rounded pl-2 pr-2" style={{ marginLeft: "30px" }}><span style={{ fontWeight: "600" }}>@</span>&nbsp;<small>{thisUser2.threads}</small></button>
                      </div>
                      <div className="col-12 mt-2" style={{ marginLeft: "30px" }}>
                        <small> {thisUser2.description}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-4 border" style={{width:"100%", height:"150px", maxHeight:"150px", maxWidth:"100%", overflowX:"Scroll", overflowY:"hidden"}}>
                {actualyImg.length > 0 ?
                  <>
                    {actualyImg.map((i) =>
                      <div className="maincurrnet border" style={{float:"left", textAlign: "center", fontWeight: "500" }}>
                        <div className="currnet rounded-circle" style={{ borderStyle: "solid" }}>
                          <img src={i.img} alt="" style={{ borderRadius: "50%", width: "75px", height: "75px" }} />
                        </div>
                        <br /><br /><br /><small style={{ textAlign: "center" }}>{i.name}</small>
                      </div>
                    )}
                  </>
                  :
                  <>
                  </>
                }
                <div className="maincurrnet" style={{ textAlign: "center", fontWeight: "500" }}>
                  <div className="currnet rounded-circle border" style={{ background: "#FAFAFA", cursor: "pointer" }}><i class="fa-solid fa-plus fa-2xl text-secondary" style={{ float: "left", marginLeft: "20px", marginTop: "40px", fontSize: "50px" }}></i></div>
                  <br /><br /><br /><small>добавить</small>
                </div>
              </div>
              <div className="col-12 mt-5">
                <div className="border" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "900px", height: "1px", marginLeft: "150px" }}></div>
              </div>
              <div className="col-12">
                <div className="ggwp"><i class="fa-solid fa-table-cells fa-xs"></i> <small>ПУБЛИКАЦИИ</small></div>
                <div className="ggwp"><i class="fa-solid fa-film fa-xs"></i> <small>REELS</small></div>
                <div className="ggwp"><i class="fa-regular fa-bookmark fa-xs"></i> <small>СОХРАНЕННОЕ</small></div>
                <div className="ggwp"><i class="fa-regular fa-user fa-xs"></i> <small>ОТМЕТКИ</small></div>
              </div>
              <div className="col-12 mt-3">
                <div className="content" style={{ width: "900px", marginLeft: "150px", float: "left" }}>
                  <div className="row">
                    {postLenta.length > 0 ?
                      <>
                        {postLenta.map((i) =>
                          <div className="col-4">
                            <img className="border" src={i.img} alt="" style={{ width: "290px" }} />
                          </div>
                        )}
                      </>
                      : <></>
                    }
                  </div>
                </div>
              </div>
              <footer className="mt-4 pb-5" style={{ fontSize: "12px", textAlign: "center", textDecoration: "none" }}>

                <a href="#" style={{ color: "gray", textDecoration: "none" }}>Meta</a>
                <a className="footerA" href="#">Информация</a>
                <a className="footerA" href="#">Блог</a>
                <a className="footerA" href="#">Вакансии</a>
                <a className="footerA" href="#">Помощь</a>
                <a className="footerA" href="#">API</a>
                <a className="footerA" href="#">Конфиденциальность</a>
                <a className="footerA" href="#">Условия</a>
                <a className="footerA" href="#"></a> Места
                <a className="footerA" href="#">Instagram Lite</a>
                <a className="footerA" href="#">Threads</a>
                <a className="footerA" href="#">Загрузка контактов и лица, не являющиеся пользователями</a>
                <a className="footerA" style={{ color: "gray", textDecoration: "none" }} href="#">Meta Verified</a>
                <br />
                <div style={{ float: "left", textAlign: "center", width: "inherit" }} className="mt-3">

                  <a className="footerA" href="#">Русский</a>
                  <a className="footerA">© 2024 Instagram from Meta</a>
                </div>


              </footer>
            </div>
          </div>
        </div>
        : <></>}
    </div>


  )
}
export default Profile;