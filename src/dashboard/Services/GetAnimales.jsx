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
      
        return Datos;
    } catch (error) {
        console.error('Hubo un error al hacer la consulta HTTP del servidor', error);
        throw error; 
    }
}


export default GetAnimales