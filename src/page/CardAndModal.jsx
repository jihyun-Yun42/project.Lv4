import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import { ModalBackGround, ModalBody } from '../components/Modal';
import { useInput } from '../hooks/useInput';
import { __deleteHouse, __editHouse } from '../redux/modules/houseSlice';

function CardAndModal({ item }) {
  const [openModal, setOpenModal] = useState(false);
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();

  const deleteBtnHandler = (id) => {
    dispatch(__deleteHouse(id));
    setOpenModal(!openModal);
  };

  const editBtnHandler = () => {
    setEdit(() => !edit);
  };
  const [input, inputChange, handleSubmit] = useInput(item, __editHouse);

  return (
    <>
      <Card onClick={() => setOpenModal(!openModal)}>
        {item.address}
        <Button onClick={() => deleteBtnHandler(item.id)}>삭제</Button>
      </Card>

      {openModal && (
        <>
          <ModalBackGround onClick={() => setOpenModal(!openModal)} />
          <ModalBody>
            {!edit ? (
              <>
                <h1>{item.address}</h1>
                <p>{item.price}</p>
                <p>{item.etc}</p>
                <Button onClick={() => deleteBtnHandler(item.id)}>삭제</Button>
                <Button onClick={editBtnHandler}>수정</Button>
              </>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                  setEdit(!edit);
                }}
              >
                주소 :
                <Input
                  type="text"
                  name="address"
                  value={input.address}
                  onChange={inputChange}
                  placeholder="주소를 적어주세요"
                />
                <br />
                가격 :
                <Input
                  type="text"
                  name="price"
                  value={input.price}
                  onChange={inputChange}
                  placeholder="가격을 적어주세요"
                />
                <br />
                참고사항 :
                <Input
                  type="text"
                  name="etc"
                  value={input.etc}
                  onChange={inputChange}
                  placeholder="참고사항"
                />
                <br />
                <Button type="submit">수정완료</Button>
              </form>
            )}
          </ModalBody>
        </>
      )}
    </>
  );
}

export default CardAndModal;
