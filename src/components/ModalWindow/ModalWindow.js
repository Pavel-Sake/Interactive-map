import React, {useState, useRef} from "react";
import Modal from 'react-modal';
import './ModalWindow.css';

Modal.setAppElement('#root');


function ModalWindow({isOpen, name, closeModal, data, resultsForLevel}) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: "50rem",
      radius: "8px"

    },
  };

  const [level, setLevel] = useState("g");

  function handleOnchange(event, key) {
    setLevel(key);
  }

  function FilterLevel({resultsForLevel}) {
    return (
      <ul
        className="modal-window__filter"
      >
        {resultsForLevel.map((item, index) => {
          let checked = false;
          if (item.key === level) {
            checked = true;
          }
          return (
            <li
              key={index}>
              <input
                id={`${item.key}modal`}
                type="radio"
                checked={checked}
                onChange={(event) => {
                  handleOnchange(event, item.key);
                }}
              />
              <label htmlFor={`${item.key}modal`}>{item.value}</label>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className="modal-window">
        <h1
          className="modal-window__title"
        >{name}</h1>
        <div
          className="modal-window__content"
        >
          <div className="modal-window__column1">

            <div className="modal-window__cell">
              <h3>Порядок и правила посещения</h3>
              <FilterLevel
                resultsForLevel={resultsForLevel}
              />
              <div>{data.conditions[level.toUpperCase()]}</div>
              <a href={data.rules}>Просим ознакомиться с правилами и режимом предоставления услуг.</a>
            </div>

            <div>
              <h3>О заведении</h3>
              <div>{data.info}</div>
            </div>

            <div>
              <h3>Услуги</h3>
            </div>

            <div>
              <h3>Дополнительные услуги</h3>
              <div
                className="services"
              >{data.tags.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="services-item"
                  >{item}</div>
                );
              })}
              </div>
            </div>

          </div>

          <div className="modal-window__column2">

            <div>
              <h3>Контакты</h3>
              <h5>Адрес:</h5>
              <a href="#">{data.address}</a>

              <h5>Телефон:</h5>
              {data.phone.map((phone, index) => {
                return (<a href="#" key={index}>{phone}</a>)
              })}

              <h5>Сайт:</h5>
              <a href={data.url}> {data.url}</a>

            </div>

            <div>
              <h3>Время работы объекта *</h3>
              <div>{data.mon}</div>
              <div>{data.tue}</div>
              <div>{data.wed}</div>
              <div>{data.thu}</div>
              <div>{data.fri}</div>
              <div>{data.sat}</div>
              <div>{data.sun}</div>
              <div>{data.week}</div>
            </div>

            <p>* В расписании объекта могут быть изменения. Актуальная информация на сайте объекта/по телефону.</p>
            <p>* Обновлено 7/1/2021</p>

          </div>
        </div>
      </div>

    </Modal>
  );
}

export default ModalWindow;


