import styles from "./Tooltip.module.css";

function Tooltip({children , hint}) {
  return (
    <div class={styles.tooltip}>
      {children}
      {hint&&<span class={styles.tooltiptext}>{hint}</span>}
    </div>
  )
};

export default Tooltip