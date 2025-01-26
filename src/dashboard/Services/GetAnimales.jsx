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

  export const getAnimalesDeUsuario = async (user_id = null) => {
    try {
      const UsuariosResponse = await fetch(`http://localhost:4000/usuarios/${user_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (!UsuariosResponse.ok) {
        throw new Error('Error al obtener los usuarios');
      }
  
      const usuariosData = await UsuariosResponse.json();
      const fincas = usuariosData.FINCAS.join(",");
  
      //////////////////////////////////////////////////
  
      const fincasResponse = await fetch(`http://localhost:4000/fincas?id=${fincas}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!fincasResponse.ok) {
        throw new Error('Error al obtener las fincas');
      }
  
      const fincasData = await fincasResponse.json();
  
      /////////////////////////////////////////////////////////
  
      const animalesDeLaFinca = await fetch(`http://localhost:4000/animales`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!animalesDeLaFinca.ok) {
        throw new Error('Error al obtener los animales');
      }
  
      const dataAnimales = await animalesDeLaFinca.json();
     
      
      
      const animalesFiltrados = [];
      dataAnimales.forEach((e) => {
        const findId = fincasData[0].ANIMALES.find((x) => x == e.id) ?? false;
         findId != false && animalesFiltrados.push(e);
        
      });
  
      return [animalesDeLaFinca.status, animalesFiltrados];
      
    } catch (error) {
      console.error("Hubo un error al hacer la consulta HTTP del servidor", error);
      throw error;
    }
  };
  