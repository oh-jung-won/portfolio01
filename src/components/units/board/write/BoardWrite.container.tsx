import { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import {CREATE_BOARD, UPDATE_BOARD} from './BoardWrite.queries'
// import {FETCH_BOARD} from '../detail/BoardDetail.queries'
import BoardWritePageUI from './BoardWrite.presenter'
import { IBoardWritePageConProps, IMyVariables } from './BoardWrite.types'
import { ChangeEvent } from 'react'
import { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs, IQuery, IQueryFetchBoardArgs } from '../../../../commons/types/generated/types'


export default function BoardWritePageCon(props: IBoardWritePageConProps) {
    
    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const [writerErr, setWriterErr] = useState("")
    const [passwordErr, setPasswordErr] = useState("")
    const [titleErr, setTitleErr] = useState("")
    const [contentsErr, setContentsErr] = useState("")

    const [createBoard] = useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(CREATE_BOARD)
    const [updateBoard] = useMutation<Pick<IMutation, 'updateBoard'>, IMutationUpdateBoardArgs>(UPDATE_BOARD)
    const router = useRouter()

    // const {data} = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, {
    //     variables: {
    //         boardId: router.query.id 
    //     }
    // })

    function onChangeWriter(event: ChangeEvent<HTMLInputElement>){
        setWriter(event.target.value)
        if(event.target.value !== ""){
            setWriterErr("")
        }
    }

    function onChangePassword(event: ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
        if(event.target.value !== ""){
            setPasswordErr("")
        }
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>){
        setTitle(event.target.value)
        if(event.target.value !== ""){
            setTitleErr("")
        }
    }

    function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>){
        setContents(event.target.value)
        if(event.target.value !== ""){
            setContentsErr("")
        }
    }

    const onClickSubmit = async () => {

        if(!writer){
            setWriterErr("이름을 입력해주세요")
        }
        if(!password){
            setPasswordErr("비밀번호를 입력해주세요")
        }
        if(!title){
            setTitleErr("제목을 입력해주세요")
        }
        if(!contents){
            setContentsErr("내용을 입력해주세요")
        }
        if (writer && password && title && contents) {
            try {
                const result = await createBoard ({
                    variables: {
                        createBoardInput: {
                            writer: writer,
                            password: password,
                            title: title,
                            contents: contents
                        }
                    }
                })
                router.push(`/boards/${result.data?.createBoard._id}`) 
            } catch (error) {
                if(error instanceof Error) alert(error.message)
            }
        }

    }

    const onClickUpdate = async () => {
        if(!password){
            setPasswordErr("비밀번호를 입력해주세요")
        }
        if(!title){
            setTitleErr("제목을 입력해주세요")
        }
        if(!contents){
            setContentsErr("내용을 입력해주세요")
        }

        if(!password||!title||!contents) return
        
        const myVariables: IMyVariables = {}
        if (title) myVariables.title = title
        if (contents) myVariables.contents = contents

        try {
            if(typeof router.query.id !== "string"){
                alert("시스템에 문제가 있습니다")
                return
            }
            const result = await updateBoard({
                variables: {updateBoardInput: myVariables,
                            password: password,
                            boardId: router.query.id
                }
            })
            router.push(`/boards/${result.data?.updateBoard._id}`)
            
        } catch (error) {
            if(error instanceof Error) alert(error.message)
        }

    }

    return (
       <BoardWritePageUI 
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onClickSubmit={onClickSubmit}
            onClickUpdate={onClickUpdate}
            writerErr={writerErr}
            passwordErr={passwordErr}
            titleErr={titleErr}
            contentsErr={contentsErr}
            isEdit={props.isEdit} 
            data={props.data}/>
    )
}
