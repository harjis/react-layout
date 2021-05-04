import React from "react";

import styles from "./Settings.module.css";

const Settings = () => {
  const [isShown, setShown] = React.useState(true);
  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={() => setShown(state => !state)}>
        Click to open / close
      </div>
      {isShown && <div className={styles.settings}>Some element that dynamically takes up space</div>}
    </div>
  );
};

export default Settings;
