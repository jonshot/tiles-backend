import { d3 } from 'd3'
import { jsdom } from 'jsdom'

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  res.status(200).json(getCards())

export const show = ({ params }, res, next) =>
  res.status(200).json(getCards()[0])

function getCards () {
  return [{
    layout: {
      desktop: { cols: 3, rows: 1 }
    },
    title: 'Reports',
    img: getChart()
  },
  {
    layout: {
      desktop: { cols: 1, rows: 1 }
    },
    title: 'Weather',
    img: getIcon()
  }]
}

function getChart () {
  let chart = `<svg viewBox="0 0 470 230">
                  <rect height="230" width="470" y="0" x="0" stroke-width="1" stroke="#ccc" fill="#fff"/>
                  <path d="m11.5,212c0,0 94,-116 94,-116c0,0 73,67 74,67c1,0 139,-103 138.5,-103c0.5,0 66.5,64 68.5,61c2,-3 71,-94 70.5,-94" stroke-width="2" stroke="#ff0000" fill="none"/>
                </svg>`

  // jsdom.env({
  //   html: '<div id="chart"></div>',
  //   features: { QuerySelector: true },
  //   done: (e, window) => {
  //     chart = window.c3.generate({
  //       data: {
  //         columns: [
  //           ['data1', 30, 200, 100, 400, 150, 250],
  //           ['data2', 50, 20, 10, 40, 15, 25]
  //         ]
  //       },
  //       legend: {
  //         hide: true
  //       },
  //       tooltip: {
  //         show: false
  //       }
  //     })
  //   }
  // })

  return new Buffer(chart).toString('base64')
}

function getIcon () {
  let svg = `<svg>
    <circle cx="10" cy="10" r="10" fill="orange" />
    <text x="25" y="17" font-size="20">24&deg;</text>
  </svg>`

  return new Buffer(svg).toString('base64')
}
