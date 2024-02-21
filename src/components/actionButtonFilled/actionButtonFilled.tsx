import { PropsWithChildren } from 'react';
import styles from "./actionButtonFilled.module.css";

type buttonProps = {
	onClick: () => void;
}

export function ActionButtonFilled({children, onClick}:PropsWithChildren<buttonProps>){
	return <button className={styles.actionButtonFilled} onClick={onClick}>
		{children}
	</button>
}