import { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router'
import Link from 'next/link';
import * as S from '../../styled/Search'
/*
type tagType = {
    title: string,
    list: string[];
}*/S

const Search/*: NextPage<{}>*/ = () => {

    const router = useRouter();

    const [word, setWord] = useState("");

    const tag/* : tagType[]*/ = [
                {title: "인기", list:["드라마", "라이트노벨", "로맨스", "무협", "스포츠", "일상", "전생", "중세", "판타지", "하렘", "현대", "SF", "게임", "남성향", "먼치킨", "빙의", "성장", "순애", "아카데미", "얀데레", "이세계", "집착", "착각", "패러디", "헌터", "회귀", "TS"]},
                {title: "장르", list:["가상현실", "게임", "게임시스템", "게임판타지", "공포", "기갑", "님성향:", "노맨스", "느와르", "다크판타지", "단편", "디스토피아", " 러브코미디", "메카", "메카닉", "미스터리", "밀리터리", "백합", "복수", "복수물", "사이버펑크", "성장", "수필", "순애", "순한맛", "스릴러", "시리어스", "아카데미", "아포칼립스", "액션", "어반", "연애", "오컬트", "옴니버스", "육성", "이세계", "정통판타지", "좀비", "주술회전", "청춘", "추리", "패러디", "포스트아포칼립스", "퓨전", "퓨전판타지", "하드", "현대물", "현대판타지", "호러", "환생", "힐링", "BDSM", "BL", "GL", "RPG", "SM", "TS"]},
                {title: "인물", list:["고인물", "기사", "남매", "네크로맨서", "누나", "능력", "능력자", "능력자배틀", "드래곤", "마녀", "마법", "미법사", "마법소녀", "마왕", "마피아", "매니저", "먼치킨", "메이드", "몬무스", "문제아", "미소녀", "배우", "병약", "빌런", "상태창", "서큐버스", "성장형", "성죄", "소꿉친구", "소환", "수인", "스트리머", "시한부", "아이돌", "악당", "악마", "악역", "악역영애", "얀데레", "엘프", "여동생", "여주", "용병", "용사", "유부녀", "이능"]},
                {title: "소재", list:["1"]},
                {title: "패러디", list:["1"]},
                {title: "기타", list:["1"]}
            ]

    const Tag = ({tag}/*: tagType*/) => {
        return(
            <S.TagList>
                <b># {tag.title} 해시태그</b>
                <ul>
                {tag.list ?
                <>
                {tag.list.map((i/*: string*/, index/*: number*/) => {
                    return(
                        <Link href={'/'} key={index}>
                            <S.Tag>#{i}</S.Tag>
                        </Link>
                    )
                })}
                </>
                :
                <></>
                }
                </ul>
            </S.TagList>
        )
    }

    return(
        <S.Body>
            <S.Search placeholder="소설제목, 태그, 검색어, 작가를 입력해주세요." onChange={(e)=>setWord(e.target.value)} value={word} onKeyPress={(e)=>{
                if(e.key === "Enter" && word){
                    router.push(`/search/keword/date/1/${word}`)
                }
            }}/>
            <S.TagListDiv>
                <Tag tag={tag[0]}/>
                <Tag tag={tag[1]}/>
                <Tag tag={tag[2]}/>
                <Tag tag={tag[3]}/>
                <Tag tag={tag[4]}/>
                <Tag tag={tag[5]}/>
            </S.TagListDiv>
        </S.Body>
    )
}

export default Search