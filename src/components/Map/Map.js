import React from "react";
import {MapContainer, TileLayer, LayersControl} from 'react-leaflet';
import {useSelector} from 'react-redux';

import Markers from "../Markers/Markers";


function Map({results, resultsForLevel}) {

  const filter = useSelector((state) => {
    return state;
  });


  const position = [filter.city.cityLat, filter.city.cityLng];
  const zoom = filter.city.cityZoom;

  return (
    <MapContainer
      className='map'
      center={position}
      zoom={zoom}
      scrollWheelZoom={true}
      closePopupOnClick={'1'}
    >
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="локально">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Черно Белая">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <Markers
          results={results}
          resultsForLevel={resultsForLevel}
        />
      </LayersControl>
    </MapContainer>
  );
}


export default Map;