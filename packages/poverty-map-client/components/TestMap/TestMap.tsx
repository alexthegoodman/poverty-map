import * as React from "react";

import { TestMapProps } from "./TestMap.d";

import ReactMapboxGl, {
  Layer,
  Feature,
  Marker,
  Image,
  GeoJSONLayer,
} from "react-mapbox-gl";
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
            maxHeight: 450,
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

          <GeoJSONLayer
            data={"/countries.geojson"}
            symbolLayout={{
              "text-field": "{place}",
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 0.6],
              "text-anchor": "top",
            }}
          />

          {/* <Layer
            type="raster"
            id="marker"
            layout={{ "icon-image": "image-uid" }}
          >
            <Feature coordinates={[42.9758128, -85.4065152]}>
              <Image
                id="image-uid"
                url="https://via.placeholder.com/250"
                // options={{
                //   content: [16, 16, 300, 384],
                // }}
              ></Image>
            </Feature>
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
