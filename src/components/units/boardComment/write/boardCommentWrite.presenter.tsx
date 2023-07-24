import * as S from './boardCommentWrite.styles'
import { IBoardCommentWritePageUIProps } from './boardCommentWrite.types'


export default function BoardCommentWritePageUI(props: IBoardCommentWritePageUIProps) {
    return(
        <>
            <S.HeadWrapper>
                <S.HeadPicture src='../../commentImg.png'></S.HeadPicture>
                <S.HeadText>댓글</S.HeadText>
            </S.HeadWrapper>
            <S.WriterPasswordWrapper>
                <S.Writer onChange={props.onChangeWriter} placeholder='작성자' type='text'></S.Writer>
                <S.Password onChange={props.onChangePassword} placeholder='비밀번호' type='password'></S.Password>
            </S.WriterPasswordWrapper>
            <S.StarWrapper>
                <S.Star src='../../commentStarImg.png'></S.Star>
                <S.Star src='../../commentStarImg.png'></S.Star>
                <S.Star src='../../commentStarImg.png'></S.Star>
                <S.Star src='../../commentStarImg.png'></S.Star>
                <S.Star src='../../commentStarImg.png'></S.Star>
            </S.StarWrapper>
            <S.CreateTextWrapper>
                <S.Text value={props.commentDefaultValue} onChange={props.onChangeComment} placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'></S.Text>
                <S.TextFooterWrapper>
                    <S.TextCount>{props.commentLength}/100</S.TextCount>
                    <S.Submit onClick={props.onclickCommentCreate}>등록하기</S.Submit>
                </S.TextFooterWrapper>
            </S.CreateTextWrapper>
        </>
    )
}