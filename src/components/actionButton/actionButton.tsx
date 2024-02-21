import styles from './actionButton.module.css'
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ActionButton({ text, onclick }: { text: string, onclick: () => any }){

	return <div className={styles.action_button} onClick={onclick}>
		<i className={styles.icon}>
			<FontAwesomeIcon  icon={faPlusCircle} />
		</i>
		
		<span>{text}</span>
	</div>
}