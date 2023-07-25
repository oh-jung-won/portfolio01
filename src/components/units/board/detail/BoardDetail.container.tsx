import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.queries";
import BoardDetailPageUI from "./BoardDetail.presenter";
import { MouseEvent } from "react";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetailPageCon() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: typeof router.query.id === "string" ? router.query.id : "",
      },
    },
  );

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const onClickDelete = (event: MouseEvent<HTMLButtonElement>) => {
    try {
      if (!(event.target instanceof HTMLButtonElement)) return;
      deleteBoard({
        variables: { boardId: event.target.id },
      });
      alert("삭제가 완료되었습니다.");
      router.push("/boards");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickEdit = () => {
    router.push(`/boards/${router.query.id}/edit`);
  };

  const onClickList = () => {
    router.push(`/boards`);
  };

  return (
    <BoardDetailPageUI
      data={data}
      onClickDelete={onClickDelete}
      onClickEdit={onClickEdit}
      onClickList={onClickList}
    />
  );
}
