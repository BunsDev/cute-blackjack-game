import { styled } from '@stitches/react';
import catAvatar from './catArt.png';

const CatAvatar = styled('div', {
  width: '400px',
  height: '400px',

  background: `url(${catAvatar})`,
});

function Cat() {
  return <CatAvatar></CatAvatar>;
}

export default Cat;
