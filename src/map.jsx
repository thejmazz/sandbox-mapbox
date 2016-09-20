'use strict'

import React from 'react'
import MapboxGLMap from 'react-map-gl'

const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN ||
  'pk.eyJ1IjoidGhlam1henoiLCJhIjoiY2loY2F0Y2JpMDBqZnVrbWEzb3F2b2U4ZiJ9.BV9ZaIthT-Wr0xQFz7cpWQ'

export default () =>
  <MapboxGLMap
    width={window.innerWidth}
    height={window.innerHeight}
    mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
    latitude={40.7231901}
    longitude={-74.2344747}
    zoom={2}
  >

  </MapboxGLMap>


