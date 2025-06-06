
import { ButtonContainer } from "./style";

const Button = ({ label, onClick, flex }) => {
  return (
    <ButtonContainer onClick={onClick} flex={flex}>
      {label}
    </ButtonContainer>
  );
};

export default Button;
