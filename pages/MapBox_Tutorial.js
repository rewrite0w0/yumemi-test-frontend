import React, { useRef, useEffect, useState } from 'react'

import mapboxgl from 'mapbox-gl'
import MapboxLanguage from '@mapbox/mapbox-gl-language'

mapboxgl.accessToken =
  'pk.eyJ1IjoicmV3cml0ZTB3MCIsImEiOiJjbDM5djRucG0wZHA5M2NuM3Y2cHl1ZmwzIn0.ZbeeUIs42MhdULY34HNvyQ'

export default function MapBox_Tutorial() {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(127)
  const [lat, setLat] = useState(37.5)
  const [zoom, setZoom] = useState(7)

  const language = new MapboxLanguage({ defaultLanguage: 'ko' })

  // mapboxgl.setRTLTextPlugin(
  //   'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
  // )

  useEffect(() => {
    if (map.current) return

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    }).addControl(language)

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4))
      setLat(map.current.getCenter().lat.toFixed(4))
      setZoom(map.current.getZoom().toFixed(2))
    })
  })

  return (
    <div>
      <div className="sidebar">
        Longituda: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>

      <div ref={mapContainer} className="map-container"></div>
    </div>
  )
}
