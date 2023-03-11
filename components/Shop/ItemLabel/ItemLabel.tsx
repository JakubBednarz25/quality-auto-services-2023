import { FunctionComponent } from "react";
import type { category } from "../../../utils/items";

import styles from './ItemLabel.module.scss';

type ItemLabelProps = {
  type: category;
};

const ItemLabel: FunctionComponent<ItemLabelProps> = ({ type }) => {
  return <label className={styles.label}>{type}</label>;
};

export default ItemLabel;