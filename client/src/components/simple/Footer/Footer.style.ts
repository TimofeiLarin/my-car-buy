import styled from 'styled-components';

export const FooterColor = styled.header`
  background-color: ${(props) => props.theme.colors.gray};
`;

export const FooterText = styled.p`
  padding: 30px 0;
  color: ${(props) => props.theme.colors.otherText}
`;