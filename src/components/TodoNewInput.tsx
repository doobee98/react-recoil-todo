import { FaPlus } from 'react-icons/fa';
import styled from 'styled-components';
import useInput from 'hooks/useInput';

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

interface TodoNewInputProps {
  addNewTodo: (title: string) => void;
}

const TodoNewInput: React.FC<TodoNewInputProps> = (props) => {
  const { addNewTodo } = props;
  const [title, onChangeTitle, setTitle] = useInput();

  const addTodo = () => {
    addNewTodo(title);
    setTitle('');
  };

  return (
    <TodoNewInputWrapper>
      <TitleInput
        placeholder="할 일을 입력해 주세요"
        value={title}
        onChange={onChangeTitle}
      />
      <AddIcon onClick={addTodo}>
        <FaPlus />
      </AddIcon>
    </TodoNewInputWrapper>
  );
};

export default TodoNewInput;
