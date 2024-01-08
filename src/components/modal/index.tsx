import { Container, ModalWrapper } from "./style";

export const Modal = ({ children }: { children: any }) => {
  return (
    <ModalWrapper>
      <Container>{children}</Container>
    </ModalWrapper>
  );
};
