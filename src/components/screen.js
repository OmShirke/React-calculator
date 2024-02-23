import "./components.css";
import { Textfit } from "react-textfit";

export const Screen = ({ value }) => {
  return (
    <Textfit className="screen" mode="single" max={70}>
      {value}
    </Textfit>
  );
};
