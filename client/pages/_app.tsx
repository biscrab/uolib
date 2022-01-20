import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import * as S from '../styled/App'
import '../styles/index.css'
import '../styles/App.css'
import dynamic from 'next/dynamic'
import {useRouter} from 'next/router'
import Loading from '../components/Loading.js'
import axios from 'axios';

function MyApp({ Component, pageProps }: AppProps) {
  
  const router = useRouter();
  const pathname = router.pathname;

  const DynamicComponentWithCustomLoading = dynamic(
    () => import('../components/Loading.js'),
    { loading: () => <Loading /> }
  )

  const [setting, setSetting] = useState();

  useEffect(()=>{
    /*axios.get('/setting')
      .then(res => setSetting(res.data));*/
  },[])

  return (
    <>
      <title>유라이브</title>
      <link href="https://cdn-icons-png.flaticon.com/512/3627/3627782.png" rel="shortcut icon" type="image/x-icon"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.2.0/css/all.min.css" integrity="sha512-6c4nX2tn5KbzeBJo9Ywpa0Gkt+mzCzJBrE1RB6fmpcsoN+b/w/euwIMuQKNyUoU/nToKN3a8SgNOtPrbW12fug==" crossOrigin="anonymous" />
      {!pathname.includes("viewer") ?
      <Header />
      :
      <></>
      }
      <Component {...pageProps} />
      {!pathname.includes("viewer") ?
      <Footer />
      :
      <></>
      }
    </>
  )
}

export default MyApp
