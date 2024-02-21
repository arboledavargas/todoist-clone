import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleCheck } from "@fortawesome/free-regular-svg-icons";

export default function TaskPreview({ title, content, done, onTaskDone }:{title:string, content: string, done: boolean, onTaskDone: () => void }) {
  return (
    <div className="taskPreview">
      <div className="taskPreview-toggle">
        {
          done ? 
          (<FontAwesomeIcon icon={faCircleCheck}/>)
           : 
          (<FontAwesomeIcon icon={faCircle} onClick={onTaskDone}/>)
        }
      </div>
      <div className="taskPreview-content">
        <h6 className="taskPreview-content-title">
          {title}
        </h6>
        <p className="taskPreview-content-text">
          {content}
        </p>
      </div>
    </div>
  );
}
