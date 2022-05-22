import styled from 'styled-components';

const Button = styled.button`
  padding: 15px 10px;
  font-size: 18px;
  border: none;
  color: ${(props) => props.theme.colors.lightText};
  background-color: ${(props) => props.theme.colors.colorBtn};
`;

export default Button;