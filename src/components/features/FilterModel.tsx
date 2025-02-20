import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import BasicTextFields from '../../ui/BasicTextFields';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { toggling } from '../../store/slices/toggleSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function FilterModel() {
  const toggle = useAppSelector((state) => state.toggle.toggleModal);
  const dispatch = useAppDispatch();
  // const handleOpen = () => setOpen(true);
  const handleOpen = () => dispatch(toggling());
  // const handleClose = () => setOpen(false);
  const handleClose = () => dispatch(toggling());

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
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
