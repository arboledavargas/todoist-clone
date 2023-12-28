import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function ProfileMenu() {
  return (
    <div className="profile_menu">
      <img src="https://picsum.photos/200" className="avatar"></img>
      <h4 className="user_name">Julian</h4>
      <FontAwesomeIcon icon={faAngleDown} />
    </div>
  );
}
