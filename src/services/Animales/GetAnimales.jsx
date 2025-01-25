async function GetAnimales() {
  try {
    const response = await fetch("http://localhost:4000/animales", {
      method: "GET",
      headers: {
        "Content-Typer": "Application/json",
      },
    });
    if (response.ok) {
      console.log("Exito al hacer la consulta http");
    }
    const Datos = response.json();
    return Datos;
  } catch (error) {
    console.error(
      "Hubo un error al hacer la consulta http del servidor",
      error
    );
    throw error;
  }
}

export const GetAnimal = async (id = null) => {
  try {
    const response = await fetch(`http://localhost:4000/animales/${id}`);
    const data = await response.json();
    return [response.status, data];
  } catch (error) {
    console.log(error);
    return [500, null];
  }
};

export default GetAnimales;
