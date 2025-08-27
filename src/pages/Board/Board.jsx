/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./styles";
import { getBoardList } from "../../apis/board/boardApis";
import ReactPaginate from "react-paginate";

function Board() {
  const [boardList, setBoardList] = useState([]);
  const [message, setMessage] = useState("");
  const [currentBoardList, setCurrentBoardList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const amouuntBoard = 15;

  useEffect(() => {
    getBoardList().then((response) => {
      if (response.data.status === "success") {
        setBoardList(response.data.data);
      } else if (response.data.status === "failed") {
        setBoardList([]); // 배열로 초기화
        setMessage(response.data.message);
      }
    });
  }, []);

  useEffect(() => {
    const offset = currentPage * amouuntBoard;
    const slicedBoard = boardList.slice(offset, offset + amouuntBoard);
    setCurrentBoardList(slicedBoard);
  }, [currentPage, boardList]);

  const pageOnChangeHandler = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <div css={s.container}>
      <div css={s.listContainer}>
        {boardList.length === 0 ? (
          <p>{message}</p>
        ) : (
          <ul>
            {currentBoardList.map((board, index) => {
              const date = board.createDt;
              const formattedDate = date.split("T")[0]; //대충 split기준으로 반토막 내서 문자열로 저장 [0,1,2 ---] 그중에서 제일 앞에있는 0들고옴
							const boardNumber = (currentPage * amouuntBoard + index + 1);
              return (
                <li key={board.boardId}>
                  <div>
                    <span>{boardNumber}</span>
                    <strong>{board.title}</strong>
                  </div>
                  <span>{formattedDate}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div css={s.paginateContainer}>
        <ReactPaginate
          pageCount={Math.ceil(boardList.length / amouuntBoard)}
          onPageChange={pageOnChangeHandler}
					previousLabel="이전"
					nextLabel="다음"
        />
      </div>
    </div>
  );
}

export default Board;
