async function DeleteAnimales(id) {
    try {
        const response = await fetch(`http://localhost:4000/animales${id}`,{
            method: 'DELETE',
            headers:{
                'Content-Type' : 'Application/json'
            } 
        })
        if (response.ok) {
            console.log('Se realizo con exito la consulta http');
            
        }
       const Consulta= response.json()
        return Consulta
    } catch (error) {
        console.error('Hubo un error en la consulta http')
        throw error
    }
}
export default DeleteAnimales