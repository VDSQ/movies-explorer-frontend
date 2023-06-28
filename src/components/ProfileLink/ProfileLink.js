import "./ProfileLink.css";
import profileWhiteIcon from "../../images/icons/profile-white.svg";
import profileBlackIcon from "../../images/icons/profile-black.svg";
import { Link } from "react-router-dom";

function ProfileLink({ isMainPage, onCloseMobileNavigation }) {
  const { profileIcon, headerNavLinkNavyClassName } = isMainPage
    ? {
        profileIcon: profileWhiteIcon,
        headerNavLinkNavyClassName: " profile-link_navy",
      }
    : {
        profileIcon: profileBlackIcon,
        headerNavLinkNavyClassName: "",
      };

  return (
    <Link
      to="/profile"
      className={"link profile-link" + headerNavLinkNavyClassName}
      onClick={onCloseMobileNavigation}
    >
      Аккаунт
      <img src={profileIcon} alt="Profile icon" />
    </Link>
  );
}

export default ProfileLink;
