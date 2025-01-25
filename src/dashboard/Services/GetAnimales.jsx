async function GetAnimales() {
    try {
      const response = await fetch('http://localhost:4000/animales', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
  
      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error('El formato de los datos no es un array.');
      }
  
      return data;
    } catch (error) {
      console.error('Error al obtener datos del servidor:', error);
      throw error;
    }
  }
  
  export default GetAnimales;
  