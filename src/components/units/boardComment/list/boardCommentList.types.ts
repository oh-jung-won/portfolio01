import { IQuery } from "../../../../commons/types/generated/types"
import { MouseEvent } from 'react'

export interface IBoardCommentListPageUIProps {
    onClickCommentDelete: (event: MouseEvent<HTMLImageElement>) => void
    data?: Pick<IQuery, 'fetchBoardComments'>
}