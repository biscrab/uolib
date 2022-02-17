import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
//import type { AppProps } from 'next/app'
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
/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg1OlFnO6jcO7l9l_NK0x3kyJICjaglSQ",
  authDomain: "uolib-337211.firebaseapp.com",
  projectId: "uolib-337211",
  storageBucket: "uolib-337211.appspot.com",
  messagingSenderId: "236232072754",
  appId: "1:236232072754:web:81e3fb61896ad341d4e62b",
  measurementId: "G-Q1NR8N7C9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/

function MyApp({ Component, pageProps }/*: AppProps*/) {
  
  const router = useRouter();
  const pathname = router.pathname;

  const DynamicComponentWithCustomLoading = dynamic(
    () => import('../components/Loading.js'),
    { loading: () => <Loading /> }
  )

  const [setting, setSetting] = useState();

  axios.defaults.baseURL = "https://uolib.herokuapp.com"

  useEffect(()=>{
    /*axios.get('/setting')
      .then(res => setSetting(res.data));*/
      if("serviceWorker" in navigator) {
        window.addEventListener("load", function () {
         navigator.serviceWorker.register("/worker.js").then(
            function (registration) {
              console.log("Service Worker registration successful with scope: ", registration.scope);
            },
            function (err) {
              console.log("Service Worker registration failed: ", err);
            }
          );
        });
      }

      Notification.requestPermission().then(function(result) {
      });
      
  },[])

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <>
      <title>유라이브</title>
      <link href="https://cdn-icons-png.flaticon.com/512/3627/3627782.png" rel="shortcut icon" type="image/x-icon"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet"></link>
      <script src="https://kit.fontawesome.com/ed23fb601b.js" crossOrigin="anonymous"></script>
      <link rel="manifest" href="../public/manifest.json" />
      {!pathname.includes("viewer") ?
      <Header />
      :
      <></>
      }
      <Component {...pageProps} />
      {!pathname.includes("viewer") || !pathname.includes("login") || !pathname.includes("signup")?
      <Footer />
      :
      <></>
      }
      <Loading loading={loading}/>
    </>
  )
}

export default MyApp