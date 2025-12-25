import type { ITodo } from "../../App";
import styles from "./styles.module.css";

interface IProps {
  addTodo(todo: ITodo): void;
}

const Header: React.FunctionComponent<IProps> = () => {
  return (
    <div className={styles.header}>
      <input type="text" placeholder="add text" />
      <button>add</button>
    </div>
  );
};
export default Header;
