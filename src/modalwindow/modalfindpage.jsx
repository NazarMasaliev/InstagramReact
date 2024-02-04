function Modalfindpage({ isOpen, isClose }) {
  return (
    <>{isOpen && (
      <div className="MainFindBlock border bg-white p-3 rounded">
        <div className="row">
          <div className="col-12 mt-1">
            <h4>Поисковый запрос</h4><i class="fa-solid fa-circle-xmark fa-lg" style={{ cursor: "pointer", float: "right" }} onClick={isClose}></i>
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
    )}</>
  )
}
export default Modalfindpage