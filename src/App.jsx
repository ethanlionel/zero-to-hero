import { useState } from "react";
import DisplayingData from "./components/DisplayingData";
import RenderingList from "./components/RenderingList";
import RespondingEvent from "./components/RespondingEvent";
import SharingDataState from "./components/SharingDataState";
import UpdateScreen from "./components/UpdateScreen";
import { TicTacToe } from "./components/TicTacToe";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <DisplayingData />
      <RenderingList />
      <RespondingEvent />
      <UpdateScreen />
      <UpdateScreen />
      <SharingDataState count={count} onClick={handleClick} />
      <SharingDataState count={count} onClick={handleClick} />
      <TicTacToe />
    </>
  );
};

export default App;
