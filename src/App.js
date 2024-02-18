import "./App.css";
import { Wrapper } from "./components/Wrapper";

function App() {
  return (
    <Wrapper>
      <div className="App">
        <header>CALCULATOR</header>
      </div>
    </Wrapper>
  );
}

export const ButtonBox = ({ children }) => {
  return <div className="buttonBox">{children}</div>;
};

export default App;
