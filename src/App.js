import "./App.css";
import { Wrapper } from "./components/wrapper";
import { Screen } from "./components/screen";
import { Button } from "./components/button";
import { ButtonBox } from "./components/buttonBox";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <Wrapper>
      <Screen value={0} />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={() => {
                console.log(`${btn} clicked`);
              }}
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
}

export default App;
