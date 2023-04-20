import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  /* min-height: calc(100vh - 50px); */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WelcomeField = styled.div`
  width: 900px;
  height: 500px;

  padding: 20px;
  background: #c1d3e0;
  border-radius: 5px;
  box-shadow: -6px -6px 14px rgba(252, 253, 253, 0.8),
    -6px -6px 10px rgba(253, 253, 253, 0.2), 6px 6px 8px rgba(69, 68, 68, 0.075),
    6px 6px 10px rgba(0, 0, 0, 0.15);
`;
