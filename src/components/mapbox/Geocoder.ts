import React from "react";
import ReactMapGl, { NavigationControl, useControl } from "react-map-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoidG9iaWFzZmFjZWxsbyIsImEiOiJjbGFvdWY0aTEwZHd5M29zMGszemMyaG9zIn0.uTgMn_g1fHu0juGKyfa9FQ";

const Geocoder = (geoLocationSeach) => {
  //geocoder
  const Cntl = new MapboxGeocoder({
    accessToken: MAPBOX_TOKEN,
    marker: false,
    collapsed: true,
  });
  useControl(() => Cntl);
  Cntl.on("result", (e) => {
    const coords = e.result.geometry.coordinates;

    console.log({ locationGeocode: coords });
    geoLocationSeach = { lat: coords[1], lng: coords[1], id: +1 };
  });
  return null;
};

export default Geocoder;
