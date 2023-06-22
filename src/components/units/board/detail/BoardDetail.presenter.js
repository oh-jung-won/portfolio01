import * as S from './BoardDetail.styles'

export default function BoardDetailPageUI(props){

    return(
        <S.MainWrapper>
            <S.MainBox>
                <S.HeadWrapper>
                    <S.WriterImg src='../../writerImg.png'></S.WriterImg>
                    <S.WriterWrapper>
                        <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
                        <S.WriteDate>{`Date : ${props.data?.fetchBoard?.updatedAt.substr(0, 4)}.${props.data?.fetchBoard?.updatedAt.substr(5, 2)}.${props.data?.fetchBoard?.updatedAt.substr(8, 2)}`}</S.WriteDate>
                    </S.WriterWrapper>
                    <S.ClipImg src= '../../clipImg.png'></S.ClipImg>
                    <S.LocationImgWrapper>
                        <S.LocationImg src='../../locationImg.png'></S.LocationImg>
                        <S.LocationInnerImg src= '../../locationInnerImg.png'></S.LocationInnerImg>
                    </S.LocationImgWrapper>
                </S.HeadWrapper>
                <S.GrayLine></S.GrayLine>
                <S.Title>{props.data?.fetchBoard?.title}</S.Title>
                <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
                <S.FooterWrapper>
                    <S.Like>
                        <S.LikeImg src= '../../likeImg.png'></S.LikeImg>
                        <S.LikeNum>{props.data?.fetchBoard?.likeCount}</S.LikeNum>
                    </S.Like>
                    <S.Dislike>
                        <S.DislikeImg src= '../../dislikeImg.png'></S.DislikeImg>
                        <S.DislikeNum>{props.data?.fetchBoard?.dislikeCount}</S.DislikeNum>
                    </S.Dislike>
                </S.FooterWrapper>
            </S.MainBox>
            <S.ButtonWrapper>
                <S.ButtonStyle>목록으로</S.ButtonStyle>
                <S.ButtonStyle>수정하기</S.ButtonStyle>
                <S.ButtonStyle>삭제하기</S.ButtonStyle>
            </S.ButtonWrapper>
            <S.GrayLine></S.GrayLine>
        </S.MainWrapper>
    )

}