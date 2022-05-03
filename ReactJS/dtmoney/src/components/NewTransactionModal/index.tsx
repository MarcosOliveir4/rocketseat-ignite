import Modal from "react-modal";

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
    >
      <h2>Cadastrar transação</h2>
    </Modal>
  );
};
