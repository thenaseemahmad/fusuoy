import styles from './Button.module.css';

export function NormalButton({children, ...props}){
    return <button className={styles.normal_button} {...props}>{children}</button>
}

export function HighlightedButton({children, ...props}){
    return <button className={styles.highlighted_button} {...props}>{children}</button>
}