import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import APIKEY from './api/APIKEY'

class Use_Class extends Component {
  constructor() {
    super()
    this.state = {
      selected: Array(47).fill(false),
      prefectures: {},
      series: [],
    }
    this._changeSelection = this._changeSelection.bind(this)
  }

  componentDidMount() {
    // API Doc: https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
    fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
      headers: { 'X-API-KEY': APIKEY },
    })
      .then((response) => response.json())
      .then((res) => {
        this.setState({ prefectures: res.result })
      })

    // console.log(APIKEY)
    // console.log(process.env.APIKEY)
  }

  _changeSelection(index) {
    const selected_copy = this.state.selected.slice()
    selected_copy[index] = !selected_copy[index]

    if (!this.state.selected[index]) {
      // API Doc: https://opendata.resas-portal.go.jp/docs/api/v1/population/sum/perYear.html
      fetch(
        `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${
          index + 1
        }`,
        {
          headers: { 'X-API-KEY': APIKEY },
        },
      )
        .then((response) => {
          // console.log(response);
          return response.json()
        })
        .then((res) => {
          console.log(res)
          let tmp = []
          // console.log(res.result);
          Object.keys(res.result.data[0].data).forEach((i) => {
            // console.log(i);
            // console.log(res.result.data[0].data[i]);
            tmp.push(res.result.data[0].data[i].value)
          })

          const res_series = {
            name: this.state.prefectures[index].prefName,
            data: tmp,
          }
          this.setState({
            selected: selected_copy,
            series: [...this.state.series, res_series],
          })
        })
    } else {
      const series_copy = this.state.series.slice()
      for (let i = 0; i < series_copy.length; i++) {
        if (series_copy[i].name == this.state.prefectures[index].prefName) {
          series_copy.splice(i, 1)
        }
      }
      this.setState({
        selected: selected_copy,
        series: series_copy,
      })
    }
  }

  renderItem(props) {
    return (
      <div
        key={props.prefCode}
        style={{ margin: '5px', display: 'inline-block' }}
      >
        <input
          type="checkbox"
          checked={this.state.selected[props.prefCode - 1]}
          onChange={() => this._changeSelection(props.prefCode - 1)}
        />
        {props.prefName}
      </div>
    )
  }

  render() {
    const obj = this.state.prefectures
    const options = {
      title: {
        text: '総人口',
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
          pointInterval: 5,
          pointStart: 1980,
        },
      },
      series: this.state.series,
    }

    return (
      <div>
        <h1>Highcharts React + RESAS API Demo</h1>
        <p>
          <a href="https://github.com/highcharts/highcharts-react">
            Highcharts React
          </a>
        </p>
        <p>
          <a href="https://opendata.resas-portal.go.jp/">RESAS API</a>
        </p>
        {Object.keys(obj).map((i) => this.renderItem(obj[i]))}

        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    )
  }
}

export default Use_Class
