import { useRouter } from "next/router"
import BoardListUI from "./BoardList.presenter"
import {FETCH_BOARDS} from './BoardList.queries'
import { useQuery } from "@apollo/client"
import { MouseEvent } from "react"
import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types"

export default function BoardListPageCon(){
    const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS)
    
    const router = useRouter()

    const onClickMoveToBoardDetail = (event: MouseEvent<HTMLTableCellElement>) => {
        if(event.target instanceof HTMLTableCellElement) router.push(`/boards/${event.target.id}`)
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