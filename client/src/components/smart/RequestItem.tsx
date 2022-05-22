import React from 'react';

import { IRequest } from '../../models/IRequest';



const RequestItem: React.FC<IRequest> = ({id, auto, date, status}) => {
  const {brand, model} = auto;
  const {name} = model;
  return (
    <div>
      <img src="" alt="" />
      <div>
        <div>
          Заявка №{id} на автомобиль {brand} {name}
        </div>
        <div>Статус: {status.code}</div>
        <div>Дата: {date}</div>
      </div>
    </div>
  );
};

export default RequestItem;
