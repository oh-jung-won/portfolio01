import { useRouter } from "next/router"
import BoardListUI from "./BoardList.presenter"
import {FETCH_BOARDS} from './BoardList.queries'
import { useQuery } from "@apollo/client"

export default function BoardListPageCon(){
    const { data } = useQuery(FETCH_BOARDS, {
        variables: { page: 15 }
      })

    const router = useRouter()

    const onClickMoveToBoardDetail = (event) => {
        router.push(`/boards/boardId/${event.target.id}`)
        console.log(event.target.id)
    }

    return (
        <BoardListUI 
        data = {data}
        onClickMoveToBoardDetail={onClickMoveToBoardDetail}/>
    )
}