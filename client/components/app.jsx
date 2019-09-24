import React from 'react';
import axios from 'axios';
import Chart from 'chart.js';
import ButtonAppBar from './appbar.jsx';
import ChartDisplay from './chart.jsx';
import TimeSelector from './bottom.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            prices: [],
            dates: [],
            currency: 'USD',
            start: '',
            end: ''
        };

    }

    loadData(currency, start, end) {
        let url;

        if (!start || !end) {
            url = `https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}`;
        } else {
            url = `https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}&start=${start}&end=${end}`;
        }

        axios.get(url)
        .then(data => {
            let summary = data.data.bpi;
            let prices = [], dates = [];

            for (let key in summary) {
                prices.push(summary[key]);
                dates.push(key);
            }

            this.setState( { data: summary,
                             prices: prices,
                             dates: dates,
                             currency: currency,
                             start: (start || ''),
                             end: (end || '') 
                            });
            
            this.generateChart(dates, prices, currency);

        })
        .catch(err =>
            console.log(err)
        );
    }

    changeCurrency(currency) {
        this.loadData(currency, this.state.start, this.state.end);
    }

    changeTimeframe(start, end) {
        this.loadData(this.state.currency, start, end);
    }

    componentDidMount() {
        this.loadData('USD');
    }

    generateChart(dates, prices, currency) {
        document.getElementById('myChart').innerHTML = "";
        let ctx = document.getElementById('myChart');
        let myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    label: `Bitcoin Price in ${currency}`,
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
                    display: false,
                    fontSize: 24,
                    text: 'Past 30 Days'
                }
            }
        });
    }

    render() {
        return (
            <>
            <ButtonAppBar changeCurrency={this.changeCurrency.bind(this)} />
            <ChartDisplay />
            <TimeSelector changeTimeframe={this.changeTimeframe.bind(this)} />
            </>
        )
    }

}