export const LogIn = async (correo = "", contraseña = "") => {
  try {
    const response = await fetch(
      `http://localhost:4000/usuarios?CORREO=${correo}&&CONTRASEÑA=${contraseña}`,
      {
        method: "GET",
        headers: {
          "Content-Typer": "Application/json",
        },
      }
    );
    const data = await response.json();
    return [response.status, data];
  } catch (error) {
    console.log(error);
    
  }
};

export const GetUsuario = async (id = null) => {
  try {
    const response = await fetch(`http://localhost:4000/usuarios/${id}`, {
      method: "GET",
      headers: {
        "Content-Typer": "Application/json",
      },
    });
    const data = await response.json();
    return [response.status, data];
  } catch (error) {
    console.log(error);
  }
};

async function GetUsuarios() {
  try {
    const response = await fetch("http://localhost:4000/usuarios", {
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
  }
}

export default GetUsuarios;
