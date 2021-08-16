export default interface TodoItemModel {
  id: number;
  title: string;
  done: boolean;
  pinned: boolean;
}

export interface ChangeTodoItemParams {
  title?: string;
  done?: boolean;
  pinned?: boolean;
}
