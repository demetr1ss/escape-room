import { Map, TileLayer } from 'leaflet';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { LocationSettingType } from '../types/types';

const TileLayerSetting = {
  Url: 'https://tile.jawg.io/29936624-dcc1-4dea-8432-ee1b96c13d66/{z}/{x}/{y}{r}.png?access-token=Bg8KJU3TOwwvS9GXChrWr8ahgMRQXFN4k9UFsLF0acsR07lM9LZKLdkkes4ZDLzd',
  Attribution:`&copy; <a href="https://www.openstreetmap.org/copyright">
OpenStreetMap</a> contributors &copy; <a href="https://www.jawg.io" target=_blank>Jawg</a>`,
};

export default function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: LocationSettingType
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng,
        },
        zoom: city.zoom
      });

      const layer = new TileLayer(
        TileLayerSetting.Url,
        {
          attribution: TileLayerSetting.Attribution
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, map, city]);

  return map;
}
