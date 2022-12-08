import "./topbar.scss";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcone from "@material-ui/icons/Mail";
const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "topbar--active")}>
      <div className="topbar__inner">
        <div className="topbar__logo">
          <a className="topbar__logo--link" href="/">
            Sharipbekov Amirbek
          </a>
        </div>
        <div className="topbar__icon">
          <PhoneIcon className="topbar__phone" />
          <span>0700666555</span>
        </div>
        <div className="topbar__icon">
          <MailIcone className="topbar__phone" />
          <span>@mail.com</span>
        </div>
        <div className="topbar__right">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="topbar__button "
          ></button>
        </div>
      </div>
    </div>
  );
};
export default Topbar;
