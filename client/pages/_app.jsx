import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
//import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import '../styles/index.css'
import '../styles/App.css'
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

  axios.defaults.baseURL = "https://uolib.herokuapp.com";
  axios.defaults.withCredentials = true;

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
      <link href="https://cdn-icons.flaticon.com/png/512/1722/premium/1722398.png?token=exp=1647265594~hmac=9839c5fb0b6489cb5c39fa0170d6011d" rel="shortcut icon" type="image/x-icon"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet"></link>
      <script src="https://kit.fontawesome.com/ed23fb601b.js" crossOrigin="anonymous"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.2.0/css/all.min.css" integrity="sha512-6c4nX2tn5KbzeBJo9Ywpa0Gkt+mzCzJBrE1RB6fmpcsoN+b/w/euwIMuQKNyUoU/nToKN3a8SgNOtPrbW12fug==" crossOrigin="anonymous" />
      <link rel="manifest" href="../public/manifest.json" />
      {!pathname.includes("viewer") ?
      <Header />
      :
      <></>
      }
      <Component {...pageProps} />
      <Footer />
      <Loading loading={loading}/>
    </>
  )
}

export default MyApp