import * as S from "./BoardWrite.styles"

export default function BoardWritePageUI(props) {

    return (
        <S.MainBox>
            <S.MainName>게시물 등록</S.MainName>
            <S.TextWrapper>
                <S.TextWrapperIn>
                    <S.TextName>작성자</S.TextName>
                    <S.TextBox placeholder='이름을 입력해주세요.' onChange={props.onChangeWriter}></S.TextBox>
                    <S.Error>{props.writerErr}</S.Error>
                </S.TextWrapperIn>
                <S.TextWrapperIn>
                    <S.TextName>비밀번호</S.TextName>
                    <S.TextBox type='password' placeholder='비밀번호를 입력해주세요.' onChange={props.onChangePassword}></S.TextBox>
                    <S.Error>{props.passwordErr}</S.Error>
                </S.TextWrapperIn>
            </S.TextWrapper>
            <S.TitleWrapper>
                <S.TextName>제목</S.TextName>
                <S.TitleBox placeholder='제목을 입력해주세요.' onChange={props.onChangeTitle}></S.TitleBox>
              <S.Error>{props.titleErr}</S.Error>
            </S.TitleWrapper>
            <S.ContextWrapper>
                <S.TextName>내용</S.TextName>
                <S.ContentBox placeholder='내용을 입력해주세요' onChange={props.onChangeContents}></S.ContentBox>
                <S.Error>{props.contentsErr}</S.Error>
            </S.ContextWrapper>
            <S.AddressWrapper>
                <S.TextName>주소</S.TextName>
                <S.AddressWrapperIn>
                    <S.AddressDisplay placeholder='07250'></S.AddressDisplay>
                    <S.AddressButton>우편번호 검색</S.AddressButton>
                </S.AddressWrapperIn>
                <S.Address1></S.Address1>
                <S.Address2></S.Address2>
            </S.AddressWrapper>
            <S.YoutubeWrapper>
                <S.TextName>유튜브</S.TextName>
                <S.YoutubeBox placeholder='링크를 복사해주세요'></S.YoutubeBox>
            </S.YoutubeWrapper>
            <S.PictureWrapper>
                <S.TextName>사진 첨부</S.TextName>
                <S.PictureWrapperIn>
                    <S.PictureWrapperBox>
                        <S.PictureWrapperBoxPlus src='../Vector.png'></S.PictureWrapperBoxPlus>
                        <S.PictureWrapperBoxText>Upload</S.PictureWrapperBoxText>
                    </S.PictureWrapperBox>
                    <S.PictureWrapperBox>
                        <S.PictureWrapperBoxPlus src='../Vector.png'></S.PictureWrapperBoxPlus>
                        <S.PictureWrapperBoxText>Upload</S.PictureWrapperBoxText>
                    </S.PictureWrapperBox>
                    <S.PictureWrapperBox>
                        <S.PictureWrapperBoxPlus src='../Vector.png'></S.PictureWrapperBoxPlus>
                        <S.PictureWrapperBoxText>Upload</S.PictureWrapperBoxText>
                    </S.PictureWrapperBox>
                </S.PictureWrapperIn>
            </S.PictureWrapper>
            <S.MainSettingWrapper>
                <S.TextName>메인 설정</S.TextName>
                <S.MainSettingWrapperIn>
                    <S.MainSettingWrapperInIn>
                        <S.MainSettingRadio type='radio' name='MainSetting'></S.MainSettingRadio>
                        <S.MainSettingRadioText>유튜브</S.MainSettingRadioText>
                    </S.MainSettingWrapperInIn>
                    <S.MainSettingWrapperInIn>
                        <S.MainSettingRadio type='radio' name='MainSetting'></S.MainSettingRadio>
                        <S.MainSettingRadioText>사진</S.MainSettingRadioText>
                    </S.MainSettingWrapperInIn>
                </S.MainSettingWrapperIn>
            </S.MainSettingWrapper>
            <S.SubmitButtonWrapper>
                <S.SubmitButton onClick={props.onClickSubmit}>등록하기</S.SubmitButton>
            </S.SubmitButtonWrapper>
        </S.MainBox>        
    )
}
