import LogoComponent from "./LogoComponent";
import NavBarComponent from "./NavbarComponent";

const HeaderComponent = () => {
  return (
    <div className="header-container">
      <LogoComponent />
      <NavBarComponent />
    </div>
  );
};

export default HeaderComponent;
