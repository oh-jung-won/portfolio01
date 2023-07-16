import { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import {CREATE_BOARD, UPDATE_BOARD} from './BoardWrite.queries'
import {FETCH_BOARD} from '../detail/BoardDetail.queries'
import BoardWritePageUI from './BoardWrite.presenter'

export default function BoardWritePageCon(props) {
    
    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const [writerErr, setWriterErr] = useState("")
    const [passwordErr, setPasswordErr] = useState("")
    const [titleErr, setTitleErr] = useState("")
    const [contentsErr, setContentsErr] = useState("")

    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)
    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.id
        }
    })

    function onChangeWriter(event){
        setWriter(event.target.value)
        if(event.target.value !== ""){
            setWriterErr("")
        }
    }

    function onChangePassword(event){
        setPassword(event.target.value)
        if(event.target.value !== ""){
            setPasswordErr("")
        }
    }

    function onChangeTitle(event){
        setTitle(event.target.value)
        if(event.target.value !== ""){
            setTitleErr("")
        }
    }

    function onChangeContents(event){
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
            const GqlCreateBoard = createBoard ({
                variables: {
                    createBoardInput: {
                        writer: writer,
                        password: password,
                        title: title,
                        contents: contents
                    }
                }
            })
            router.push(`/boards/${(await GqlCreateBoard).data.createBoard._id}`)
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
        
        const myVariables = {}
        if (title) myVariables.title = title
        if (contents) myVariables.contents = contents

        const GqlUpdateBoard = updateBoard({
            variables: {updateBoardInput: myVariables,
                        password: password,
                        boardId: router.query.id
            }
        })

        router.push(`/boards/${(await GqlUpdateBoard).data.updateBoard._id}`)
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
            data={data}/>
    )
}
