import { AiFillPushpin, AiOutlinePushpin } from 'react-icons/ai';
import { FaRegCheckSquare, FaRegSquare } from 'react-icons/fa';
import { ImBin } from 'react-icons/im';
import styled, { css } from 'styled-components';
import TodoItemModel, { ChangeTodoItemParams } from 'models/TodoItemModel';

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
  changeTodo: (id: number, newTodo: ChangeTodoItemParams) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { todo, changeTodo, deleteTodo } = props;
  const { title, done, pinned } = todo;

  const toggleDone = () => {
    changeTodo(todo.id, { done: !todo.done });
  };

  const togglePinned = () => {
    changeTodo(todo.id, { pinned: !todo.pinned });
  };

  const deleteThis = () => {
    deleteTodo(todo.id);
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
      <DeleteIcon onClick={deleteThis}>
        <ImBin />
      </DeleteIcon>
    </TodoItemWrapper>
  );
};

export default TodoItem;
