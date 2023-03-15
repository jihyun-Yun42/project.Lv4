import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { __deleteHouse, __getHouse } from '../redux/modules/houseSlice';
import CardAndModal from './CardAndModal';

function Cards() {
  const house = useSelector((state) => state.house.house);
  const realHouse = JSON.stringify([...house]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getHouse());
  }, [realHouse]);

  return (
    <CardsBody>
      {house.map((item) => (
        <div key={item.id}>
          <CardAndModal item={item} />
        </div>
      ))}
    </CardsBody>
  );
}

export const CardsBody = styled.div`
  overflow-y: auto;
  height: 1080px;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  gap: 30px;
  margin-top: 50px;
`;
export default Cards;
