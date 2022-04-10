import "./Header.css";

type HeaderProps = {
  showInputText: () => void;
};

const Header = (props: HeaderProps) => {
  return (
    <>
      <div className="background">
        <label className="labelTxt">Todo List</label>
        <img
          onClick={() => props.showInputText()}
          className="imagePlus"
          src={require("../../assets/icons8-plus.png")}
        />
      </div>
    </>
  );
};

export default Header;
