import React from "react";

const AnimalTable = ({ animales, cambiarEstado }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Estado</th>
          <th>Ubicacion</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {animales.map((animal) => (
          <tr key={animal.id}>
            <td>{animal.nombre}</td>
            <td>{animal.estado}</td>
            <td>{animal.lat}{animal.lng}</td>
            <td>
              <button onClick={() => cambiarEstado(animal.id, "normal")}>
                Normal
              </button>
              <button onClick={() => cambiarEstado(animal.id, "alerta")}>
                Alerta
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AnimalTable;