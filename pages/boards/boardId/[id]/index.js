// import { useRouter } from 'next/router'
// import {MainWrapper,
//     MainBox,
//     HeadWrapper,
//     WriterImg,
//     WriterWrapper,
//     Writer,
//     WriteDate,
//     ClipImg,
//     LocationImgWrapper,
//     LocationImg,
//     LocationInnerImg,
//     GrayLine,
//     Title,
//     Contents,
//     FooterWrapper,
//     Like,
//     LikeImg,
//     LikeNum,
//     Dislike,
//     DislikeImg,
//     DislikeNum,
//     ButtonWrapper,
//     ButtonStyle
// } from '../../../../styles/boardIdStyled'
// import { gql, useQuery } from '@apollo/client'
// import { useEffect, useState } from 'react'

// const FETCH_BOARD = gql`
// query fetchBoard($boardId: ID!){
//     fetchBoard(
//         boardId: $boardId
//     ){
//         _id
//         writer
//         title
//         contents
//         createdAt
//         likeCount
//         dislikeCount
//         updatedAt
//     }
// }
// `

// export default function boardIdPage(){

//     const router = useRouter()
//     const [displayYear, setDisplayYear] = useState("")
//     const [displayMonth, setDisplayMonth] = useState("")
//     const [displayDay, setDisplayDay] = useState("")
    
//     const {data} = useQuery(FETCH_BOARD, {
//         variables: {
//             boardId: router.query.id
//         }
//     })
    
//     useEffect(() =>{
//         setDisplayYear(data?.fetchBoard?.updatedAt.substr(5, 2))
//         console.log(displayYear)
//     }, [])

//     return(
//         <MainWrapper>
//             <MainBox>
//                 <HeadWrapper>
//                     <WriterImg src='../../wirterImg.png'></WriterImg>
//                     <WriterWrapper>
//                         <Writer>{data?.fetchBoard?.writer}</Writer>
//                         <WriteDate>{`Date : ${data?.fetchBoard?.updatedAt.substr(0, 4)}.${data?.fetchBoard?.updatedAt.substr(5, 2)}.${data?.fetchBoard?.updatedAt.substr(8, 2)}`}</WriteDate>
//                     </WriterWrapper>
//                     <ClipImg src= '../../clipImg.png'></ClipImg>
//                     <LocationImgWrapper>
//                         <LocationImg src='../../locationImg.png'></LocationImg>
//                         <LocationInnerImg src= '../../locationInnerImg.png'></LocationInnerImg>
//                     </LocationImgWrapper>
//                 </HeadWrapper>
//                 <GrayLine></GrayLine>
//                 <Title>{data?.fetchBoard?.title}</Title>
//                 <Contents>{data?.fetchBoard?.contents}</Contents>
//                 <FooterWrapper>
//                     <Like>
//                         <LikeImg src= '../../likeImg.png'></LikeImg>
//                         <LikeNum>{data?.fetchBoard?.likeCount}</LikeNum>
//                     </Like>
//                     <Dislike>
//                         <DislikeImg src= '../../dislikeImg.png'></DislikeImg>
//                         <DislikeNum>{data?.fetchBoard?.dislikeCount}</DislikeNum>
//                     </Dislike>
//                 </FooterWrapper>
//             </MainBox>
//             <ButtonWrapper>
//                 <ButtonStyle>목록으로</ButtonStyle>
//                 <ButtonStyle>수정하기</ButtonStyle>
//                 <ButtonStyle>삭제하기</ButtonStyle>
//             </ButtonWrapper>
//             <GrayLine></GrayLine>
//         </MainWrapper>
//     )

// }

import BoardDetailPageCon from "../../../../src/components/units/board/detail/BoardDetail.container";

export default function BoardDetailPage(){

    return (
        <BoardDetailPageCon />
    )
}