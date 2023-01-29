import { CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

const CenteredContent = styled('div')(() => ({
  position: 'absolute',
  top: 'calc(50% - 25px)',
  left: 'calc(50% - 25px)',
  width: '50px',
  height: '50px',
}));

const JunoSpin = () => (
  <CenteredContent>
    <CircularProgress />
  </CenteredContent>
);

export default JunoSpin;
