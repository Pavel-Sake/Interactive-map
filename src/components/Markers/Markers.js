import React, {useState} from "react";
import {Marker, Popup, Tooltip} from 'react-leaflet';
import {Icon} from "leaflet";
import ModalWindow from "../ModalWindow";

import icon from '../../assets/marker.svg';


const markerIcon = new Icon({
  iconUrl: icon,
  iconSize: [25, 25]
});


function Markers({results, resultsForLevel}) {
  const [modalIsOpen, setIsOpen] = useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <React.Fragment>
      {
        results.map((item, index) => {
            return (
              <Marker
                key={index} position={[item.lat, item.lng]}
                icon={markerIcon}
              >
                <Popup
                  onOpen={() => {
                    openModal();
                  }}
                >
                  <ModalWindow
                    name={item.name}
                    isOpen={modalIsOpen}
                    closeModal={closeModal}
                    data={item}
                    resultsForLevel={resultsForLevel}
                  />
                </Popup>
                <Tooltip>{item.name}</Tooltip>
              </Marker>
            );
          },
        )
      }
    </React.Fragment>
  );
}


export default Markers;