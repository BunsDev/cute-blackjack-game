import { styled } from '@stitches/react';
import catAvatar from './catArt.png';

const CatAvatar = styled('div', {
  width: '200px',
  height: '200px',

  background: `url(${catAvatar})`,
});

function Cat() {
  return <CatAvatar></CatAvatar>;
}

export default Cat;
