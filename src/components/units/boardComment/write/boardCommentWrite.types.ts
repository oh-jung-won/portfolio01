import { MouseEvent, ChangeEvent } from 'react'

export interface IBoardCommentWritePageUIProps {
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeComment: (event: ChangeEvent<HTMLTextAreaElement>) => void
    onclickCommentCreate: (event: MouseEvent<HTMLDivElement>) => void
    commentDefaultValue: string
    commentLength: string
}