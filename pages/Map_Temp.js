import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
// import useSWR from 'swr'
// import lookup from 'country-code-lookup'

import 'mapbox-gl/dist/mapbox-gl.css'
import '../styles/Map_Style.module.scss'

export default function Map_Temp() {
  mapboxgl.accessToken =
    'pk.eyJ1IjoicmV3cml0ZTB3MCIsImEiOiJjbDM5djRucG0wZHA5M2NuM3Y2cHl1ZmwzIn0.ZbeeUIs42MhdULY34HNvyQ'

  const mapboxElRef = useRef(null)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapboxElRef.current,
      style: 'mapbox://style/notalemesa/ck8dqwdum09ju1ioj65e3ql3k',
      center: [128, 37.5],
      zoom: 3,
    })

    map.addControl(new mapboxgl.NavigationControl())

    map.addControl(
      new mapboxgl.GeolocateControl({
        fitBoundsOptions: { maxZoom: 10 },
      }),
    )
  }, [])

  // const map = new mapboxgl.Map({
  //   container: 'map',
  //   style: 'mapbox://styles/mapbox/streets-v11',
  //   center: [128, 38],
  //   zoom: 4,
  // })

  return (
    <div className="mapContainer">
      <div className="mapBox" ref={mapboxElRef} />
    </div>

    // <div className="mapContainer">
    //   <div className="mapBox">{map}</div>
    // </div>
  )
}
