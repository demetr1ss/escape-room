import * as S from './map.styled';
import useMap from 'hooks/useMap';
import iconPin from 'assets/img/icon-blip.svg';
import { Icon, LayerGroup, Marker } from 'leaflet';
import { useEffect, useRef } from 'react';
import { LocationSetting } from 'const/const';
import 'leaflet/dist/leaflet.css';

const icon = new Icon({
  iconUrl: iconPin,
  iconAnchor: [28, 70]
});

export default function Map()
  : JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, LocationSetting);

  useEffect(() => {
    const { lat, lng } = LocationSetting;

    if (map) {
      const layerGroup = new LayerGroup();
      const marker = new Marker({
        lat,
        lng
      });

      marker
        .setIcon(icon)
        .addTo(layerGroup);

      layerGroup.addTo(map);

    }
  }, [map]);

  return <S.ContactsMap ref={mapRef}/>;
}
