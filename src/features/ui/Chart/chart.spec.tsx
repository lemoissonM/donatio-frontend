import React from 'react';
import { describe, expect, it } from 'vitest';
import { Chart, ChartProps } from '.';
import { render, screen } from '@testing-library/react';

const months = ['Jan', 'Feb', 'Mar'];
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
  scales: {
    y: {
      grid: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const chartData: ChartProps = {
  data: {
    labels: months,
    datasets: [
      {
        label: 'Total',
        backgroundColor: '#FDC781',
        data: [1, 2, 3],
      },
      {
        label: 'Used',
        backgroundColor: '#88B9F6',
        data: [3, 2, 1],
      },
    ],
  },
  options,
};

describe('features/ui/Chart', () => {
  it('should render a canvas', () => {
    const { container } = render(<Chart {...chartData} />);
    screen.debug(container);
    expect(container.querySelector('canvas')).toBeInTheDocument();
  });
});
