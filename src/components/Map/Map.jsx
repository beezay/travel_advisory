import { useMediaQuery } from "@material-ui/core";
import GoogleMapReact from "google-map-react";
import React from "react";

import useStyles from "./styles.js";
const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAFVVrgIP30_USazG5rHqckr-ztlcE6ZA8" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChildClick={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({
            ne: e.marginBounds.ne,
            sw: e.marginBounds.sw,
          });
        }}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
