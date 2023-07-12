import styled from "@emotion/styled";

export const MainWrapper = styled.div `
    width: 1200px
`

export const TableWrapper = styled.table `
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
    border-collapse: collapse;
    width: 100%;
    font-weight: 500;
    font-size: 18px;
`

export const TableHead = styled.th`
    text-align: center;
    padding: 20px 0px 20px 0px;
`

export const TableRow = styled.tr`
cursor: pointer;
    :hover{
        background-color: #BDBDBD;
    }
`

export const TableData = styled.td`
    text-align: center;
    border-top: 1px solid #BDBDBD;
    padding: 20px 0px 20px 0px;
    font-weight: 400;
    color: #4F4F4F;
    font-size: 16px;
`

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

export const CreateButtonWrapper = styled.div`
    margin-top: 40px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 190px;
    height: 60px;
    border-radius: 10px;
    padding: 14px 16px 14px 16px;

    background: linear-gradient(0deg, #F2F2F2, #F2F2F2),
    linear-gradient(0deg, #FFFFFF, #FFFFFF);

    border: 1px solid #F2F2F2;
    cursor: pointer;

    :hover {
        background: gold;
        border-color: white;
    }
`

export const CreateButtonImg = styled.img`
    width: 24px;
    height: 24px;
`

export const CreateButtonText = styled.div`
    color: #000000;
    font-weight: 500;
    font-size: 16px;
`


