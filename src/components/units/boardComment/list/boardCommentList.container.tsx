import { useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { IMutation, IMutationDeleteBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types"
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./boardCommentList.queries"
import { MouseEvent } from 'react'
import BoardCommentListPageUI from "./boardCommentList.presenter"

export default function BoardCommentListPageCon() {
    const [deleteBoardComment] = useMutation<Pick<IMutation, 'deleteBoardComment'>, IMutationDeleteBoardCommentArgs>(DELETE_BOARD_COMMENT)
    
    const router = useRouter()

    // let boardId: string

    // if(router && typeof router.query.id === 'string') {
    //     boardId=router.query.id
    // }
    const { data } = useQuery<Pick<IQuery, 'fetchBoardComments'>, IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
        variables: {
            boardId: typeof router.query.id === 'string' ? router.query.id : ""
        }})
    
    const onClickCommentDelete = (event: MouseEvent<HTMLImageElement>) => {
        const password = prompt('비밀번호를 입력하세요')
        try {
            if(!(event.target instanceof HTMLImageElement)) return
            deleteBoardComment({
                variables: {
                    password: password,
                    boardCommentId: event.target.id
                },
                refetchQueries: [{query: FETCH_BOARD_COMMENTS, variables: {
                    boardId: router.query.id
                }}]
            })
        } catch (error) {
            if(error instanceof Error) alert(error.message)
        }
    }    
    return (
        <BoardCommentListPageUI 
        onClickCommentDelete={onClickCommentDelete}
        data={data}
        />
    )
}