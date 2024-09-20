import styles from './PlanCard.module.css'
export default function PlanCard({planName, cost, benefits, buttonText, handlePlanButtonClick}){
    return(
        <div className={styles.planTitle}>
          <h5 className={styles.planName}>{planName}</h5>
          <h6 className={styles.cost}>$<span>{cost}</span>/mo</h6>
          <ul className={styles.benefits}>
            {benefits.map(benefit =>
                <li key={benefit} className={styles.benefit}>{benefit}</li>
            )}
          </ul>
          <button onClick={()=> handlePlanButtonClick(buttonText)} className={styles.button}>{buttonText}</button>
        </div>
    );
}