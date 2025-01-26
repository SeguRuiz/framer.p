import React from "react";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Box } from "@mui/material";

const Mapa = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();

 
  useEffect(() => {
    if (mapContainerRef.current) {
      mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style:"mapbox://styles/mapbox/streets-v11",
        center: [-84.86459798912047, 10.182045912155333],
        zoom: 17,
        border: "solid 2px #ffffff",
        padding: "5px",
        heigt: "400px",
        with: "100%",
        
        
      });

      //empieza perimetro

      mapRef.current.on("load", () => {
        mapRef.current.addSource("maine", {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "Polygon",
              // These coordinates outline Maine.
              coordinates: [
                [
                  [-84.86571109487723, 10.182238378065382],
                  [-84.86231797808368, 10.18232850351062],
                  [-84.85911379823212, 10.180602255063263],
                  [-84.86267774564597, 10.179362891443638],
                  [-84.86421800052199, 10.179639535526086],
                  [-84.86571109487723, 10.182238378065382],
                ],
              ],
            },
          },
        });

        mapRef.current.addLayer({
          id: "maine",
          type: "fill",
          source: "maine",
          layout: {},
          paint: {
            "fill-color": "#0080ff",
            "fill-opacity": 0.5,
          },
        });

        mapRef.current.addLayer({
          id: "outline",
          type: "line",
          source: "maine",
          layout: {},
          paint: {
            "line-color": "#000",
            "line-width": 3,
          },
        });
      });

      //termina perimetro

      const marker1 = new mapboxgl.Marker({ color: "red" })
        .setLngLat([-84.86459798912047, 10.182045912155333])
        .addTo(mapRef.current);

      const marker2 = new mapboxgl.Marker({ color: "blue" })
        .setLngLat([-84.86469798912047, 10.182145912155333])
        .addTo(mapRef.current);

      return () => {
        mapRef.current.remove();
      };
    }
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <div
        ref={mapContainerRef}
        style={{ width: "600px", height: "400px" }}
        className="map-container"
      />
    </Box>
  );
};

export default Mapa;
