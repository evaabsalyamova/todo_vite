import type { ITodo } from "../../App";

interface IProps {
  deleteTodo(id: number): void;
  markTodoReady(id: number): void;
  todos: ITodo[];
}

const List: React.FunctionComponent<IProps> = () => {
  return <div>...</div>;
};
export default List;
