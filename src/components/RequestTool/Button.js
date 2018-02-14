// @flow
import React from "react";
import styles from "./styles.module.css";

type Props = {
  onClick: () => any
};

const Button = (props: Props) =>
  <button className={styles.button} onClick={props.onClick}>
    Send request
  </button>;

export default Button;
