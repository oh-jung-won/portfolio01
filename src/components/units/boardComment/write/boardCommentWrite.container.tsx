import { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { IMutation, IMutationCreateBoardCommentArgs } from "../../../../commons/types/generated/types";
import { CREATE_BOARD_COMMENT } from "./boardCommentWrite.queries";
import { useRouter } from "next/router";
import { FETCH_BOARD_COMMENTS } from "../list/boardCommentList.queries";
import BoardCommentWritePageUI from "./boardCommentWrite.presenter";

export default function BoardCommentWritePageCon() {
    const router = useRouter()
    
    const [comment, setComment] = useState("")
    const [commentDefaultValue, setCommentDefaultValue] = useState("")
    const [commentLength, setCommentLength] = useState("0")
    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")

    const [createBoardComment] = useMutation<Pick<IMutation, 'createBoardComment'>, IMutationCreateBoardCommentArgs>(CREATE_BOARD_COMMENT)

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value)
    }
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

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
                        writer: writer,
                        password: password,
                        contents: comment,
                        rating: 0
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
    return (
        <BoardCommentWritePageUI
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeComment={onChangeComment}
        onclickCommentCreate={onclickCommentCreate}
        commentDefaultValue={commentDefaultValue}
        commentLength={commentLength}/>
    )
}