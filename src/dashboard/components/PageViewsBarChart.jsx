import React, { useEffect, useState } from 'react';
import GetAnimales from '../services/GetAnimales.jsx'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts/BarChart';
import { useTheme } from '@mui/material/styles';

export default function PageViewsBarChart() {
  const [animales, setAnimales] = useState([]);
  const theme = useTheme();
  const colorPalette = [
    (theme.vars || theme).palette.primary.dark,
    (theme.vars || theme).palette.primary.main,
    (theme.vars || theme).palette.primary.light,
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const animalesData = await GetAnimales();
        setAnimales(animalesData); // Establecer los animales en el estado
      } catch (error) {
        console.error("Error al obtener los datos", error.message); 
        console.error("Detalles del error:", error); 
      }
    };
  
    fetchData();
  }, []);
  

  //Transformar los datos de los animales
  const data = animales.map(animal => ({
    nombre: animal.NOMBRE,
    peso: animal.PESO,
    estado: animal.PESO < 100 ? "Desnutrida" : "Peso Idóneo"
  }));

  //  Preparar los datos para el gráfico
  const chartData = data.map(animal => animal.peso);
  
  return (
    <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          Estado de salud de los animales
        </Typography>
        <Stack sx={{ justifyContent: 'space-between' }}>
          <Stack direction="row" sx={{ alignContent: { xs: 'center', sm: 'flex-start' }, alignItems: 'center', gap: 1 }}>
            <Typography variant="h4" component="p">
              {animales.length} Animales
            </Typography>
          </Stack>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Peso De Nuestro Ganado
          </Typography>
        </Stack>

        <BarChart
          borderRadius={8}
          colors={colorPalette}
          xAxis={[
            {
              scaleType: 'band',
              categoryGapRatio: 0.5,
              data: data.map(animal => animal.nombre), // Nombres de los animales
            },
          ]}
          series={[
            {
              id: 'peso',
              label: 'Peso',
              data: chartData,
              stack: 'A',
            },
          ]}
          height={250}
          margin={{ left: 50, right: 0, top: 20, bottom: 20 }}
          grid={{ horizontal: true }}
          slotProps={{
            legend: {
              hidden: true,
            },
          }}
        />
      </CardContent>
    </Card>
  );
}
