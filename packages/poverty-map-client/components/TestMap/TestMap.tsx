import * as React from "react";

import { TestMapProps } from "./TestMap.d";

import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import useEffect from "react";

// TODO: Create on useEffect?
const MapInstance = ReactMapboxGl({
  accessToken: process.env.PUBLIC_SAFE__MAPBOX_TOKEN
    ? process.env.PUBLIC_SAFE__MAPBOX_TOKEN
    : "",
});

const TestMap: React.FC<TestMapProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click TestMap"),
}) => {
  return (
    <>
      {MapInstance ? (
        <MapInstance
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "100%",
            width: "100%",
          }}
        >
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}
          >
            <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
          </Layer>
        </MapInstance>
      ) : (
        <></>
      )}
    </>
  );
};

export default TestMap;
