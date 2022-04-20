import * as React from "react";

import { TestMapProps } from "./TestMap.d";

import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import useEffect from "react";

// TODO: Create on useEffect?
const MapInstance = ReactMapboxGl({
  accessToken: process.env.PUBLIC_SAFE__MAPBOX_TOKEN
    ? process.env.PUBLIC_SAFE__MAPBOX_TOKEN
    : "",
});

const TestMap: React.FC<TestMapProps> = ({ data = null }) => {
  console.info("map data", data);
  return (
    <>
      {MapInstance ? (
        <MapInstance
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "100%",
            width: "100%",
          }}
          zoom={[2]}
          center={data[0] ? [data[0].coords.lat, data[0].coords.lng] : [0, 0]}
        >
          {data.map((entity: any, index: number) => {
            return (
              <Marker
                key={`feature-${index}`}
                coordinates={[entity.coords.lat, entity.coords.lng]}
                anchor="bottom"
                style={{
                  display: "block",
                  width: "10px",
                  height: "10px",
                  backgroundColor: "red",
                }}
                // tabIndex
              >
                <div
                  style={{
                    display: "block",
                    width: "10px",
                    height: "10px",
                    backgroundColor: "red",
                    zIndex: 1000,
                  }}
                >
                  <span>{entity.metricB}</span>
                </div>
              </Marker>
            );
          })}

          {/* <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}
          >
            
          </Layer> */}

          {/* <Layer
            id="3d-buildings"
            sourceId="composite"
            sourceLayer="building"
            filter={['==', 'extrude', 'true']}
            type="fill-extrusion"
            minZoom={14}
            paint={paintLayer}
          /> */}
        </MapInstance>
      ) : (
        <></>
      )}
    </>
  );
};

export default TestMap;
