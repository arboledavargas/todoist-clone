import ProfileMenu from "./profileMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBars,
  faCirclePlus,
  faMagnifyingGlass,
  faInbox,
  faCalendar,
  faAngleDown,
  faCalendarDays,
  faPlus,
  faSliders,
  faHashtag,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import BoxIcon from "./boxIcon";

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
        <div className="menu_item">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          Search
        </div>
        <div className="menu_item">
          <FontAwesomeIcon icon={faInbox} size="lg" />
          <span className="menu_item_label">Invox</span>
          <span className="menu_item_badge">3</span>
        </div>
        <div className="menu_item">
          <FontAwesomeIcon icon={faCalendar} size="lg" />
          <span className="menu_item_label">Today</span>
          <span className="menu_item_badge">3</span>
        </div>
        <div className="menu_item">
          <FontAwesomeIcon icon={faCalendarDays} size="lg" />
          <span className="menu_item_label">Upcoming</span>
        </div>
        <div className="menu_item">
          <FontAwesomeIcon icon={faSliders} size="lg" />
          <span className="menu_item_label">Filters & Labels</span>
        </div>
      </div>
      <div className="menu_items">
        <div className="menu_items_header">
          <span className="menu_items_header_label">My Projects</span>
          <BoxIcon>
            <FontAwesomeIcon icon={faPlus} />
          </BoxIcon>
          <BoxIcon>
            <FontAwesomeIcon icon={faAngleDown} />
          </BoxIcon>
        </div>
        <div className="menu_item">
          <FontAwesomeIcon icon={faHashtag} size="lg" />
          <span className="menu_item_label">Home</span>
          <BoxIcon>
            <FontAwesomeIcon icon={faEllipsis} />
          </BoxIcon>
        </div>
      </div>
      <div className="free-space"></div>
      <div className="menu_items">
        <div className="menu_item">
          <FontAwesomeIcon icon={faPlus} size="lg" />
          <span className="menu_item_label">Add a team</span>
        </div>
      </div>
    </div>
  );
}
