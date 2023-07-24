import { getDate } from '../../../../commons/libraries/utils'
import * as S from './BoardComment.styles'
import { IBoardCommentPageUIProps } from './BoardComment.types'

export default function BoardCommentPageUI(props: IBoardCommentPageUIProps) {
    return(
        <>
            <S.HeadWrapper>
                <S.HeadPicture src='../../commentImg.png'></S.HeadPicture>
                <S.HeadText>댓글</S.HeadText>
            </S.HeadWrapper>
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
            {props.data?.fetchBoardComments.map((el) => (
                <S.ViewComment key={el._id}>
                    <S.CommentHeap>
                        <S.UserImg src='../../writerImg.png'></S.UserImg>
                        <S.NameContentsWrapper>
                            <S.ContentsHead>
                                <S.NameStarWrapper>
                                    <S.Name>{el._id}</S.Name>
                                    <S.StarWrapper>
                                        <S.Star src='../../commentStarImg.png'></S.Star>
                                        <S.Star src='../../commentStarImg.png'></S.Star>
                                        <S.Star src='../../commentStarImg.png'></S.Star>
                                        <S.Star src='../../commentStarImg.png'></S.Star>
                                        <S.Star src='../../commentStarImg.png'></S.Star>
                                    </S.StarWrapper>
                                </S.NameStarWrapper>
                                <S.UpdateDeleteWrapper>
                                    <S.UpdateImg src='../../UpdateImg.png'></S.UpdateImg>
                                    <S.DeleteImg id={el._id} onClick={props.onClickCommentDelete} src='../../DeleteImg.png'></S.DeleteImg>
                                </S.UpdateDeleteWrapper>
                            </S.ContentsHead>
                            <S.Contents>{el.contents}</S.Contents>
                        </S.NameContentsWrapper>
                    </S.CommentHeap>
                    <S.DateWrapper>
                        <S.DateEmpty></S.DateEmpty>
                        <S.Date>{getDate(el.createdAt)}</S.Date>
                    </S.DateWrapper>
                </S.ViewComment>
            ))}
        </>
    )
}