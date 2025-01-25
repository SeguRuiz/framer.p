// Obtener todos los animales
export const obtenerAnimales= async () => {
    try {
      const response = await fetch("http://localhost:4000/animales");
      if (!response.ok) {
        throw new Error(`Error al obtener animales: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error al obtener animales:", error);
      throw error; 
    }
  };
  
 
  export const actualizarEstadoAnimal = async (id, estado) => {
    try {
      console.log(`Actualizando animal con ID: ${id} y estado: ${estado}`); // DEBUG
      const response = await fetch(`http://localhost:4000/animales/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ estado }),
      });
  
      if (!response.ok) {
        throw new Error(`Error al actualizar el estado del animal: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error al actualizar el estado del animal:", error);
      throw error; 
    }
  };

  