import styled from 'styled-components';
import TodoNewInput from './TodoNewInput';

const TodoHeaderWrapper = styled.div`
  width: 70%;
  margin: 15px auto 40px;
`;

interface TodoHeaderProps {
  addNewTodo: (title: string) => void;
}

const TodoHeader: React.FC<TodoHeaderProps> = (props) => {
  const { addNewTodo } = props;

  return (
    <TodoHeaderWrapper>
      <TodoNewInput addNewTodo={addNewTodo} />
    </TodoHeaderWrapper>
  );
};

export default TodoHeader;
