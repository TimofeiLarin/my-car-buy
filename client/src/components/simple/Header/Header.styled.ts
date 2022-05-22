import styled from 'styled-components';

export const HeaderColor = styled.header`
  background-color: ${(props) => props.theme.colors.gray};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
`;

export const HeaderTitle = styled.h2`
  margin-left: 20px;
  font-size: 22px;
  font-weight: 400;
`;