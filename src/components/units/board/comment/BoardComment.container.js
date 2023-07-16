import { useState } from "react";
import BoardCommentPageUI from "./BoardComment.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_BOARD_COMMENT, DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./BoardComment.queries";
import { useRouter } from "next/router";

export default function BoardCommentPageCon() {
    const router = useRouter()
    const { data } = useQuery(FETCH_BOARD_COMMENTS, {
        variables: {
            boardId: router.query.id
        }})
    
    const [comment, setComment] = useState("")
    const [commentDefaultValue, setCommentDefaultValue] = useState("")
    const [commentLength, setCommentLength] = useState("")
    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)
    const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT)

    const onChangeComment = (event) => {
        setComment(event.target.value)
        setCommentDefaultValue(event.target.value)
        setCommentLength(String(event.target.value).length)
    } 

    const onclickCommentCreate = () => {
        const gqlCreateBoardComment = createBoardComment({
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
    }

    const onClickCommentDelete = (event) => {
        deleteBoardComment({
            variables: {
                boardCommentId: event.target.id
            },
            refetchQueries: [{query: FETCH_BOARD_COMMENTS, variables: {
                boardId: router.query.id
            }}]
        })
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