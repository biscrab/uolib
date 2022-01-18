import { useEffect } from 'react';
import Link from 'next/link';
import * as S from '../styled/Main'
import { NextPage } from 'next';
/*
type BookType = {
    id: number,
    title: string,
    author: string,
    tag: string[],
}

type BannerType = {
    image: string,
    color: string
}*/

const List = ({lists}) => {
  const list =  lists.map(
    (i, index) => {
      return(
          <S.Book key={index}>
            <Link href={`/novel/${i.id}`}>
                <S.BookCover src={"//image.novelpia.com/imagebox/cover/148f406a052dae41bfd628929b897e56_453275_ori.thumb"}/>
            </Link>
            <S.BookInfo>
                <S.BookInfoDiv>
                    <Link href={`/novel/${i.id}`}>
                        <S.BookTittle>{i.title}</S.BookTittle>
                    </Link>
                    <S.BookAuthor>{i.author}</S.BookAuthor>
                </S.BookInfoDiv>
                <S.BookTagDiv> 
                </S.BookTagDiv>
            </S.BookInfo>
          </S.Book>
      )
  })

  return list
}

const Book = (i) => {
    return(
        <S.Book>
            <Link href={`/novel/${i.id}`}>
                <S.BookCover src={"//image.novelpia.com/imagebox/cover/148f406a052dae41bfd628929b897e56_453275_ori.thumb"}/>
            </Link>
            <S.BookInfo>
                <S.BookInfoDiv>
                    <Link href={`/novel/${i.id}`}>
                        <S.BookTittle>{i.title}</S.BookTittle>
                    </Link>
                    <S.BookAuthor>{i.author}</S.BookAuthor>
                </S.BookInfoDiv>
                <S.BookTagDiv> 
                </S.BookTagDiv>
            </S.BookInfo>
        </S.Book>
        /*                    {i.tag.map(
                        (item: string) => {
                            return(
                                <div key={item}>
                                    <S.Tag>#{item}</S.Tag>
                                </div>

                            )
                        }
                    )}    */
)

}

const MainPage = () => {

    const contestList = [
                        {id: 1, title: "모르는 만화에 빙의했다", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "모르는 만화에 빙의했다", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "모르는 만화에 빙의했다", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "모르는 만화에 빙의했다", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "모르는 만화에 빙의했다", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "모르는 만화에 빙의했다", author: "이상운", tag: ["1", "2"]},];

    const bestList = [
                        {id: 1, title: "모르는 만화에 빙의했다", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "모르는 만화에 빙의했다", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "모르는 만화에 빙의했다", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "모르는 만화에 빙의했다", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "모르는 만화에 빙의했다", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "모르는 만화에 빙의했다", author: "이상운", tag: ["1", "2"]},];

    const BannerList = [
        {image: "https://novelpia.com/img/new/banner/main_banner_pc_20220104.jpg", color: "#1c0426"},
    ]

    const PrevBanner = () => {

    }

    const NextBanner = () => {

    }

    useEffect(()=>{

    },[])
//#1c0426
//https://novelpia.com/img/new/banner/main_banner_pc_20220104.jpg
    return(
        <>
        <S.BannerDiv>
            <S.NavWrap>
                <div onClick={()=>PrevBanner()}><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/></svg></div>
                <div onClick={()=>NextBanner()}><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="30px" viewBox="0 0 24 24" width="30px" fill="#000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg></div>
            </S.NavWrap>
            {BannerList.map(
                (i, index) => {
                    return(
                        <S.Banner color={"#1c0426"} key={index}>
                            <img src={"https://novelpia.com/img/new/banner/main_banner_pc_20220104.jpg"}/>
                        </S.Banner> 
                    )
                }
            )}
        </S.BannerDiv>
        <S.Body>
            <S.Title>플러스 Best</S.Title>
            <S.Border>
                <List lists={contestList}/>
            </S.Border>
            <S.Title>자유연재 Best</S.Title>
            <S.Border>
                <List lists={bestList}/>
            </S.Border>
        </S.Body>
        </>
    )
}

export default MainPage

/*import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home*/
