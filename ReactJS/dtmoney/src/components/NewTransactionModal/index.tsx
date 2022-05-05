import Modal from "react-modal";
import { Container } from "./styles";

interface NewTransactionModalProps {
  isNewTransactionModalOpen: boolean;
  handleCloseNewTransactionModal: () => void;
}

export const NewTransactionModal = ({
  isNewTransactionModalOpen,
  handleCloseNewTransactionModal,
}: NewTransactionModalProps) => {
  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
