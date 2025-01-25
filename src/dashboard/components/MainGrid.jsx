// main.jsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Grid, Typography } from '@mui/material';
import GetAnimales from '../services/GetAnimales'; 
import StatCard from '../components/StatCard';
import CustomizedDataGrid from '../components/CustomizedDataGrid';
import CustomizedTreeView from '../components/CustomizedTreeView';
import ChartUserByCountry from '../components/ChartUserByCountry';
import Copyright from '../internals/components/Copyright.jsx';

export default function MainGrid() {
  const { page } = useSelector((x) => x.Page);
  const [tarjetas, setTarjetas] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  const calcularPorcentajes = (animales) => {
    const totalAnimales = 150; // Total de animales
    const estados = animales.reduce((acc, animal) => {
      acc[animal.ESTADO] = (acc[animal.ESTADO] || 0) + 1;
      return acc;
    }, {});
    
    return Object.entries(estados).map(([estado, count]) => ({
      estado,
      cantidad: count,
      porcentaje: (count / totalAnimales) * 100,
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

        const animales = await GetAnimales();
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
        Overview
      </Typography>

      <Grid container spacing={2} columns={12} sx={{ mb: (theme) => theme.spacing(2) }}>
        {tarjetas.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} lg={4}>
            <StatCard 
              title={card.estado || "Sin título"}
              value={`${card.cantidad || 0} animales`} 
              data={[card.porcentaje]} // Usamos el porcentaje como dato de ejemplo
              interval={`${card.porcentaje.toFixed(2)}%`} // Mostramos el porcentaje
              trend="neutral" // Ejemplo de tendencia
              color={getColorByEstado(card.estado)} // Color basado en el estado
            />
          </Grid>
        ))}
      </Grid>

      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Details
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={12} lg={9}>
          <CustomizedDataGrid />
        </Grid>
        <Grid item xs={12} lg={3}>
          <CustomizedTreeView />
          <ChartUserByCountry />
        </Grid>
      </Grid>
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}
