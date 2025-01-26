async function GetAnimales() {
    try {
        const response = await fetch('http://localhost:4000/animales', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Verifica si la respuesta es exitosa
        if (!response.ok) {
            throw new Error(`Error al hacer la consulta HTTP. Código de estado: ${response.status}`);
        }

        const Datos = await response.json();
        console.log('Datos obtenidos:', Datos);
        return Datos;
    } catch (error) {
        console.error('Hubo un error al hacer la consulta HTTP del servidor', error);
        throw error; 
    }
}

export default GetAnimales


export const getAnimalesDeUsuarioRM = async (user_id = null) => {
    try {
      const UsuariosResponse = await fetch(
       ` http://localhost:4000/usuarios/${user_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const usuariosData = await UsuariosResponse.json();
      const fincas = usuariosData.FINCAS.join(",");
      //////////////////////////////////////////////////
  
      const fincasResponse = await fetch(
        `http://localhost:4000/fincas?id=${fincas}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      const fincasData = await fincasResponse.json();
      
      /////////////////////////////////////////////////////////
      const animalesDeLaFinca = await fetch(`http://localhost:4000/animales`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const dataAnimales = await animalesDeLaFinca.json();
      const animalesFiltradosRM = [];
      dataAnimales.forEach((e,i) => {
        const findId = fincasData[0].ANIMALES.find((x) => x == e.id) ?? false;
        findId != false && i<31 && animalesFiltradosRM.push(e.RM);
      });
  
      return [animalesDeLaFinca.status, animalesFiltradosRM];
      // Verifica si la respuesta es exitosa
    } catch (error) {
      console.error(
        "Hubo un error al hacer la consulta HTTP del servidor",
        error
      );
      throw error;
    }
  };