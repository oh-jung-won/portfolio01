import { useState } from "react";
import BoardCommentPageUI from "./BoardComment.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_BOARD_COMMENT, DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./BoardComment.queries";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent } from 'react'
import { IMutation, IMutationCreateBoardCommentArgs, IMutationDeleteBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types";

export default function BoardCommentPageCon() {
    const router = useRouter()
    if(typeof router.query.id !== 'string') return <></>
    const { data } = useQuery<Pick<IQuery, 'fetchBoardComments'>, IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
        variables: {
            boardId: router.query.id
        }})
    
    const [comment, setComment] = useState("")
    const [commentDefaultValue, setCommentDefaultValue] = useState("")
    const [commentLength, setCommentLength] = useState("0")

    const [createBoardComment] = useMutation<Pick<IMutation, 'createBoardComment'>, IMutationCreateBoardCommentArgs>(CREATE_BOARD_COMMENT)
    const [deleteBoardComment] = useMutation<Pick<IMutation, 'deleteBoardComment'>, IMutationDeleteBoardCommentArgs>(DELETE_BOARD_COMMENT)

    const onChangeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value)
        setCommentDefaultValue(event.target.value)
        setCommentLength(String(String(event.target.value).length))
    } 

    const onclickCommentCreate = () => {
        try {
            if(typeof router.query.id !== 'string') return
            createBoardComment({     
                variables: {
                    createBoardCommentInput: {
                        contents: comment,
                        rating: 5
                    },
                    boardId: router.query.id
                },
                refetchQueries: [{query: FETCH_BOARD_COMMENTS, variables: {
                    boardId: router.query.id
                }}]
            })
            setCommentDefaultValue("")
            setCommentLength("0")
        } catch (error) {
            if(error instanceof Error) alert(error.message)
        }

    }

    const onClickCommentDelete = (event: MouseEvent<HTMLImageElement>) => {
        try {
            if(!(event.target instanceof HTMLImageElement)) return
            deleteBoardComment({
                variables: {
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

    return(
        <BoardCommentPageUI 
        onChangeComment={onChangeComment}
        onclickCommentCreate={onclickCommentCreate}
        onClickCommentDelete={onClickCommentDelete}
        commentDefaultValue={commentDefaultValue}
        commentLength={commentLength}
        data={data}/>
    )
}