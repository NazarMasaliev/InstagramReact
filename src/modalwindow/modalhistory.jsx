import { useEffect } from "react"
import $ from "jquery";

function ModalHistory({ isOpen, isClose }) {
  function move(){ $('.TimeoutHistoryWhiteBorder').css({ "width": "90%", "transition": "4s"})
  }
  setTimeout(move,500)

  


  return (
    <>{isOpen && (
      <div className="BackgroundModalHistory">
        <div className="ModalHistory" style={{ display: "flex" }}>
          <div className="TimeoutHistoryWhiteBorder" style={{ marginLeft: "18px", height: "1px", borderRadius: "10px",borderBottomColor: "white", borderStyle: "solid", width: "0%"}}></div>
          <i class="fa-regular fa-heart fa-xl" style={{color:"white", position:"absolute",left:"900px", top:"630px"}}></i>
          <i class="fa-regular fa-paper-plane fa-xl" style={{color:"white", position:"absolute",left:"850px", top:"630px"}}></i>
        </div>
        <i onClick={isClose}  class="fa-solid fa-xmark fa-2xl" style={{color:"white",position:"absolute", left:"1430px", top:"40px",fontSize:"40px",cursor:"pointer"}}></i>
      </div>
    )}
    </>
  )
}
export default ModalHistory