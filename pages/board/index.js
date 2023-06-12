import {MainBox, MainName, TextBox, TextName ,TextWrapper, TextWrapperIn, TitleWrapper, TitleBox, ContextWrapper, ContentBox} from '../../styles/boardStyled'
import {AddressWrapper, AddressWrapperIn, AddressDisplay, AddressButton, Address1, Address2, YoutubeWrapper, YoutubeBox} from '../../styles/boardStyled'
import {PictureWrapper, PictureWrapperIn, PictureWrapperBox, PictureWrapperBoxPlus, PictureWrapperBoxText} from '../../styles/boardStyled'
import {MainSettingWrapper, MainSettingWrapperIn, MainSettingWrapperInIn, MainSettingRadio, MainSettingRadioText, RegButtonWrapper, RegButton} from '../../styles/boardStyled'


export default function BoardPage() {


    return (
        <MainBox>
            <MainName>게시물 등록</MainName>
            <TextWrapper>
                <TextWrapperIn>
                    <TextName>작성자</TextName>
                    <TextBox placeholder='이름을 적어주세요.'></TextBox>
                </TextWrapperIn>
                <TextWrapperIn>
                    <TextName>비밀번호</TextName>
                    <TextBox placeholder='비밀번호를 입력해주세요.'></TextBox>
                </TextWrapperIn>
            </TextWrapper>
            
            <TitleWrapper>
                <TextName>제목</TextName>
                <TitleBox placeholder='제목을 작성해주세요.'></TitleBox>
            </TitleWrapper>
            <ContextWrapper>
                <TextName>내용</TextName>
                <ContentBox placeholder='내용을 작성해주세요'></ContentBox>
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
                        <PictureWrapperBoxPlus src='Vector.png'></PictureWrapperBoxPlus>
                        <PictureWrapperBoxText>Upload</PictureWrapperBoxText>
                    </PictureWrapperBox>
                    <PictureWrapperBox>
                        <PictureWrapperBoxPlus src='Vector.png'></PictureWrapperBoxPlus>
                        <PictureWrapperBoxText>Upload</PictureWrapperBoxText>
                    </PictureWrapperBox>
                    <PictureWrapperBox>
                        <PictureWrapperBoxPlus src='Vector.png'></PictureWrapperBoxPlus>
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
                <RegButton>등록하기</RegButton>
            </RegButtonWrapper>
        </MainBox>        
    )
}
