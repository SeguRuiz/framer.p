import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright.jsx';
import ChartUserByCountry from './ChartUserByCountry.jsx';
import CustomizedTreeView from './CustomizedTreeView.jsx';
import CustomizedDataGrid from './CustomizedDataGrid.jsx';
import HighlightedCard from './HighlightedCard.jsx';
import PageViewsBarChart from './PageViewsBarChart.jsx';
import { useLocation } from 'react-router';
import SessionsChart from './SessionsChart.jsx';
import StatCard from './StatCard.jsx';
import { PAGINAS_ADMIN } from '../../constants/Paginas.d.js';
import { useSelector } from 'react-redux';

//////// Estos objetos es la data de los primeros 3 graficos
const data = [
  {
    title: 'animales Sanos',
    value: '24',
    interval: 'ultimos 30 dias',
    trend: 'up',
    data: [
      400, 384, 280, 260, 420, 380, 300, 340, 280, 340, 300, 340, 420, 450,
       340, 280, 480, 430, 444, 470, 455, 420, 390, 400
     
    ],
  },
  {
    title: 'Decesos',
    value: '16',
    interval: 'Ultimos 30 dias',
    trend: 'down',
    data: [
      140, 150, 90, 180, 150, 200, 220, 180, 144, 122, 178, 188, 103, 140, 200,
      
    ],
  },
  {
    title: 'Animales Enfermos',
    value: '10',
    interval: 'Ultimos 30 dias',
    trend: 'neutral',
    data: [
      250, 230, 210, 260, 220, 130, 190, 220, 280, 290,
      
    ],
  },
];

export default function MainGrid() {
 const {page} = useSelector(x => x.Page)
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
    
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Datos de salud
      </Typography>
      
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {data.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 4 }}>
            <StatCard {...card} />
          </Grid>
        ))}
       
        <Grid size={{ xs: 10, md: 6 }}>
          <SessionsChart />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <PageViewsBarChart />
        </Grid>
      </Grid>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Detalles
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 9 }}>
          <CustomizedDataGrid />
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Stack gap={2} direction={{ xs: 'column', sm: 'row', lg: 'column' }}>
            {/* <CustomizedTreeView /> */}
            <ChartUserByCountry />
          </Stack>
        </Grid>
      </Grid>
      <Copyright sx={{ my: 4 }} />
    
    </Box>
  );
}
