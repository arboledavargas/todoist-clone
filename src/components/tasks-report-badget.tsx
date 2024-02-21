import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function TaskReportBadget() {
  return (
    <div className="taskReportBadget">
      <FontAwesomeIcon icon={faCircleCheck} className="customIcon" size="sm" />
      <span>3 Tasks</span>
    </div>
  );
}
