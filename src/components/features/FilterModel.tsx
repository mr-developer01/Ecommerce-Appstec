import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import BasicTextFields from '../../ui/BasicTextFields';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { toggling } from '../../store/slices/toggleSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

export default function FilterModel() {
  const toggle = useAppSelector((state) => state.toggle.toggleModal);
  const dispatch = useAppDispatch();
  const handleClose = () => dispatch(toggling());

  return (
    <div>
      <Modal
        open={toggle}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <BasicTextFields />
        </Box>
      </Modal>
    </div>
  );
}
