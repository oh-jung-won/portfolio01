import { ChangeEvent } from 'react'
import { IQuery } from '../../../../commons/types/generated/types'

export interface IBoardWritePageConProps {
    isEdit: boolean
    data?: Pick<IQuery, 'fetchBoard'>
}

export interface IMyVariables {
    title? : string
    contents? : string
}

export interface IBoardWritePageUIProps {
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void
    onClickSubmit: () => void
    onClickUpdate: () => void
    writerErr: string
    passwordErr: string
    titleErr: string
    contentsErr: string
    isEdit: boolean
    data?: Pick<IQuery, "fetchBoard">
}