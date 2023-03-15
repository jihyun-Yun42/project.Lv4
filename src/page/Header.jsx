import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';
import WriteBox from './WriteBox';
import { ModalBackGround, ModalBody } from '../components/Modal';

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Head>
      <Button onClick={() => setOpen(!open)}>{open ? '닫기' : '글적기'}</Button>
      {open && <WriteBox />}
    </Head>
  );
}

const Head = styled.div`
  height: auto;
`;
export default Header;
