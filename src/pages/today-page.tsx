import { faSliders, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonIcon from "../components/buttonIcon";
import TaskReportBadget from "../components/tasks-report-badget";
import BoxIcon from "../components/boxIcon";
import TaskPreview from "../components/task-preview";
import { gql, useQuery, useMutation } from "@apollo/client"
import { useReducer, useState } from "react"
import { ActionButton } from "../components/actionButton/actionButton"
import { TaskEditor } from "../components/taskEditor/taskEditor";

const GET_TASKS = gql`
query GetTasks($dueDate: String) {
  tasks(dueDate: $dueDate) {
    id
    title
    content
    done
    dueDate
    subTasks {
      id
      title
      content
      done
      dueDate
    }
  }
}
`

const CREATE_TASK = gql`
mutation Mutation($input: CreateTaskInput) {
  createTask(input: $input) {
    id
    title
    content
    done
    dueDate
  }
}

`


const taskEditorShownReducer = (state: boolean, action: string):boolean => {
  
  switch (action) {
    case 'open': {
      return true
      break;
    }
    case 'close': {
      return false
      break
    }
  
    default:
      return false
      break;
  }
}

export default function TodayPage() {

  const [currentDateTime] = useState(((new Date()).toISOString()));
  const [taskEditorShown, dispatchTaskEditorShown] = useReducer(taskEditorShownReducer, false)
  const [createTask] = useMutation(CREATE_TASK,{
    refetchQueries:['GetTasks']
  })

  const onNewTaskHandle = (task) => {
    createTask({
      variables: {
        "input": {
          "content": task.content,
          "done": false,
          "dueDate": (new Date()).toISOString(),
          "title": task.title
        }
      }
    })
  }

  const { loading, error, data } = useQuery(GET_TASKS, {
    variables: {
      dueDate: currentDateTime
    }
  })

  if(error) return <p>{ error.message }</p>
  if(loading) return <p>loading</p>
  if(data) return (
    <div className="todayPage">
      <div className="main-content">
        <header className="main-content-header">
          <div className="header-title">
            <h1 className="title">Today</h1>
            <TaskReportBadget></TaskReportBadget>
          </div>
          <div className="header-options">
            <ButtonIcon>
              <FontAwesomeIcon icon={faSliders} />
              <span>View</span>
            </ButtonIcon>
          </div>
        </header>
        {
          (!!data.tasks.length) &&
            <div className="todo_list_accordion">
              <div className="todo_list_header">
                <div className="todo_list_header_toggle">
                  <BoxIcon>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </BoxIcon>
                </div>
                <div className="todo_list_header_content">
                  <h4 className="todo_list_header_title">Overdue</h4>
                  <a className="linkButton">Reschedule</a>
                </div>
              </div>{
                data.tasks.map(task => <TaskPreview title={task.title} content={task.content} done={task.done} key={task.id} onTaskDone={() => null}></TaskPreview>)
              }
            </div>
        }
        {
          taskEditorShown ? 
          <TaskEditor onClose={() => dispatchTaskEditorShown('close')} onNewTask={onNewTaskHandle}></TaskEditor> 
          : 
          <ActionButton text={'Add task'} onclick={() => dispatchTaskEditorShown('open')}></ActionButton>
        }
      </div>
    </div>
  );
}
