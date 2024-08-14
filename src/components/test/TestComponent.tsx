import {FunctionComponentElement} from "react";
import styles from './TestComponent.module.scss';

export interface Props {

}
export default function (props: Props): FunctionComponentElement<Props> {
  return <div className={styles.component}>Test Component</div>;
}