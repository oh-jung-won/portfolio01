import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import {FETCH_BOARD} from './BoardDetail.queries'
import BoardDetailPageUI from './BoardDetail.presenter'

export default function BoardDetailPageCon(){

    const router = useRouter()
    
    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.id
        }
    })

    return(
        <BoardDetailPageUI 
            data={data} />
    )

}