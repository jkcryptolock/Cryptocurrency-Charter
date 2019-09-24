import React from 'react';
import Typography from '@material-ui/core/Typography';

const ChartDisplay = (props) => {

    return (
        <div className="body">
            <div id="chart-container">
                <canvas id="myChart" width="1500" height="600"></canvas>
                <Typography>
                Powered by CoinDesk
                </Typography>
            </div> 
        </div>
    );

}

export default ChartDisplay;