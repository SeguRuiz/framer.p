import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { lineElementClasses } from '@mui/x-charts/LineChart';

function getDaysInMonth(month, year) {
  const date = new Date(year, month, 0);
  const monthName = date.toLocaleDateString('en-US', {
    month: 'short',
  });
  const daysInMonth = date.getDate();
  return Array.from({ length: daysInMonth }, (_, i) => `${monthName} ${i + 1}`);
}

function StatCard({ title, value, interval, data, color }) {
  const daysInMonth = getDaysInMonth(4, 2024); // Abril de 2024

  const validData = Array.isArray(data) && data.length > 0 ? data : [0];

  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          {title}
        </Typography>
        <Stack direction="column" sx={{ justifyContent: 'space-between', flexGrow: 1, gap: 1 }}>
          <Stack sx={{ justifyContent: 'space-between' }}>
            <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h4" component="p">
                {value}
              </Typography>
            </Stack>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {interval}
            </Typography>
          </Stack>
          <Box sx={{ width: '100%', height: 50 }}>
            <SparkLineChart
              colors={[color]}
              data={validData}
              showHighlight
              showTooltip
              xAxis={{ scaleType: 'band', data: daysInMonth }}
              sx={{ [`& .${lineElementClasses.root}`]: { stroke: color, strokeWidth: 2 } }} // Configurar color y ancho de la línea
            />
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  interval: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string.isRequired, // Hacer que `color` sea requerido
};

export default StatCard;
