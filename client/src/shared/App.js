import '../App.css';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
import * as P from  '../pages'
import Header from '../contents/Header'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route exact path="/" element={<P.Main />}/>
    </Routes>
    </>
  );
}

export default App;
