'use client';

import { useEffect, useState, useRef } from 'react';

export default function KakaoMap({ exhibitionsData, onMarkerClick }) {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapRef = useRef(null);
  const currentInfoWindowRef = useRef(null);

  useEffect(() => {
    const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
    if (!KAKAO_API_KEY || typeof window === 'undefined') return;

    const existingScript = document.querySelector(
      `script[src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&libraries=services&autoload=false"]`
    );

    if (existingScript) {
      if (window.kakao && window.kakao.maps) {
        if (window.kakao.maps.services) {
          setIsMapLoaded(true);
        } else {
          window.kakao.maps.load(() => {
            setIsMapLoaded(true);
          });
        }
      } else {
        if (window.kakao) {
          window.kakao.maps.load(() => {
            setIsMapLoaded(true);
          });
        }
      }
      return;
    }

    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&libraries=services&autoload=false`;
    script.async = true;

    script.onload = () => {
      if (window.kakao) {
        window.kakao.maps.load(() => {
          setIsMapLoaded(true);
        });
      }
    };

    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (!isMapLoaded || !exhibitionsData || exhibitionsData.length === 0 || mapRef.current) return;

    try {
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new window.kakao.maps.LatLng(37.52, 126.978),
        level: 9,
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOption);
      mapRef.current = map;

      const geocoder = new window.kakao.maps.services.Geocoder();

      exhibitionsData.forEach((exhibition) => {
        if (exhibition.details?.location?.address) {
          const address = exhibition.details.location.address;

          geocoder.addressSearch(address, (result, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
                title: exhibition.title,
              });

              const content = `
                <div style="padding:8px;width:200px;">
                  <div style="font-weight:bold;font-size:13px;">${exhibition.title}</div>
                  <div style="font-size:11px;color:#555;margin-top:3px;">${exhibition.details.location.name}</div>
                  <div style="font-size:11px;color:#888;margin-top:2px;">${address}</div>
                </div>
              `;

              const infowindow = new window.kakao.maps.InfoWindow({
                content: content,
              });

              window.kakao.maps.event.addListener(marker, 'click', function () {
                if (currentInfoWindowRef.current) {
                  currentInfoWindowRef.current.close();
                }

                infowindow.open(map, marker);

                currentInfoWindowRef.current = infowindow;

                if (onMarkerClick) {
                  onMarkerClick(exhibition.id);
                }
              });
            }
          });
        }
      });

      window.kakao.maps.event.addListener(map, 'click', function () {
        if (currentInfoWindowRef.current) {
          currentInfoWindowRef.current.close();
          currentInfoWindowRef.current = null;
        }
      });
    } catch (error) {
      console.error('지도 오류');
    }
  }, [isMapLoaded, exhibitionsData, onMarkerClick]);

  return <div id="map" style={{ width: '100%', height: '100%' }} />;
}
