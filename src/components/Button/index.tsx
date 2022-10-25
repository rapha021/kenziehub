import { Container } from "./style"

export interface IButtonProps {
  color?: string
  size?: string
  text?: string
}

const Button = ({ color, size, text }: IButtonProps) => {
  return (
    <Container color={color} size={size}>
      {text}
    </Container>
  )
}

export default Button
