import DisplayingData from "./components/DisplayingData";
import RenderingList from "./components/RenderingList";
import RespondingEvent from "./components/RespondingEvent";
import UpdateScreen from "./components/UpdateScreen";

const App = () => {
  return (
    <>
      <DisplayingData />
      <RenderingList />
      <RespondingEvent />
      <UpdateScreen />
    </>
  );
};

export default App;
