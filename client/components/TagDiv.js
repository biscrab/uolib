import Link from "next/link"

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