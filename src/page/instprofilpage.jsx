import { Lnav } from './leftnav';
import $ from "jquery";
import { useEffect, useState } from 'react';
import Modalprofil from './modalprofilpage';
import { Users,  posts } from './elemet';
import ModalHistory from '../modalwindow/modalhistory';
import { useNavigate } from 'react-router-dom';



function Second() {
  const history = useNavigate()
  function profpost(id){
    history('/profildifferent/'+id)

  }
  const [modalInfoOpen, setmodalInfoOpen] = useState(false);
  const [userDetail, setUserDetail] = useState(null);
  const [products, setProducts] = useState([]);
  const [productsHistory, setProductsHistory] = useState([])
  const [historyTimeout, sethistoryTimeout] = useState(false);
  function CloseHistoryModal(){
    sethistoryTimeout(false)
  }
  function Closemodal() {
    setmodalInfoOpen(false)
  }
  function UserDetails() {
    const user = Users.filter((i) => i.id == localStorage.getItem('token'));
    if (user.length > 0) {
      setUserDetail(user[0]);
    }
    else{
      setUserDetail(null)
    }
  }
  useEffect(() => {
    UserDetails();
    fetchProducts();
    showhistory();
  }, [])
  const fetchProducts = () => {
    const product = posts.filter((i) => i.user_id != localStorage.getItem('token'));
    if (product.length > 0) {
      setProducts(product);
    } else {
      setProducts([]);
    }
  }
  const showhistory = () => {
    const productHistory = Users.filter((i) => i.id != localStorage.getItem('token'));
    if (productHistory.length > 0) {
      setProductsHistory(productHistory);
    }
    else {
      setProductsHistory([])
    }
  }

  return (

    <div className={historyTimeout ? "container-fluid p-0 forHistoryContainer" : "container-fluid p-0"}>
      <Lnav></Lnav>
      <Modalprofil isOpen={modalInfoOpen} isClose={Closemodal}></Modalprofil>
      <ModalHistory isOpen={historyTimeout} isClose={CloseHistoryModal}></ModalHistory>
      <div className="row">
        {userDetail != null ?
          <div className={modalInfoOpen ? "modal22 col-12 mt-4" : "col-12 mt-4"}>
            <div className="row">
              <div className="col-7">
                <div className="col-12">
                  <div className="main border-0 ml-3">
                    {productsHistory.length > 0 ?
                      <>
                        {productsHistory.map((i) =>
                          <div className="history" style={{cursor:"pointer", textAlign:"center"}} onClick={()=>sethistoryTimeout(true)}><img className='imgHistory' src={i.img} alt="" /><br /><p style={{float:"left", textAlign:"right", maxHeight:"20px", maxWidth:"65px", overflow: "hidden", textOverflow: "clip", whiteSpace: "nowrap"}} ><small style={{ fontSize: "13px" }}>{i.nickname}</small></p>
                          </div>
                        )}
                      </>

                      : <></>}
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <div className="mainpost" style={{ width: "450px", float: "left", marginLeft: "175px" }}>
                    {products.length > 0 ?
                      <>
                        {products.map((i) =>
                          <div className="row mt-3">
                            <div className="col-12 p-0">
                              <div className="row">
                                <div className="col-2">
                                  <div className="circleProfilImg rounded-circle" style={{ height: "40px", width: "40px", borderStyle: "solid", borderColor: "orangered", cursor:"pointer" }} onClick={() => {profpost(i.user_id)}}></div>
                                </div>
                                <div className="col-8 p-0">
                                  <div className="row">
                                    <div className="col-12 p-0" style={{ lineHeight: "1.2" }}><span style={{ fontWeight: "500" }}>{i.postaccount}</span><span style={{ marginLeft: "10px" }}>26мин</span><br /><small style={{ fontWeight: "400" }}>Оригиниальное аудио</small></div>
                                  </div>
                                </div>
                                <div className="col-2" style={{ textAlign: 'right' }}>
                                  <i class="mt-3 fa-solid fa-ellipsis fa-lg"></i>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 mt-2 p-0">
                              <img className="p-0" src={i.img} alt="" style={{ width: "inherit" }} />
                            </div>
                            <div className="col-12 mt-3 p-0">
                              <div className="row">
                                <div className="col-6"><i style={{ cursor: "pointer" }} class="fa-solid fa-heart fa-2xl likeRed" onClick={() => { $('.likeRed').css({ 'color': 'red', 'transition': '200ms' }) }}></i><i class="fa-regular fa-comment fa-2xl ml-2 p-3"></i><i class="fa-regular fa-paper-plane fa-2xl"></i></div>
                                <div className="col-6" style={{ textAlign: "right" }}><i class="fa-regular fa-bookmark fa-2xl"></i></div>
                              </div>
                            </div>
                            <div className="col-12 p-0 mt-2">
                              Нравится ... и другим
                            </div>
                            <div className="col-12 p-0 mt-2">
                              <span style={{ fontWeight: "500" }}>{i.postaccount}</span><small> {i.posttext}</small>
                            </div>
                            <div className="col-12 p-0 mt-2">
                              #{userDetail.postheshteg}
                            </div>
                            <div className="col-12 p-0 mt-2 text-secondary">
                              <button className="bg-white border-0 text-secondary">Посмотреть все комментарии  ({i.postcommnet})</button>
                            </div>
                            <div className="col-12 p-2 mt-2 pb-4" style={{ borderBottom: "solid 1px" }}>
                              <input type="text" placeholder="Добавьте комментарий" style={{ width: "300px", outline: "none" }} className="border-0" /><button className="text-primary bg-white border-0" style={{ float: "right" }}>опубликовать</button>
                            </div>
                          </div>
                        )
                        }

                      </>
                      : <>


                      </>
                    }
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="leftProfil" style={{ width: "350px", height: "100px", float: "right" }}>
                  <div className="row">
                    <div className="col-12 ">
                      <div className="row">
                        <div className="col-2">
                          <div className="circleProfilImg rounded-circle" style={{ height: "40px", width: "40px", borderStyle: "solid", borderColor: "orangered" }}>
                            <img className='rounded-circle' src={userDetail.img} style={{width:"40px", paddingRight:"5px"}} alt="" />
                          </div>
                        </div>
                        <div className="col-4 p-0" style={{ lineHeight: "1.2" }}>
                          <span className="" style={{ fontWeight: "500" }}>
                            <small>{userDetail.login}</small></span>
                          <br />
                          <span className="text-secondary">
                            {userDetail.profilname}
                          </span>

                        </div>
                        <div className="col-6 p-0  " style={{ textAlign: "right" }}>
                          <button onClick={() => setmodalInfoOpen(true)} style={{ textAlign: "right" }} className="text-primary bg-white border-0"><small>переключиться</small></button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 text-secondary mt-5" style={{ fontWeight: "500" }}>
                      <small style={{ textAlign: "left" }}>Рекомендации для вас</small>
                      <small style={{ textAlign: "right", float: "right" }}>Все</small>
                    </div>
                    <div className="col-12 mt-5">
                      <div className="row">
                        <div className="col-2">
                          <div className="circleProfilImg rounded-circle" style={{ height: "40px", width: "40px", borderStyle: "solid", borderColor: "orangered" }}>
                          <img className='rounded-circle' src={userDetail.img} style={{width:"40px", paddingRight:"5px"}} alt="" />
                          </div>
                        </div>
                        <div className="col-4 p-0" style={{ lineHeight: "1.2" }}>
                          <span className="" style={{ fontWeight: "500" }}>
                            <small>{userDetail.login}</small></span>
                          <br />
                          <span className="text-secondary">
                            {userDetail.profilname}
                          </span>

                        </div>
                        <div className="col-6 p-0  " style={{ textAlign: "right" }}>
                          <button onClick={() => setmodalInfoOpen(true)} style={{ textAlign: "right" }} className="text-primary bg-white border-0"><small>подписаться</small></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          :
          <>
          </>
        }
      </div>
    </div>
  )
}
export default Second