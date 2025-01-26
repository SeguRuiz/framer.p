import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Grid2, Typography } from '@mui/material';

import { getAnimalesDeUsuario } from '../services/GetAnimales.jsx';
import StatCard from '../components/StatCard';
import CustomizedDataGrid from '../components/CustomizedDataGrid';
import CustomizedTreeView from '../components/CustomizedTreeView';
import ChartUserByCountry from '../components/ChartUserByCountry';
import Copyright from '../internals/components/Copyright.jsx';
import { getCookie } from '../../utils/cookies.js';

export default function MainGrid() {
  const { page } = useSelector((x) => x.Page);
  const [tarjetas, setTarjetas] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error
  const UserId = atob(getCookie('data'))

  const calcularPorcentajes = (animales) => {
    const totalAnimales = 150; // Total de animales
    const estados = animales.reduce((acc, animal) => {
      if (animal.ESTADO !== 'AGITADO') { // Excluir el estado "Agitado"
        acc[animal.ESTADO] = (acc[animal.ESTADO] || 0) + 1;
      }
      return acc;
    }, {});
    
    return Object.entries(estados).map(([estado, count]) => ({
      estado,
      cantidad: count,
      porcentaje: (count / totalAnimales) * 100,
      color: getColorByEstado(estado), // Agregar color aquí
    }));
  };

  const getColorByEstado = (estado) => {
    switch (estado) {
      case 'MUERTO':
        return '#FF0000'; // Rojo
      case 'SANO':
        return '#00FF00'; // Verde
      case 'ENFERMO':
        return '#FFFF00'; // Amarillo
      default:
        return '#FFFFFF'; // Blanco
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Iniciar carga
        setError(null); // Resetear error

        const animales = await getAnimalesDeUsuario(UserId);
       
        
        if (!Array.isArray(animales)) {
          throw new Error('El servidor no devolvió un array válido.');
        }
        
        

        const porcentajes = calcularPorcentajes(animales);
        console.log(porcentajes);
        setTarjetas(porcentajes);
      } catch (err) {
        console.error('Error al cargar los datos:', err);
        setError('Hubo un problema al cargar los datos.');
      } finally {
        setLoading(false); // Finalizar carga
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Typography variant="h6">Cargando datos...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Estado
      </Typography>

      <Grid2 container spacing={2} columns={12} sx={{ mb: (theme) => theme.spacing(2) }}>
        {tarjetas.map((card, index) => (
          <Grid2 item key={index} xs={12} sm={6} lg={4}>
            <StatCard 
              title={card.estado || "Sin título"}
              value={`${card.cantidad || 0} animales`} 
              interval={`${card.porcentaje.toFixed(2)}%`} // Mostramos el porcentaje
              color={card.color} // Pasar el color
            />
          </Grid2>
        ))}
      </Grid2>

      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Detalles
      </Typography>
      <Grid2 container spacing={2} columns={12}>
        <Grid2 item xs={12} lg={9}>
          <CustomizedDataGrid />
        </Grid2>
        <Grid2 item xs={12} lg={3}>
          <CustomizedTreeView />
          <ChartUserByCountry />
        </Grid2>
      </Grid2>
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}
