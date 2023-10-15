import { useRouter, usePathname } from 'next/navigation';
import { ManagedUIContext } from 'src/components/ui/context';
import { useUI } from 'src/components/ui/context';
import { Modal } from 'src/components/ui';
import { DailySchedule } from 'src/components/schedule';

function ModalView({
  modalView,
  closeModal,
}: {
  modalView: string;
  closeModal: () => void;
}) {
  return (
    <Modal onClose={closeModal}>
      {modalView === 'SCHEDULE_VIEW' && <DailySchedule />}
    </Modal>
  );
}

function ModalUI() {
  const router = useRouter();
  const pathname = usePathname();
  const { displayModal, closeModal, modalView } = useUI();

  const handleCloseModal = () => {
    if (modalView === 'SCHEDULE_VIEW') {
      router.push(pathname);
    }
    closeModal();
  };

  return displayModal ? (
    <ModalView
      modalView={modalView}
      closeModal={handleCloseModal}
    />
  ) : null;
}

export default function UIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ManagedUIContext>
      <ModalUI />
      {children}
    </ManagedUIContext>
  );
}
