import styled from 'styled-components';

interface PageTemplateWrapperProps {
  background: string;
}

const PageTemplateWrapper = styled.div<PageTemplateWrapperProps>`
  width: 100%;
  min-height: 100%;
  background: ${(props) => props.background};
  position: relative;
`;

const ContentWrapper = styled.div`
  min-height: 100vh;
`;

const Responsive = styled.div`
  width: 768px;
  min-height: inherit;
  margin: 0 auto;
`;

interface PageTemplateProps {
  background?: string;
  isResponsive?: boolean;
}

const PageTemplate: React.FC<PageTemplateProps> = (props) => {
  const { background = '#f9f9f9', isResponsive, children } = props;

  return (
    <PageTemplateWrapper background={background}>
      <ContentWrapper>
        {isResponsive ? <Responsive>{children}</Responsive> : children}
      </ContentWrapper>
    </PageTemplateWrapper>
  );
};

export default PageTemplate;
