import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import * as S from '../styled/App'
import '../styles/index.css'
import '../styles/App.css'

function MyApp({ Component, pageProps }: AppProps) {

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(false)
  })

  return (
    <>
      <title>유라이브</title>
      <link href="https://cdn-icons-png.flaticon.com/512/3627/3627782.png" rel="shortcut icon" type="image/x-icon"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet"></link>
      <Header />
      <Component {...pageProps} />
      <Footer />
      {loading ?
      <S.LoadingBackground>
        <div className="spinner-border text-secondary" style={{width: "4rem", height: "4rem"}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <S.LoadingText>로딩 중</S.LoadingText>
      </S.LoadingBackground>
      :
      <></>
      }
    </>
  )
}

export default MyApp
