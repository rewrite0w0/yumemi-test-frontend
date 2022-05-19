import React, { useState, useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import APIKEY from './api/APIKEY'

export default function Use_Function() {
  const [state, setState] = useState({})
  // const [temp, setTemp] = useState({})
  // const [loading, setLoading] = useState(true)

  console.log(process.env.APIKEY)

  useEffect(() => {
    console.log(process.env.APIKEY)
    fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
      headers: { 'X-API-KEY': APIKEY },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then((res) => {
        setState({ prefectures: res.result })

        // state.prefectures.map((x) => (x.selected = false))
        // setTemp(state.prefectures.map((x) => x))

        // console.log(state)
      })
    // .then(() => {
    //   state.prefectures.map((x) => (x.selected = false))
    //   setTemp(state.prefectures.map((x) => x))
    // })
  }, [])

  console.log(state)

  // console.log(temp);

  // const changeSelection = (idx) => {}

  // const renderItem = (props) => {
  //   return (
  //     <div
  //       key={props.prefCode}
  //       style={{ margin: '5px', display: 'inline-block' }}
  //     >
  //       <input type="checkbox" />
  //       {props.prefName}
  //     </div>
  //   )
  // }

  // console.log(temp)
  const options = {
    title: {
      text: '総人口',
    },
    plotOptions: {
      series: {
        label: {
          connectiorAllowed: false,
        },
        pointInterval: 5,
        pointStart: 1980,
      },
    },
  }

  return (
    <>
      <h1>HighCharts React + RESAS API Demo</h1>

      <HighchartsReact Highcharts={Highcharts} options={options} />

      {/* {Object.keys(state.prefectures).map((i) => renderItem(state[i]))} */}
      {state.prefectures}

      {/* {temp.length < 1
        ? console.log(temp)
        : temp.prefectures.map((x) => renderItem(x))} */}
    </>
  )
}
