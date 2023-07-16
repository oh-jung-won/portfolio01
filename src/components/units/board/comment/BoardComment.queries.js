import { gql } from "@apollo/client";

export const CREATE_BOARD_COMMENT = gql`
    mutation createBoardComment(
        $createBoardCommentInput: CreateBoardCommentInput!, 
        $boardId: ID!) {
            createBoardComment(
                createBoardCommentInput: $createBoardCommentInput
                boardId: $boardId

        ){
            _id
        }
    }
`

export const FETCH_BOARD_COMMENTS = gql`
    query fetchBoardComments($boardId: ID!) {
        fetchBoardComments(
            boardId: $boardId
        ){
            _id
            contents
            createdAt
        }
    }
`

export const DELETE_BOARD_COMMENT = gql`
    mutation deleteBoardComment($boardCommentId: ID!) {
        deleteBoardComment(
            boardCommentId: $boardCommentId
        )
    }
`