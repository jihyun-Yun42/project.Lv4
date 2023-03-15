import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../components/Button';
import { ColumnDisplay } from '../components/Etc';
import Input, { StyledInput } from '../components/Input';
import { useInput } from '../hooks/useInput';
import { __getHouse, __postHouse } from '../redux/modules/houseSlice';

function InputBox() {
  const house = {
    address: '',
    price: '',
    etc: '',
  };

  const [input, inputChange, handleSubmit] = useInput(house, __postHouse);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <ColumnDisplay style={{ alignItems: 'center' }}>
        <Input
          type="text"
          name="address"
          value={input.address}
          onChange={inputChange}
          placeholder="주소를 적어주세요"
        />
        <Input
          type="text"
          name="price"
          value={input.price}
          onChange={inputChange}
          placeholder="가격을 적어주세요"
        />
        <Input
          type="text"
          name="etc"
          value={input.etc}
          onChange={inputChange}
          placeholder="참고사항"
        />
        <Button type="submit">완료</Button>
      </ColumnDisplay>
    </form>
  );
}

export default InputBox;
