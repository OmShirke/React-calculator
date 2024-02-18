import "./App.css";
import { Wrapper } from "./components/wrapper";
import { Screen } from "./components/screen";

function App() {
  return (
    <Wrapper>
      <Screen value={0} />
      <ButtonBox></ButtonBox>
    </Wrapper>
  );
}

export const ButtonBox = ({ children }) => {
  return <div className="buttonBox">{children}</div>;
};

export default App;
