import React from "react";
import GoogleMapReact from "google-map-react";

interface MarkerProps {
  lat: number;
  lng: number;
  text: string;
}

const AnyReactComponent: React.FC<MarkerProps> = ({ text }) => (
  <div>{text}</div>
);

export default function Map() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC3mZg6P7r2AzeOdm4X1QTmHora9Zs3fGQ" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={10.99835602}
          lng={77.01502627}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
