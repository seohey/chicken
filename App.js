import "./styles.css";
import "./Board";

export default function App() {
  return (
    <div className="App">
      <h1>🌼꽃길 빙고🌼</h1>
      <Board />
    </div>
  );
}

const Board = (props) => {
  return (
    <div>
      <div className="board-row">
        <Square value="0, 0" />
        <Square value="0, 1" />
        <Square value="0, 2" />
        <Square value="0, 3" />
        <Square value="0, 4" />
      </div>
      <div className="board-row">
        <Square value="1, 0" />
        <Square value="1, 1" />
        <Square value="1, 2" />
        <Square value="1, 3" />
        <Square value="1, 4" />
      </div>
      <div className="board-row">
        <Square value="2, 0" />
        <Square value="2, 1" />
        <Square value="2, 2" />
        <Square value="2, 3" />
        <Square value="2, 4" />
      </div>
      <div className="board-row">
        <Square value="3, 0" />
        <Square value="3, 1" />
        <Square value="3, 2" />
        <Square value="3, 3" />
        <Square value="3, 4" />
      </div>
      <div className="board-row">
        <Square value="4, 0" />
        <Square value="4, 1" />
        <Square value="4, 2" />
        <Square value="4, 3" />
        <Square value="4, 4" />
      </div>
    </div>
  );
};

const Square = (props) => {
  const abc = "square unselected";
  return (
    <button className={abc} onClick={() => console.log(props.value)}>
      {props.value}
    </button>
  );
};
