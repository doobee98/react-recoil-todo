import TodoListModel from 'models/TodoListModel';

const sleep = (ms: number) => {
  return new Promise((f) => setTimeout(f, ms));
};

class TodoApi {
  /*
    실제 api에서 fetch하지 않기 때문에,
    3초의 딜레이를 둔 후에 TodoList 데이터를 return하여
    비동기 효과를 낼 수 있도록 디자인
  */
  fetchTodoList = async (onSuccess: (data: TodoListModel) => void) => {
    await sleep(3000);

    const todos: TodoListModel = {
      items: [
        {
          id: 0,
          title: '투두리스트 마무리하기',
          done: false,
          pinned: false,
        },
        {
          id: 1,
          title: '알프스 과제',
          done: false,
          pinned: true,
        },
        {
          id: 2,
          title: '콜로키움 과제 제출',
          done: true,
          pinned: true,
        },
        {
          id: 3,
          title: '밀린 강의 듣기',
          done: false,
          pinned: false,
        },
      ],
      counter: 4,
    };

    onSuccess(todos);
  };
}

export default TodoApi;
