import { AiFillPushpin, AiOutlinePushpin } from 'react-icons/ai';
import { FaRegCheckSquare, FaRegSquare } from 'react-icons/fa';
import { ImBin } from 'react-icons/im';
import styled, { css } from 'styled-components';
import TodoItemModel, { ChangeTodoItemParams } from 'models/TodoItemModel';
import { useSetRecoilState } from 'recoil';
import { todoListState } from 'recoil/todo';

const TodoItemWrapper = styled.div`
  padding: 25px 20px;
  border-bottom: 1px solid black;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:nth-child(1) {
    border-top: 1px solid black;
  }
`;

const PinIcon = styled.span`
  display: flex;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const DoneIcon = styled.span`
  margin-left: 7px;

  display: flex;
  align-items: center;

  svg {
    width: 18px;
    height: 18px;
  }
`;

const DeleteIcon = styled.span`
  margin-left: 10px;

  display: flex;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
  }
`;

interface ContentProps {
  done?: boolean;
}

const Content = styled.span<ContentProps>`
  font-size: 16px;
  margin-left: 15px;
  vertical-align: middle;

  flex: 1;

  ${(props) =>
    props.done &&
    css`
      text-decoration: line-through;
    `}
`;

interface TodoItemProps {
  todo: TodoItemModel;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { todo } = props;
  const { id, title, done, pinned } = todo;
  const setTodoList = useSetRecoilState(todoListState);

  const changeTodo = (newTodo: ChangeTodoItemParams) => {
    setTodoList((oldTodoList) => ({
      ...oldTodoList,
      items: oldTodoList.items.map((todoItem) => ({
        ...todoItem,
        ...(todoItem.id === id && newTodo),
      })),
    }));
  };

  const deleteTodo = () => {
    setTodoList((oldTodoList) => ({
      ...oldTodoList,
      counter: oldTodoList.counter - 1,
      items: oldTodoList.items.filter((todoItem) => todoItem.id !== id),
    }));
  };

  const toggleDone = () => {
    changeTodo({ done: !todo.done });
  };

  const togglePinned = () => {
    changeTodo({ pinned: !todo.pinned });
  };

  return (
    <TodoItemWrapper>
      <PinIcon onClick={togglePinned}>
        {pinned ? <AiFillPushpin /> : <AiOutlinePushpin />}
      </PinIcon>
      <DoneIcon onClick={toggleDone}>
        {done ? <FaRegCheckSquare /> : <FaRegSquare />}
      </DoneIcon>
      <Content done={done}>{title}</Content>
      <DeleteIcon onClick={deleteTodo}>
        <ImBin />
      </DeleteIcon>
    </TodoItemWrapper>
  );
};

export default TodoItem;
