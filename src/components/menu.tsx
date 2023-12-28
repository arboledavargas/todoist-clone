import ProfileMenu from "./profileMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBars,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { BoxIcon } from "./boxIcon";

export default function Menu() {
  return (
    <div className="menu">
      <div className="menu_header">
        <ProfileMenu></ProfileMenu>
        <div className="flex-separator"></div>
        <BoxIcon>
          <FontAwesomeIcon icon={faBell} size="lg" />
        </BoxIcon>
        <BoxIcon>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </BoxIcon>
      </div>
      <div className="menu_items">
        <div className="menu_item--active">
          <FontAwesomeIcon icon={faCirclePlus} size="lg" />
          Add task
        </div>
      </div>
    </div>
  );
}
