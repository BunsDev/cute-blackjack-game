import { styled } from '@stitches/react';
import standIcon from './standIcon.svg';

interface IStandButton {
  onClick?: () => void;
}

const Button = styled('button', {
  border: 'none',
  borderRadius: '50px',

  width: '70px',
  height: '70px',

  backgroundColor: '#8d65df',

  fontSize: '1.3em',

  transition: 'background-color 200ms ease-in-out',

  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '#c897f5',
  },

  '& > img': {
    width: '30px',
  },
});

function StandButton(props: IStandButton) {
  return (
    <Button onClick={props.onClick}>
      <img src={standIcon} alt="" />
    </Button>
  );
}

export default StandButton;
