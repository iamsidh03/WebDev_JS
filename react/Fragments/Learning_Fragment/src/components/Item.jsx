import styles from "./Item.module.css";
const Item = ({foodItem}) => {
    return (<li className={`${styles['kgItem']}"list-group-item"`}>
      <span className={styles['kg-span']}>{foodItem}</span></li>)
}
export default Item;