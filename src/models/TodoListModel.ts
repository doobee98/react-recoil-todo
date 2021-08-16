import TodoItemModel from './TodoItemModel';

export default interface TodoListModel {
  items: TodoItemModel[];
  counter: number;
}
