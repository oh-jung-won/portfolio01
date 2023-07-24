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

export const WriterPasswordWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`

export const Writer = styled.input`
    height: 40px;
    width: 250px;
    margin-right: 30px;
    border: 1px solid #BDBDBD;
    font-size: 16px;
    font-weight: 500;
    line-height: 40px;
    padding-left: 10px;

    ::placeholder {
        color: #BDBDBD;
    }

`

export const Password = styled.input`
    height: 40px;
    width: 250px;
    margin-right: 40px;
    border: 1px solid #BDBDBD;
    font-size: 16px;
    font-weight: 500;
    line-height: 40px;
    padding-left: 10px;

    ::placeholder {
        color: #BDBDBD;
    }

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