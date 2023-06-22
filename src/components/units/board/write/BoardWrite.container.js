import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import {CREATE_BOARD} from './BoardWrite.queries'
import BoardWritePageUI from './BoardWrite.presenter'

export default function BoardWritePageCon() {
    
    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const [writerErr, setWriterErr] = useState("")
    const [passwordErr, setPasswordErr] = useState("")
    const [titleErr, setTitleErr] = useState("")
    const [contentsErr, setContentsErr] = useState("")

    const [createBoard] = useMutation(CREATE_BOARD)
    const router = useRouter()

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
        console.log(contents)
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
            router.push(`/boards/boardId/${(await GqlCreateBoard).data.createBoard._id}`)
        }

    }

    return (
       <BoardWritePageUI 
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onClickSubmit={onClickSubmit}
            writerErr={writerErr}
            passwordErr={passwordErr}
            titleErr={titleErr}
            contentsErr={contentsErr} />
    )
}
