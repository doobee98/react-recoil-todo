import TodoApi from 'apis/TodoApi';
import TodoItemModel from 'models/TodoItemModel';
import TodoListModel from 'models/TodoListModel';
import { atom, selector, selectorFamily } from 'recoil';

const todoListApiDefault = selector<TodoListModel>({
  key: 'TodoListApiDefault',
  get: async () => {
    const todoApi = new TodoApi();
    const todoList = await todoApi.fetchTodoList();
    return todoList;
  },
});

export const todoListState = atom<TodoListModel>({
  key: 'TodoList',
  default: todoListApiDefault,
});

export const sortedTodoListState = selector<TodoListModel>({
  key: 'SortedTodoList',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const sortedTodoList = {
      ...todoList,
      items: todoList.items.slice().sort((a, b) => {
        // first: pinned, second: bigger id
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return b.id - a.id;
      }),
    };
    return sortedTodoList;
  },
});

// 미완성
export const todoItemState = selectorFamily<TodoItemModel, number>({
  key: 'TodoItem',
  get: (idx: number) => {
    return ({ get }) => {
      const todoList = get(todoListState);
      return todoList.items[idx];
    };
  },
  //   set: (idx: number) => {
  //     return ({ get, set }, newItem: TodoItemModel) => {
  //       const todoList = get(todoListState);
  //       set(todoListState, {
  //         ...todoList,
  //         items: todoList.items.map((item, i) => (i !== idx ? item : newItem)),
  //       });
  //     };
  //   },
});
