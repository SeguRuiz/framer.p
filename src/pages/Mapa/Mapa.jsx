import React, { useState } from "react";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Box } from "@mui/material";
import { getCookie } from "../../utils/cookies.js";
import GetUsuarios, {
  GetUsuario,
} from "../../services/Usuarios/GetUsuarios.jsx";
import GetFincas from "../../dashboard/Services/GetFincas.jsx";
import GetAnimales from "../../dashboard/services/GetAnimales.jsx";

const Mapa = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const [fincas, setFincas] = useState([]);
  const [user, setUser] = useState();
  const [area, setArea] = useState({});
  const [listaAnimalesConcat, setListaAnimalesConcat] = useState([]);

  console.log(fincas);

  useEffect(() => {
    EstableciendoInformacionFinca();
  }, []);
  useEffect(() => {
    recorriendoMapa();
  }, [fincas]);

  function recorriendoMapa() {
    if (mapContainerRef.current) {
      mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-84.86459798912047, 10.182045912155333],
        zoom: 15,
      });

      mapRef.current.on("load", () => {
        console.log("ver contenido1 " + fincas[0]);
        console.log("ver contenido2 " + fincas[1]);
        console.log("ver tipo " + typeof fincas);
        console.log("ver tipo2", Array.isArray(fincas));
        //empieza perimetro----------------------------------------------------------------------------------

        fincas.forEach((area) => {
          console.log(area, "area dentro del mapa");

          mapRef.current.addSource(`${area.id}-source`, {
            type: "geojson",
            data: {
              type: "Feature",
              geometry: {
                type: "Polygon",
                coordinates: [area.coordinates],
              },
              area,
            },
          });

          mapRef.current.addLayer({
            id: `${area.id}-paint`,
            type: "fill",
            source: `${area.id}-source`,
            layout: {},
            paint: {
              "fill-color": "#0080ff",
              "fill-opacity": 0.5,
            },
          });

          mapRef.current.addLayer({
            id: `${area.id}-outline`,
            type: "line",
            source: `${area.id}-source`,
            layout: {},
            paint: {
              "line-color": "#000",
              "line-width": 3,
            },
          });
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
  }

  async function EstableciendoInformacionFinca() {
    try {
      const userInfo = atob(getCookie("data"));
      const usuario = await GetUsuario(userInfo);

      if (usuario[0] === 200) {
        const fincasUsuario = usuario[1].FINCAS;
        setUser(usuario[1]);

        const areas = [];

        // Revisamos si ya hemos solicitado la finca antes de agregarla
        const seenFincas = new Set();
        const listaDeAnimales = [];
        let conjuntoDeAnimales = [];
        let safetyCounter = 0;
        for (const fincaId of Object.values(fincasUsuario)) {
          if (!seenFincas.has(fincaId)) {
            const solicitudFinca = await GetFincas(fincaId);
            const fincaData = solicitudFinca[safetyCounter];
            console.log(fincaData, "viendo que sale de finca data");
            console.log(safetyCounter);

            areas.push({
              id: fincaData.id,
              coordinates: fincaData.UBICACION,
            });
            
            listaDeAnimales.push(fincaData.ANIMALES);
            seenFincas.add(fincaId); // Marcamos esta finca como solicitada
            safetyCounter++;
          } else {
            console.log(`Finca ya solicitada: ${fincaId}`);
          }
        }
        conjuntoDeAnimales = listaDeAnimales.flat();
        for (const animalID of conjuntoDeAnimales) {
          const InfoAnimales = await GetAnimales(animalID);
          console.log(InfoAnimales);
        }

        console.log(conjuntoDeAnimales + " conjunto de animales");
        setFincas(areas);
      }
    } catch (error) {
      console.error("Error estableciendo la información de finca:", error);
    }
  }

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
