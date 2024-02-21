import styles from "./taskEditor.module.css";
import { useReducer } from "react";
import { OneLineInput } from "../oneLineInput/oneLineInput";
import { ActionButtonFilled } from "../actionButtonFilled/actionButtonFilled";
import { CancelButton } from "../cancelButton/cancelButton";

type inputState = {
	title: string;
	content: string;
};

type taskEditorProps = {
	onClose: () => void;
	onNewTask: (task:inputState) => void;
}

export function TaskEditor({ onNewTask, onClose }:taskEditorProps) {
	const [state, dispatchInputState] = useReducer(
		(state: inputState, newState: Partial<inputState>): inputState => {
			return { ...state, ...newState };
		},
		{
			title: "",
			content: "",
		}
	);

	return (
		<div className={styles.taskEditor}>
			<div className={styles.input_area}>
				<OneLineInput
					placeHolder={{
						text: "Task name",
						type: "bold",
					}}
					value={state.title}
					onChange={(value: string) =>
						dispatchInputState({
							title: value,
						})
					}
				/>
				<OneLineInput
					placeHolder={{
						text: "description",
						type: "slim",
					}}
					value={state.content}
					onChange={(value: string) =>
						dispatchInputState({
							content: value,
						})
					}
				/>

			</div>
			<div className={styles.footer}>
				<CancelButton onClick={onClose}>Cancel</CancelButton>
				<ActionButtonFilled onClick={() => onNewTask(state)}>Add task</ActionButtonFilled>
			</div>
		</div>
	);
}
