import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback, useEffect } from "react";
import ReactMapGl, {
  NavigationControl,
  useControl,
  Marker,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
//geocoder
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder";
import Geocoder from "./Geocoder";
//atom
import { locationAnimalLostAtom } from "atoms/locationAnimalLostAtom";
import { locationAtom, selecLocation } from "atoms/locationAtom";
import { useRecoilState, useRecoilValue } from "recoil";
const MAPBOX_TOKEN =
  "pk.eyJ1IjoidG9iaWFzZmFjZWxsbyIsImEiOiJjbGFvdWY0aTEwZHd5M29zMGszemMyaG9zIn0.uTgMn_g1fHu0juGKyfa9FQ";

const MapboxComponent = () => {
  const [animalLost, setAnimalLost] = useRecoilState(locationAnimalLostAtom);
  const [location, setLocation] = useRecoilState(locationAtom);
  const locationpet = useRecoilValue(selecLocation);
  const [locateDogCat, setLocateDogCat] = useState({
    lng: locationpet.lng,
    lat: locationpet.lat,
  });
  const [viewport, setViewport] = useState({
    longitude: locationpet.lng,
    latitude: locationpet.lat,
    zoom: 12,
  });
  const imgIcon = require("../../img/icon-pets.png");
  const mapRef: any = useRef();
  ///////////////////////////////
  //este useEffect se engancha hasta que  locationpet.lat == 0 deje se ser 0...
  //aqui seteo el map para que tenga la ubicacion del user y seteo el marker con la ubicacion del user ,de esta manera inicializo con la ubicacion real del user
  useEffect(() => {
    const onUbicacionConcedida = (ubicacion) => {
      setLocation({
        lat: ubicacion.coords.latitude,
        lng: ubicacion.coords.longitude,
        id: +1,
      });
      if (location.lat !== 0) {
        mapRef.current.flyTo({ center: [location.lng, location.lat] });
      }
    };

    const onErrorDeUbicacion = (err) => {
      console.log("ya se obtubo la ubicacion y se desconecto");
    };

    const opcionesDeSolicitud = {
      enableHighAccuracy: true, // Alta precisión
      maximumAge: 0, // No queremos caché
      timeout: 10000, // Esperar solo 10 segundos
    };
    // Solicitar
    navigator.geolocation.getCurrentPosition(
      onUbicacionConcedida,
      onErrorDeUbicacion,
      opcionesDeSolicitud
    );
    setLocateDogCat({
      lng: locationpet.lng,
      lat: locationpet.lat,
    });
  }, [locationpet.lat == 0]);

  return (
    <div style={{ height: "100%" }}>
      <ReactMapGl
        ref={mapRef}
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          ...viewport,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        <NavigationControl position="bottom-right" />
        <Geocoder
          geo={(rec) => {
            setLocation(rec);
            console.log({ rec });
          }}
        />

        <Marker
          ///hacer un useeffect que se ejecute una ves para cargar la ubicacion de la mascota por primera vez asi se ve en la pantalla y luego se puede mover el icono
          key={locationpet.id}
          longitude={locateDogCat.lng}
          latitude={locateDogCat.lat}
          draggable
          onDragEnd={(e) => {
            setLocateDogCat({ lat: e.lngLat.lat, lng: e.lngLat.lng });
            setAnimalLost({ lat: e.lngLat.lat, lng: e.lngLat.lng });
            console.log({ locateDogCat });
          }}
        >
          <img
            style={{
              width: "50px",
              height: "50px",
            }}
            src={imgIcon}
          ></img>
        </Marker>
      </ReactMapGl>
    </div>
  );
};
export { MapboxComponent };
// //////////////
// import "mapbox-gl/dist/mapbox-gl.css";
// import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
// import React, { useState, useRef, useCallback } from "react";
// import ReactMapGl, {
//   NavigationControl,
//   useControl,
//   Marker,
// } from "react-map-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// //geocoder
// import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
// import "@mapbox/mapbox-gl-geocoder";
// import Geocoder from "./Geocoder";
// //atom location
// import { locationAtom, selecLocation } from "atoms/locationAtom";

// import { useRecoilState, useRecoilValue } from "recoil";
// const MAPBOX_TOKEN =
//   "pk.eyJ1IjoidG9iaWFzZmFjZWxsbyIsImEiOiJjbGFvdWY0aTEwZHd5M29zMGszemMyaG9zIn0.uTgMn_g1fHu0juGKyfa9FQ";

// const MapboxComponent = () => {
//   const [viewport, setViewport] = useState({
//     longitude: -60.6839,
//     latitude: -32.9518,
//     zoom: 12,
//   });
//   const [location, setLocation] = useRecoilState(locationAtom);
//   const locationpet = useRecoilValue(selecLocation);
//   const [markers, setMarkers] = useState([locationpet]);
//   return (
//     <div style={{ height: "100%" }}>
//       <ReactMapGl
//         mapboxAccessToken={MAPBOX_TOKEN}
//         initialViewState={{ ...viewport }}
//         mapStyle="mapbox://styles/mapbox/streets-v12"
//       >
//         <NavigationControl position="bottom-right" />
//         <Geocoder
//           geo={(rec) => {
//             setLocation(rec);
//           }}
//         />
//         {markers.map((marker) => (
//           <Marker
//             key={marker.id}
//             longitude={marker.lng}
//             latitude={marker.lat}
//             draggable
//             onDragEnd={(e) => {
//               console.log("lat:", e.lngLat.lat);
//               console.log("lng", e.lngLat.lng);
//               setLocation({ lat: e.lngLat.lat, lng: e.lngLat.lng, id: +1 });
//               console.log({ locationpet });
//             }}
//           >
//             <div>Mi mascota</div>
//           </Marker>
//         ))}
//       </ReactMapGl>
//     </div>
//   );
// };
// export { MapboxComponent };
