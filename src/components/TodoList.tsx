import styled from 'styled-components';
import { sortedTodoListState } from 'recoil/todo';
import { useRecoilValue } from 'recoil';
import TodoItem from './TodoItem';

const TodoListWrapper = styled.div`
  margin: 10px 0;
`;

const EmptyTodoList = styled.div`
  padding-top: 100px;
  border-top: 1px solid black;
  font-size: 25px;
  font-style: italic;
  color: gray;
  text-align: center;
`;

const TodoList: React.FC = () => {
  const sortedTodoList = useRecoilValue(sortedTodoListState);

  return (
    <TodoListWrapper>
      {sortedTodoList.items.length === 0 ? (
        <EmptyTodoList>더이상 할 일이 없습니다...</EmptyTodoList>
      ) : (
        sortedTodoList.items.map((todoItem) => (
          <TodoItem key={todoItem.id} todo={todoItem} />
        ))
      )}
    </TodoListWrapper>
  );
};

export default TodoList;
