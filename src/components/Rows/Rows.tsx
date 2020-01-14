import React from "react";

import styles from "./Rows.module.css";

const Rows = () => {
  const [numberOrRows, setNumberOfRows] = React.useState(20);
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <button onClick={() => setNumberOfRows(state => state + 1)}>Add</button>
        Items: {numberOrRows}
      </div>
      <div className={styles.inputRows}>
        {[...Array(numberOrRows).keys()].map(index => (
          <div key={index}>Item {index + 1}</div>
        ))}
      </div>
    </div>
  );
};

export default Rows;
