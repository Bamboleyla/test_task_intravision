import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { CreateNewApplication } from "./CreateNewApplication";

// Шаблон для отправки новой заявки через api
let applicationTemplate = {
  name: "string",
  description: "string",
  comment: "string",
  price: 0,
  taskTypeId: 0,
  statusId: 0,
  priorityId: 0,
  serviceId: 0,
  resolutionDatePlan: "2022-02-12T16:08:20.268Z",
  tags: [104383],
  initiatorId: 0,
  executorId: 0,
  executorGroupId: 0,
};

const CreateNewApplicationContainer = (props) => {
  //Создаем локальный state для хранения текста из новой заявки
  let [textName, setTextName] = useState(""); //Текст названия
  let [textDiscription, setTextDiscription] = useState(""); //Текст описания

  const changeName = (text) => {
    setTextName(text);
  }; //Вносит изменения в название заявки
  const changeDiscription = (text) => {
    setTextDiscription(text);
  }; //Вносит изменения в описание заявки
  const send = () => {
    applicationTemplate.name = textName;
    applicationTemplate.description = textDiscription;
    props.getApplicationID(applicationTemplate);
    props.navigate("../edit", { replace: true });
  };
  return (
    <div>
      <Outlet />
      <CreateNewApplication
        name={changeName}
        discription={changeDiscription}
        send={send}
      />
    </div>
  );
};

export const CreateNewApplicationWithNavigate = (props) => {
  let navigate = useNavigate();
  return (
    <CreateNewApplicationContainer
      navigate={navigate}
      getApplicationID={props.getApplicationID}
    />
  );
};
