import "./components.css";

export const Button = ({ className, value, onClick }) => {
  return (
    <Button className={className} onClick={onClick}>
      {value}
    </Button>
  );
};
