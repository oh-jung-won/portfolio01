import { IQuery } from '../../../../commons/types/generated/types'
import { MouseEvent } from 'react'

export interface IBoardListUIProps {
    onClickMoveToBoardDetail: (event: MouseEvent<HTMLTableCellElement>) => void
    onClickMoveToBoardNew: () => void
    data?: Pick<IQuery, "fetchBoards">
}