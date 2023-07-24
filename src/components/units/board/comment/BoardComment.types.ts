import { IQuery } from "../../../../commons/types/generated/types"
import { MouseEvent, ChangeEvent } from 'react'

export interface IBoardCommentPageUIProps {
    onChangeComment: (event: ChangeEvent<HTMLTextAreaElement>) => void
    onclickCommentCreate: (event: MouseEvent<HTMLDivElement>) => void 
    onClickCommentDelete: (event: MouseEvent<HTMLImageElement>) => void
    commentDefaultValue: string
    commentLength: string
    data?: Pick<IQuery, 'fetchBoardComments'>
}