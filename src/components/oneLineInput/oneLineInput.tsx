import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css'; // for snow theme
import styles from "./oneLineInput.module.css";

type placeHolder = {
	text: string;
	type: 'bold' | 'slim'
}

export function OneLineInput({ onChange, value, placeHolder }: { onChange: (value:string) => void, value: string, placeHolder: placeHolder }){	

	const className = placeHolder.type == 'bold' ? styles.editor : styles.editor_slim

	return <ReactQuill
		theme="bubble"
		placeholder={placeHolder.text}
		value={value}
		onChange={onChange}
		className={className}
	/>
}