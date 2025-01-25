import React, { useEffect, useState } from "react";
import { actualizarEstadoAnimal, obtenerAnimales } from "../../../services/Animales/PACHTAnimales";
import AnimalTable from "./AnimalTable";

const Cambio_estado = () => {
  const [animales, setAnimales] = useState([]);
  const rangoAceptable = {
    latMin: 9.9, // Rango mínimo de latitud
    latMax: 10.2, // Rango máximo de latitud
    lngMin: -84.2, // Rango mínimo de longitud
    lngMax: -83.9, // Rango máximo de longitud
  };

  useEffect(() => {
    const fetchAnimales = async () => {
      const data = await obtenerAnimales();
      setAnimales(data);
    };
    fetchAnimales();
  }, []);

  const cambiarEstado = async (id, nuevoEstado) => {
    if (!id || typeof nuevoEstado === "undefined") {
      console.error("ID o nuevoEstado inválidos:", { id, nuevoEstado });
      return;
    }
    try {
      const animalActualizado = await actualizarEstadoAnimal(id, nuevoEstado);
      setAnimales((prevAnimales) =>
        prevAnimales.map((animal) =>
          animal.id === id ? { ...animal, estado: animalActualizado.estado } : animal
        )
      );
    } catch (error) {
      console.error("Error al cambiar el estado:", error);
    }
  };

  const verificarUbicaciones = () => {
    animales.forEach((animal) => {
      const { id, lat, lng, estado } = animal;

      const fueraDeRango =
        lat < rangoAceptable.latMin ||
        lat > rangoAceptable.latMax ||
        lng < rangoAceptable.lngMin ||
        lng > rangoAceptable.lngMax;

      if (fueraDeRango && estado !== "escapada") {
        cambiarEstado(id, "escapada");
      } else if (!fueraDeRango && estado !== "normal") {
        cambiarEstado(id, "normal");
      }
    });
  };

  useEffect(() => {
    
    const intervalo = setInterval(() => {
      verificarUbicaciones();
    }, 5000); 

    return () => clearInterval(intervalo);
  }, [animales]);

  return (
    <div>
      <h1>Gestión de Animales</h1>
      <AnimalTable animales={animales} cambiarEstado={cambiarEstado} />
    </div>
  );
};

export default Cambio_estado;