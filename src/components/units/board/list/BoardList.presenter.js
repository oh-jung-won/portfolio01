import { Fragment } from 'react'
import * as S from './BoardList.styles'
import { getDate } from '../../../../commons/libraries/utils'

export default function BoardListUI(props){
    return (
        <S.MainWrapper>
            <S.TableWrapper>
                <S.TableHead>ID</S.TableHead>
                <S.TableHead>제목</S.TableHead>
                <S.TableHead>작성자</S.TableHead>
                <S.TableHead>날짜</S.TableHead>
                    {props.data?.fetchBoards.map((el) => (
                        <Fragment key={el.number}>
                            <S.TableRow>
                                <S.TableData id={el._id} onClick={props.onClickMoveToBoardDetail}>{`${el._id.substr(-4)}`}</S.TableData>
                                <S.TableData id={el._id} onClick={props.onClickMoveToBoardDetail}>{el.title}</S.TableData>
                                <S.TableData id={el._id} onClick={props.onClickMoveToBoardDetail}>{el.writer}</S.TableData>
                                <S.TableData id={el._id} onClick={props.onClickMoveToBoardDetail}>{getDate(el.createdAt)}</S.TableData>    
                            </S.TableRow>
                        </Fragment>
                    ))}
            </S.TableWrapper>
            <S.Footer>
                <S.CreateButtonWrapper>
                    <S.CreateButtonImg src='../../createButtonImg.png'></S.CreateButtonImg>
                    <S.CreateButtonText>게시물 등록하기</S.CreateButtonText>
                </S.CreateButtonWrapper>
            </S.Footer>
        </S.MainWrapper>
    )
}