import styles from "./Input.module.css";

export default function Input({labelTitle, inputType, warnings, ...props}){
    
    return <div className={styles.container}>
        <label htmlFor={inputType}>{labelTitle}</label>
        <input type={inputType} name={inputType} id={inputType} {...props} />
        {warnings.map((warning)=><p key={warning}>{warning}</p>)}
    </div>
}