import React, { useCallback, useEffect, useRef } from 'react';
import Script from 'next/script';

const Map = ({
  mapId = 'map',
  initialCenter = [37.5665, 126.978], // 서울 기본 좌표
  initialZoom = 10,
  onLoad,
}) => {
  const mapRef = useRef(null);
  const scriptLoadedRef = useRef(false);

  const initializeMap = () => {
    // Script가 로드되었음을 표시
    scriptLoadedRef.current = true;
    createMap();
  };

  const createMap = useCallback(() => {
    // 이미 맵이 존재하면 제거
    if (mapRef.current) {
      mapRef.current.destroy();
      mapRef.current = null;
    }

    // window.naver가 존재하고 DOM 엘리먼트가 존재할 때만 맵 생성
    if (window.naver && document.getElementById(mapId)) {
      const mapOptions = {
        center: new window.naver.maps.LatLng(...initialCenter),
        zoom: initialZoom,
        minZoom: 9,
        scaleControl: false,
        mapDataControl: false,
        logoControlOptions: {
          position: window.naver.maps.Position.BOTTOM_LEFT,
        },
      };

      const map = new window.naver.maps.Map(mapId, mapOptions);
      mapRef.current = map;

      if (onLoad) {
        onLoad(map);
      }
    }
  }, [mapId, initialCenter, initialZoom, onLoad]);

  useEffect(() => {
    // 스크립트가 이미 로드되어 있다면 맵 생성
    if (scriptLoadedRef.current) {
      createMap();
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.destroy();
        mapRef.current = null;
      }
    };
  }, [createMap]); // 빈 의존성 배열

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
        onReady={initializeMap}
      />
      <div id={mapId} className="w-full h-full z-0" />
    </>
  );
};

export default Map;
