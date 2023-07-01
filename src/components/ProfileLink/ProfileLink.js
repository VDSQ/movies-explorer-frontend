import "./ProfileLink.css";
import profileIconBlack from "../../images/icons/profile-black.svg";
import { Link } from "react-router-dom";

function ProfileLink() {
  return (
    <Link to="/profile" className="link profile-link">
      Аккаунт
      <img src={profileIconBlack} alt="Profile icon" />
    </Link>
  );
}

export default ProfileLink;
