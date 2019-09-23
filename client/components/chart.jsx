import React from 'react';
import Typography from '@material-ui/core/Typography';

const ChartDisplay = (props) => {

    return (
        <div id="chart-container">
            <canvas id="myChart" width="400" height="400"></canvas>
            <Typography>
            Powered by CoinDesk
          </Typography>
        </div>
    );

}

export default ChartDisplay;