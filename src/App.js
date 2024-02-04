import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import First from './page/firstinstpage';
import Second from './page/instprofilpage';
import Profile from './page/fprofil';
import Message from './page/Message';
import DifferentProfil from './page/profildifferent';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<First />} />
        <Route path='/instprofilpage' element={<Second />} />
        <Route path='/fprofil' element={<Profile />} />
        <Route path='/Message' element={<Message />} />
        <Route path='/profildifferent/:id' element={<DifferentProfil />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
