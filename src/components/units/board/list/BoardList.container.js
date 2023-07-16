import { useRouter } from "next/router"
import BoardListUI from "./BoardList.presenter"
import {FETCH_BOARDS} from './BoardList.queries'
import { useQuery } from "@apollo/client"

export default function BoardListPageCon(){
    const { data } = useQuery(FETCH_BOARDS)
    
    const router = useRouter()

    const onClickMoveToBoardDetail = (event) => {
        router.push(`/boards/${event.target.id}`)
        console.log(event.target.id)
    }

    const onClickMoveToBoardNew = () => {
        router.push(`/boards/new`)
    }

    return (
        <BoardListUI 
        data = {data}
        onClickMoveToBoardDetail={onClickMoveToBoardDetail}
        onClickMoveToBoardNew={onClickMoveToBoardNew}/>
    )
}