import React from 'react';
import axios from 'axios';
import Chart from 'chart.js';
import ButtonAppBar from './appbar.jsx';
import ChartDisplay from './chart.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            prices: [],
            dates: []
        };

    }

    componentDidMount() {
        axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
            .then(data => {
                let summary = data.data.bpi;
                let prices = [], dates = [];

                for (let key in summary) {
                    prices.push(summary[key]);
                    dates.push(key);
                }

                this.setState( { data: summary,
                                 prices: prices,
                                 dates: dates });
                
                this.generateChart(dates, prices);
            })
            .catch(err =>
                console.log(err)
            );
    }

    generateChart(dates, prices) {
        let ctx = document.getElementById('myChart');
        let myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    label: 'Bitcoin Price in USD',
                    data: prices,
                    fill: false,
                    borderColor: 'rgba(250, 0, 0, .6)'
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        }
                    }]
                },
                title: {
                    display: true,
                    fontSize: 36,
                    text: 'Bitcoin Price in USD - Past 30 Days'
                }
            }
        });
    }

    render() {
        return (
            <>
            <ButtonAppBar />
            <ChartDisplay />
            </>
        )
    }

}