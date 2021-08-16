import { Suspense } from 'react';
import styled from 'styled-components';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

const TodoMainBackground = styled.div`
  width: 600px;
  min-height: 700px;
  padding: 30px;
  border-radius: 30px;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;

const Loading = styled.div`
  margin-top: 45%;
  font-size: 25px;
  font-style: italic;
  text-align: center;
`;

const TodoMain: React.FC = () => {
  return (
    <TodoMainBackground>
      <Suspense fallback={<Loading>로딩 중 입니다...</Loading>}>
        <TodoHeader />
        <TodoList />
      </Suspense>
    </TodoMainBackground>
  );
};

export default TodoMain;
