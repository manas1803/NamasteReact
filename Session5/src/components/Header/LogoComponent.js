import { LOGO_URL } from "../../utilities/constants";

const LogoComponent = () => {
  return (
    <div className="logo-container">
      <img src={LOGO_URL} />
    </div>
  );
};

export default LogoComponent;
