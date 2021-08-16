import styled from 'styled-components';
import PageTemplate from 'components/PageTemplate';
import TodoMain from 'components/TodoMain';

const TodoWrapper = styled.div`
  min-height: inherit;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoPage: React.FC = () => {
  return (
    <PageTemplate isResponsive>
      <TodoWrapper>
        <TodoMain />
      </TodoWrapper>
    </PageTemplate>
  );
};

export default TodoPage;
