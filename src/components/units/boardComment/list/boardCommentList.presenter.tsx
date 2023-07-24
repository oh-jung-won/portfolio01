import { getDate } from '../../../../commons/libraries/utils'
import * as S from './boardCommentList.styles'
import * as WriteStyle from '../write/boardCommentWrite.styles'
import { IBoardCommentListPageUIProps } from './boardCommentList.types'

export default function BoardCommentListPageUI(props: IBoardCommentListPageUIProps) {
    return(
        <>
            {props.data?.fetchBoardComments.map((el) => (
                <S.ViewComment key={el._id}>
                    <S.CommentHeap>
                        <S.UserImg src='../../writerImg.png'></S.UserImg>
                        <S.NameContentsWrapper>
                            <S.ContentsHead>
                                <S.NameStarWrapper>
                                    <S.Name>{el.writer}</S.Name>
                                    <WriteStyle.StarWrapper>
                                        <WriteStyle.Star src='../../commentStarImg.png'></WriteStyle.Star>
                                        <WriteStyle.Star src='../../commentStarImg.png'></WriteStyle.Star>
                                        <WriteStyle.Star src='../../commentStarImg.png'></WriteStyle.Star>
                                        <WriteStyle.Star src='../../commentStarImg.png'></WriteStyle.Star>
                                        <WriteStyle.Star src='../../commentStarImg.png'></WriteStyle.Star>
                                    </WriteStyle.StarWrapper>
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