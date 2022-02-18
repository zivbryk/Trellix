import { useSelector } from "react-redux";

export const TestCmp = () => {
  const board = useSelector((state) => state.boardReducer.boards);
  console.log(board);

  //   setTimeout(() => console.log(board), 2000);

  return (
    <section className="test-cmp">
      <h1>Test Cmp!</h1>
    </section>
  );
};
