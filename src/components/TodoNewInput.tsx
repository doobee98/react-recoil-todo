import { FaPlus } from 'react-icons/fa';
import styled from 'styled-components';
import useInput from 'hooks/useInput';
import { useSetRecoilState } from 'recoil';
import { todoListState } from 'recoil/todo';

const TodoNewInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleInput = styled.input`
  display: inline-block;
  padding: 10px;

  flex: 1;
`;

const AddIcon = styled.span`
  margin-left: 20px;

  display: flex;
  align-items: center;

  svg {
    width: 25px;
    height: 25px;
  }
`;

const TodoNewInput: React.FC = () => {
  const [title, onChangeTitle, setTitle] = useInput();
  const setTodoList = useSetRecoilState(todoListState);

  const addNewTodo = () => {
    setTodoList((oldTodoList) => ({
      counter: oldTodoList.counter + 1,
      items: [
        ...oldTodoList.items,
        {
          title,
          id: oldTodoList.counter,
          done: false,
          pinned: false,
        },
      ],
    }));

    setTitle('');
  };

  return (
    <TodoNewInputWrapper>
      <TitleInput
        placeholder="할 일을 입력해 주세요"
        value={title}
        onChange={onChangeTitle}
      />
      <AddIcon onClick={addNewTodo}>
        <FaPlus />
      </AddIcon>
    </TodoNewInputWrapper>
  );
};

export default TodoNewInput;
