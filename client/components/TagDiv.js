import Link from "next/link"
import * as S from '../styled/TagDiv'

const TagDiv = (tag) => {
    return(
        <S.TagDiv>
        {tag ? 
        <>
            {tag.map(
                (t, index) => {
                    return(
                        <Link href={`/search/tag/date/1/${t}`} key={index}>
                            <span>#{t}</span>
                        </Link>
                    )
                }
            )}
        </>
        :
        <></>
        }
        </S.TagDiv>
    )
}

export default TagDiv