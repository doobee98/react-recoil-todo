import styled from 'styled-components';
import TodoNewInput from './TodoNewInput';

const TodoHeaderWrapper = styled.div`
  width: 70%;
  margin: 15px auto 40px;
`;

const TodoHeader: React.FC = () => {
  return (
    <TodoHeaderWrapper>
      <TodoNewInput />
    </TodoHeaderWrapper>
  );
};

export default TodoHeader;
