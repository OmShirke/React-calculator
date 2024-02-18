import "./App.css";
import { Wrapper } from "./components/wrapper";
import { Screen } from "./components/screen";
import { Button } from "./components/button";
import { ButtonBox } from "./components/buttonBox";

function App() {
  return (
    <Wrapper>
      <Screen value={0} />
      <ButtonBox>
        <Button
          className=""
          value="0"
          onClick={() => {
            console.log("Button clicked!");
          }}
        />
      </ButtonBox>
    </Wrapper>
  );
}

export default App;
