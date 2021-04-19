import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

//could use type rather than interface because it's not overwriting or extending
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...rest }: Props) => <Container {...rest}>{children}</Container>;

export default Button;
