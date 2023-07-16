import styled from "@emotion/styled";

export const HeadWrapper = styled.div `
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 40px;
`

export const HeadPicture = styled.img `
    margin-right: 12px;

    width: 24px;
    height: 24px;
`

export const HeadText = styled.div `
    font-size: 18px;
    font-weight: 600;
`

export const StarWrapper = styled.div `
    
    width: 120px;
    height: 24px;
`

export const Star = styled.img `
    width: 24px;
    height: 24px;
`

export const CreateTextWrapper = styled.div `
    border: 1px solid #BDBDBD;
    margin-top: 20px;
    margin-bottom: 40px;
    width: 1200px;
`

export const Text = styled.textarea `
    padding: 20px;
    
    height: 110px;
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    color: #000000;

    border: 0px;

    ::placeholder {
        color: #BDBDBD;
    }
`

export const TextFooterWrapper = styled.div `
    border-top: 1px solid #F2F2F2;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
`

export const TextCount = styled.div `
    font-size: 16px;
    font-weight: 500;
    color: #BDBDBD;
`

export const Submit = styled.div `
    cursor: pointer;
    color: #ffffff;
    background: #000000;
    width: 100px;
    height: 100%;
    padding: 14px 16px 14px 16px;
    text-align: center;

    :hover {
    background-color: gold;
    border-color: white;
  }
`

export const ViewComment = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 20px;
`

export const UserImgWrapper = styled.div`
    margin-right: 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    height: 110px;
`

export const UserImg = styled.img`
    width: 48px;
    height: 48px;
`

export const CommentHeap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

export const NameContentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: 12px;
    width: 100%;

`

export const ContentsHead = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 4px;
`

export const NameStarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`

export const Name = styled.div`
    margin-right: 16px;
    font-size: 16px;
    font-weight: 500;
    color: #000000;
`
export const UpdateDeleteWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

export const UpdateImg = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`

export const DeleteImg = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`

export const Contents = styled.div`
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    color: #4F4F4F;
`

export const DateWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 20px 0px;
`

export const DateEmpty = styled.div`
    width: 48px;
`

export const Date = styled.div`
    width: 100%;
    margin-left: 12px;
    font-size: 12px;
    font-weight: 400;
    color: #BDBDBD;
`