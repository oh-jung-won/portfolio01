import BoardDetailPageCon from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentListPageCon from "../../../src/components/units/boardComment/list/boardCommentList.container";
import BoardCommentWritePageCon from "../../../src/components/units/boardComment/write/boardCommentWrite.container";

export default function BoardDetailPage(){

    return (
        <>
            <BoardDetailPageCon />
            <BoardCommentWritePageCon />
            <BoardCommentListPageCon />
        </>
    )
}