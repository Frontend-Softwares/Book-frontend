import styles from "./Tooltip.module.css";

function Tooltip({children , hint , className}) {
  return (
    <div className={styles.tooltip+" "+className}>
      {children}
      {hint&&<span className={styles.tooltiptext}>{hint}</span>}
    </div>
  )
};

export default Tooltip