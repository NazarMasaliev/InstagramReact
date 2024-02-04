import { useEffect, useState } from 'react';
import image from './image.jpg';
import { Users } from './elemet';
import { useNavigate } from 'react-router-dom';
function First() {
  const [frominp, setFrominp] = useState("");
  const [frominp2, setFrominp2] = useState("");
  const history = useNavigate()
  const goin = () =>{
    const search = Users.filter((i) => i.login == frominp && i.password == frominp2 )
    if(search.length > 0){
      localStorage.setItem('token', search[0].id)
      history('/instprofilpage')
    }
    else{
      alert("Error")
    }
  }
 
  
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-6" style={{ textAlign: "right" }}>
              <img className="App-image" alt="image" src={image} style={{width:"600px"}} />
            </div>
            <div className="col-6">
              <div className="row">
                <div className='col-6'>
                  <div className='row'>
                    <div className='col-12 border' style={{textAlign:"center"}}>
                        <div className='row'>
                          <div className='col-12 mt-5' style={{textAlign:"center"}}>
                           
                          </div>
                          <div className='col-12 mt-4'>
                            <input placeholder='Логин' style={{borderWidth:"2px", borderStyle:"solid", borderRadius:"2px", width:"250px", height:"35px", paddingLeft:"10px"}} className='bg-light border' type="text" onChange={(e)=> setFrominp(e.target.value)} />
                          </div>
                          <div className='col-12 mt-1'>
                            <input placeholder='пароль' style={{borderWidth:"2px", borderStyle:"solid", borderRadius:"2px", width:"250px", height:"35px", paddingLeft:"10px"}} className='bg-light border' type="password" onChange={(e)=> setFrominp2(e.target.value)} />
                          </div>
                          <div className='col-12'>
                            <button onClick={goin} className=' rounded mt-4 btn btn-primary' style={{width:"250px"}} >Войти</button>
                          </div>
                          <div className='col-12 mt-2' style={{textAlign:"center"}}>
                            или
                          </div>
                          <div className='col-12 mt-4'>
                          <p style={{color:"#385185"}}><i class="fa-brands fa-facebook"></i> Войти через Facebook</p>
                          </div>
                          <div className='col-12 mt-3'>
                            <p style={{color:"#385185"}}><small>забыли пароль?</small></p>
                          </div>
                        </div>
                    </div>
                    <div className='col-12 border pt-3 pb-3 mt-3' style={{paddingLeft:"20px"}}>
                      <small>У вас еще нет аккаунта? <sapn style={{color:"blue"}}>Зарегистрироваться</sapn></small>
                    </div>
                    <div className='col-12 mt-3' style={{textAlign:"center"}}>
                        Установите приложение.
                    </div>
                    <div className='col-12 mt-3' style={{color:"white", float:"left"}}>
                      <div className='bg-dark rounded p-2' style={{float:"left", marginLeft:"10px"}}>
                      <i class=" ml-2 fa-brands fa-google-play fa-2xl"></i>
                      <span style={{marginLeft:"10px"}}>Google play</span>
                      </div>
                      <div className='bg-dark p-2 rounded' style={{float:"left", marginLeft:"20px"}}>
                      <i class="fa-brands fa-microsoft fa-2xl"></i><span style={{marginLeft:"10px"}}>Microsoft</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-6'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default First