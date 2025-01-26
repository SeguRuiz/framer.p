async function GetFincas() {
    
    try {
    const response = await fetch('http://localhost:4000/fincas', {
        method: 'GET',
        headers:{
            'Content-Typer': 'Application/json'
        }
        
    })  
    if (response.ok) {
        console.log('Exito al hacer la consulta http');
        
    }   
    const Datos = response.json()
    return Datos  
    } catch (error) {
        console.error('Hubo un error al hacer la consulta http del servidor', error)
        throw error
    }
}

export const getAnimalesDeUsuarioCoordernadas = async (user_id = null) => {
    try {
      const UsuariosResponse = await fetch(
        `http://localhost:4000/usuarios/${user_id}`,
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

      const animalesFiltrados = [];
      dataAnimales.forEach((e) => {
        const findId = fincasData[0].ANIMALES.find((x) => x == e.id) ?? false;
        findId != false && animalesFiltrados.push(e.UBICACION);
      });
      console.log(animalesFiltrados, 'aquiiiiiiiiiiii');
      
      return [animalesDeLaFinca.status, animalesFiltrados];
      // Verifica si la respuesta es exitosa
    } catch (error) {
      console.error(
        "Hubo un error al hacer la consulta HTTP del servidor",
        error
      );
      throw error;
    }
  };

export default GetFincas