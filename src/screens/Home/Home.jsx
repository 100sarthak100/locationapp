import React from "react";
import { useGeolocated } from "react-geolocated";

const Home = () => {
  const onSuccess = () => {
    console.log("onSuccess")
  };

  const onError = () => {
    console.log("onError")
  };

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity,
      },
      watchPosition: true,
      userDecisionTimeout: null,
      suppressLocationOnMount: false,
      geolocationProvider: navigator.geolocation,
      isOptimisticGeolocationEnabled: true,
      watchLocationPermissionChange: false,
      onError,
      onSuccess,
    });

  console.log("coords", coords);

  return (
    <div>
      <h1>latitude: {coords?.latitude}</h1>
      <h1>longitude: {coords?.longitude}</h1>
      <h1>accuracy: {coords?.accuracy}</h1>
      <h1>heading: {coords?.heading}</h1>
    </div>
  );
};

export default Home;
