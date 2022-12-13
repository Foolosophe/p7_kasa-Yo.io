import LogoWhite from "../../assets/logoWhite.png";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer_logo" src={LogoWhite} alt="logo" />
      <div className="footer_info">© 2020 Kasa. All rights reserved </div>
    </footer>
  );
}
export default Footer;
