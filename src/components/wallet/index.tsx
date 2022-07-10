import { styled } from '@stitches/react';
import Chips from '../chips';

// import chips from './PokerChips.png';

interface IWallet {
  wallet: number;
}

const Div = styled('div', {
  marginTop: '15px',

  width: '300px',
  height: '60px',

  background: '#9756f7',

  display: 'flex',
  alignItems: 'center',

  borderRadius: '24px',

  '& > h1': {
    fontSize: '1.3em',
  },
});

function Wallet(props: IWallet) {
  return (
    <Div>
      <Chips></Chips>
      <h1>{props.wallet}</h1>
    </Div>
  );
}

export default Wallet;
