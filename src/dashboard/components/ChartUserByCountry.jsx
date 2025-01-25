import * as React from 'react';
import PropTypes from 'prop-types';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { useState, useEffect } from 'react';
import GetAnimales from '../Services/GetAnimales.jsx';  

const StyledText = styled('text', {
  shouldForwardProp: (prop) => prop !== 'variant',
})(({ theme }) => ({
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fill: (theme.vars || theme).palette.text.secondary,
  variants: [
    {
      props: {
        variant: 'primary',
      },
      style: {
        fontSize: theme.typography.h5.fontSize,
      },
    },
    {
      props: ({ variant }) => variant !== 'primary',
      style: {
        fontSize: theme.typography.body2.fontSize,
      },
    },
    {
      props: {
        variant: 'primary',
      },
      style: {
        fontWeight: theme.typography.h5.fontWeight,
      },
    },
    {
      props: ({ variant }) => variant !== 'primary',
      style: {
        fontWeight: theme.typography.body2.fontWeight,
      },
    },
  ],
}));

function PieCenterLabel({ primaryText, secondaryText }) {
  const { width, height, left, top } = useDrawingArea();
  const primaryY = top + height / 2 - 10;
  const secondaryY = primaryY + 24;

  return (
    <React.Fragment>
      <StyledText variant="primary" x={left + width / 2} y={primaryY}>
        {primaryText}
      </StyledText>
      <StyledText variant="secondary" x={left + width / 2} y={secondaryY}>
        {secondaryText}
      </StyledText>
    </React.Fragment>
  );
}

PieCenterLabel.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
};

const colors = [
  'hsl(220, 20%, 65%)',
  'hsl(220, 20%, 42%)',
  'hsl(220, 20%, 35%)',
  'hsl(220, 20%, 25%)',
  'hsl(220, 20%, 18%)',
];

export default function ChartUserBySpecies() {
  const [animales, setAnimales] = useState([]);
  const [data, setData] = useState([]);

  // Obtener los datos de los animales
  useEffect(() => {
    async function fetchData() {
      try {
        const animalesData = await GetAnimales();
        setAnimales(animalesData);

        // Obtener especies únicas
        const especies = [...new Set(animalesData.map(animal => animal.ESPECIE))]; // Obtener especies únicas
        const newData = especies.map(especie => {
          const count = animalesData.filter(animal => animal.ESPECIE === especie).length;
          return { label: especie, value: count };
        });

        setData(newData);
      } catch (error) {
        console.error('Error al obtener los animales:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <Card
      variant="outlined"
      sx={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}
    >
      <CardContent>
        <Typography component="h2" variant="subtitle2">
          Animales por especie
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <PieChart
            colors={colors}
            margin={{
              left: 80,
              right: 80,
              top: 80,
              bottom: 80,
            }}
            series={[
              {
                data,
                innerRadius: 75,
                outerRadius: 100,
                paddingAngle: 0,
                highlightScope: { faded: 'global', highlighted: 'item' },
              },
            ]}
            height={260}
            width={260}
            slotProps={{
              legend: { hidden: true },
            }}
          >
            <PieCenterLabel primaryText="Total" secondaryText={`${data.reduce((acc, item) => acc + item.value, 0)} Animales`} />
          </PieChart>
        </Box>
        {data.map((item, index) => (
          <Stack
            key={index}
            direction="row"
            sx={{ alignItems: 'center', gap: 2, pb: 2 }}
          >
            <Typography variant="body2" sx={{ fontWeight: '500' }}>
              {item.label}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.value} animales
            </Typography>
            <LinearProgress
              variant="determinate"
              value={item.value}
              sx={{
                [`& .${linearProgressClasses.bar}`]: {
                  backgroundColor: colors[index % colors.length], // Esto maneja el ciclo de colores
                },
              }}
            />
          </Stack>
        ))}
      </CardContent>
    </Card>
  );
}
