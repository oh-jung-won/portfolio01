import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'
import {DELETE_BOARD, FETCH_BOARD} from './BoardDetail.queries'
import BoardDetailPageUI from './BoardDetail.presenter'

export default function BoardDetailPageCon(){

    const router = useRouter()
    const [deleteBoard] = useMutation(DELETE_BOARD)
    
    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.id
        }
    })

    const onClickDelete = (event) => {
        deleteBoard({
            variables: {boardId: event.target.id}
        })
        alert("삭제가 완료되었습니다.")
        router.push('/boards')
    }

    return(
        <BoardDetailPageUI 
            data={data} 
            onClickDelete={onClickDelete}/>
    )

}