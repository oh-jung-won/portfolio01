import { MouseEvent } from 'react'
import { IQuery } from '../../../../commons/types/generated/types'

export interface IBoardDetailPageUIProps {
    data?: Pick<IQuery, 'fetchBoard'>
    onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void
    onClickEdit: () => void
    onClickList: () => void
}