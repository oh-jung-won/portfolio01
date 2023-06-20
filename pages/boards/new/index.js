import { useState } from 'react'
import {MainBox, 
    MainName, 
    TextBox, 
    TextName, 
    TextWrapper, 
    TextWrapperIn, 
    TitleWrapper, 
    TitleBox, 
    ContextWrapper, 
    ContentBox, 
    AddressWrapper, 
    AddressWrapperIn, 
    AddressDisplay, 
    AddressButton, 
    Address1, 
    Address2, 
    YoutubeWrapper, 
    YoutubeBox, 
    PictureWrapper, 
    PictureWrapperIn, 
    PictureWrapperBox, 
    PictureWrapperBoxPlus, 
    PictureWrapperBoxText, 
    MainSettingWrapper, 
    MainSettingWrapperIn, 
    MainSettingWrapperInIn, 
    MainSettingRadio, 
    MainSettingRadioText, 
    RegButtonWrapper, 
    RegButton, 
    Error} from '../../../styles/boardnewStyled'
import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'

const CREATE_BOARD = gql`
mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(
        createBoardInput: $createBoardInput
    ){
        _id
        writer
        title
        contents
    }
}
`

export default function BoardPage() {
    
    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const [writerErr, setWriterErr] = useState("")
    const [passwordErr, setPasswordErr] = useState("")
    const [titleErr, setTitleErr] = useState("")
    const [contentErr, setContentErr] = useState("")

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

    function onChangeContent(event){
        setContent(event.target.value)
        if(event.target.value !== ""){
            setContentErr("")
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
        if(!content){
            setContentErr("내용을 입력해주세요")
        }
        if (writer && password && title && content) {
            const GqlCreateBoard = createBoard ({
                variables: {
                    createBoardInput: {
                        writer: writer,
                        password: password,
                        title: title,
                        contents: content
                    }
                }
            })
            // alert("게시글이 등록되었습니다.");
            router.push(`/boards/boardId/${(await GqlCreateBoard).data.createBoard._id}`)
        }

    }

    return (
        <MainBox>
            <MainName>게시물 등록</MainName>
            <TextWrapper>
                <TextWrapperIn>
                    <TextName>작성자</TextName>
                    <TextBox placeholder='이름을 입력해주세요.' onChange={onChangeWriter}></TextBox>
                    <Error>{writerErr}</Error>
                </TextWrapperIn>
                <TextWrapperIn>
                    <TextName>비밀번호</TextName>
                    <TextBox type='password' placeholder='비밀번호를 입력해주세요.' onChange={onChangePassword}></TextBox>
                    <Error>{passwordErr}</Error>
                </TextWrapperIn>
            </TextWrapper>
            <TitleWrapper>
                <TextName>제목</TextName>
                <TitleBox placeholder='제목을 입력해주세요.' onChange={onChangeTitle}></TitleBox>
                <Error>{titleErr}</Error>
            </TitleWrapper>
            <ContextWrapper>
                <TextName>내용</TextName>
                <ContentBox placeholder='내용을 입력해주세요' onChange={onChangeContent}></ContentBox>
                <Error>{contentErr}</Error>
            </ContextWrapper>
            <AddressWrapper>
                <TextName>주소</TextName>
                <AddressWrapperIn>
                    <AddressDisplay placeholder='07250'></AddressDisplay>
                    <AddressButton>우편번호 검색</AddressButton>
                </AddressWrapperIn>
                <Address1></Address1>
                <Address2></Address2>
            </AddressWrapper>
            <YoutubeWrapper>
                <TextName>유튜브</TextName>
                <YoutubeBox placeholder='링크를 복사해주세요'></YoutubeBox>
            </YoutubeWrapper>
            <PictureWrapper>
                <TextName>사진 첨부</TextName>
                <PictureWrapperIn>
                    <PictureWrapperBox>
                        <PictureWrapperBoxPlus src='../Vector.png'></PictureWrapperBoxPlus>
                        <PictureWrapperBoxText>Upload</PictureWrapperBoxText>
                    </PictureWrapperBox>
                    <PictureWrapperBox>
                        <PictureWrapperBoxPlus src='../Vector.png'></PictureWrapperBoxPlus>
                        <PictureWrapperBoxText>Upload</PictureWrapperBoxText>
                    </PictureWrapperBox>
                    <PictureWrapperBox>
                        <PictureWrapperBoxPlus src='../Vector.png'></PictureWrapperBoxPlus>
                        <PictureWrapperBoxText>Upload</PictureWrapperBoxText>
                    </PictureWrapperBox>
                </PictureWrapperIn>
            </PictureWrapper>
            <MainSettingWrapper>
                <TextName>메인 설정</TextName>
                <MainSettingWrapperIn>
                    <MainSettingWrapperInIn>
                        <MainSettingRadio type='radio' name='MainSetting'></MainSettingRadio>
                        <MainSettingRadioText>유튜브</MainSettingRadioText>
                    </MainSettingWrapperInIn>
                    <MainSettingWrapperInIn>
                        <MainSettingRadio type='radio' name='MainSetting'></MainSettingRadio>
                        <MainSettingRadioText>사진</MainSettingRadioText>
                    </MainSettingWrapperInIn>
                </MainSettingWrapperIn>
            </MainSettingWrapper>
            <RegButtonWrapper>
                <RegButton onClick={onClickSubmit}>등록하기</RegButton>
            </RegButtonWrapper>
        </MainBox>        
    )
}
