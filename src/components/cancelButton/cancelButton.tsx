import { PropsWithChildren } from 'react';
import styles from "./cancelButton.module.css";

type buttonProps = {
	onClick: () => void;
}

export function CancelButton({children, onClick}: PropsWithChildren<buttonProps>){

	return <button className={styles.cancelButtonFilled} onClick={onClick}>
		{children}
	</button>

}