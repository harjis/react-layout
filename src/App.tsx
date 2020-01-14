import React from "react";
import "normalize.css";

import Tabs from "./components/Tabs";
import Settings from "./components/Settings";
import Rows from "./components/Rows";

import styles from "./App.module.css";

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Tabs />
      <Settings />
      <Rows />
    </div>
  );
};

export default App;
