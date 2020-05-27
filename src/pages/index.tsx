import styled from 'styled-components';
import { wrapPage } from '../enhancers/wrapPage';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const HomeBase = ({ className }: { className?: string }) => {
  return <Title className={className}>My page</Title>;
};

export default wrapPage(
  HomeBase,
  `
    display: block; 
    color: blue; 
    width: 100%; 
    background-color: black;
  `,
  {
    appLayout: {
      showFooter: false,
    },
  },
);
