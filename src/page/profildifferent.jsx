import { useParams } from "react-router-dom"
import { Lnav } from "./leftnav"
import { useEffect, useState } from "react";
import { Users } from "./elemet";
import { ActualyInProfil, PostLenta } from "../api/Publicationinprofil";


function DifferentProfil() {
  const params = useParams();
  const id = params.id;

  //

  const [ProfilElement, setProfilElement] = useState(null);
  const showProfilElement = () => {
    const Elemet = Users.filter((i) => i.id == id)
    if (Elemet.length > 0) {
      setProfilElement(Elemet[0])
    }
    else {
      setProfilElement(null)
    }
  }


  //


  const [actualyElement, setActualyElement] = useState([]);
  function showActualy() {
    const show = ActualyInProfil.filter((i) => i.actualy_id == id)
    if (show.length > 0) {
      setActualyElement(show)
    }
    else {
      setActualyElement([])
    }
  }

  // 

  const [postLenta, setpostLenta] = useState([]);
  function show_post() {
    const show = PostLenta.filter((i) => i.post_in_profil == id)
    if (show.length > 0) {
      setpostLenta(show)
    }
    else {
      setpostLenta([])
    }
  }




  useEffect(() => {
    showProfilElement();
    showActualy();
    show_post();
  }, [])

  return (




    <div className="container-fluid p-0">
      <Lnav />
      {ProfilElement != null ?
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12 mt-4">
                <div className="row">
                  <div className="col-4 text-right pt-4" style={{ textAlign: "right" }}>
                    <img src={ProfilElement.img} alt="" width={150} style={{ borderRadius: "50%", marginRight: "30px", maxWidth:"150px", maxHeight:"150px" }} />
                  </div>
                  <div className="col-8">
                    <div className="row">
                      <div className="col-12 pt-3" style={{ paddingLeft: "50px" }}>
                        <span style={{ fontSize: "20px" }}></span> <button className="Rprofil" style={{ marginLeft: "20px" }}>Редактировать профиль</button><button className="Rprofil" style={{ marginLeft: "20px" }}>Посмотреть архив</button><button className="bg-white border-0" style={{ marginLeft: "20px" }}><i class="fa-solid fa-gear fa-xl"></i></button>
                      </div>
                      <div className="col-12 mt-3">
                        <button className="bg-white border-0" style={{ marginLeft: "30px" }}> <span style={{ fontWeight: "500" }}>{ProfilElement.profilpublication}</span> публикаций</button> <button className="bg-white border-0"> <span style={{ fontWeight: "500", marginRight: "5px" }}>{ProfilElement.profilfollowers}</span>подписчиков</button>  <button className="bg-white border-0"> <span style={{ fontWeight: "500", marginRight: "5px" }}>{ProfilElement.profilfollower}</span>подписок</button>
                      </div>
                      <div className="col-12 mt-3" style={{ fontWeight: "600", paddingLeft: "45px" }}>
                        {ProfilElement.profilname}
                      </div>
                      <div className="col-12 mt-1">
                        <button className="border-0 rounded pl-2 pr-2" style={{ marginLeft: "30px" }}><span style={{ fontWeight: "600" }}>@</span>&nbsp;<small>{ProfilElement.profilname}</small></button>
                      </div>
                      <div className="col-12 mt-2" style={{ marginLeft: "30px" }}>
                        <small> {ProfilElement.description}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {actualyElement.length > 0 ?
                <>
                  {actualyElement.map((i) =>

                    <div className="col-12 mt-4">
                      <div className="maincurrnet" style={{ textAlign: "center", fontWeight: "500" }}>
                        <div className="currnet rounded-circle" style={{ borderStyle: "solid" }}>
                          <img src={i.img} alt="" style={{ borderRadius: "50%", width: "75px", height: "75px" }} />
                        </div>
                        <br /><br /><br /><small>{i.name}</small>
                      </div>
                    </div>
                  )
                  }
                </>
                : <></>
              }

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
                    {postLenta.length > 0 ? <>
                      {postLenta.map((i) =>
                        <div className="col-4">
                          <img src={i.img} alt="" style={{ width: "290px" }} />
                        </div>
                      )}
                    </>
                      : <></>}


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


export default DifferentProfil