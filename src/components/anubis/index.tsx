import { styled } from '@stitches/react';
import anubisAvatar from './anubisArt.png';

const AnubisAvatar = styled('div', {
  width: '128px',
  height: '163px',

  background: `url(${anubisAvatar})`,
});

function Anubis() {
  return <AnubisAvatar></AnubisAvatar>;
}

export default Anubis;
