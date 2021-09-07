import Modal from "../UI/Modal";

import styles from './Cart.module.css';

const Cart = props => {
    const carItems = (
      <ul className={styles['cart-items']} >
        {[{ id: "1", name: "sushi", amount: 2, price: 12.99 }].map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    );

    return (
      <Modal>
        {carItems}
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>35.62</span>
        </div>
        <div className={styles.actions}>
          <button className={styles["button--alt"]}>Close</button>
          <button className={styles.button}>Order</button>
        </div>
      </Modal>
    );
};

export default Cart;
