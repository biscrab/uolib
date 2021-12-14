import '../App.css';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
import * as P from  '../pages'
import Header from '../contents/Header'
import Footer from '../contents/Footer'

function App() {

  const location = useLocation();

  useEffect(()=>{
    window.scroll(0, 0);
  },[location.pathname])

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<P.Main />}/>
        <Route exact path="/novel/:id" element={<P.Novel />}/>
        <Route exact path="/new" element={<P.New />}/>
        <Route exact path="/search/:type/:keyword/:page" element={<P.Search />} />
        <Route exact path= "/search" element={<P.Search />}/>
        <Route exact path="/contest" element={<P.Contest />}/>
        <Route exact path="/mypage" element={<P.MyPage />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
