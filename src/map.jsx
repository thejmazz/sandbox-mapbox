'use strict'

import React from 'react'
import Immutable from 'immutable'
import MapboxGLMap from 'react-map-gl'
import {
  DeckGLOverlay,
  ScatterplotLayer
} from 'deck.gl'

import mapStyleJS from '../static/styles.json'
const mapStyle = Immutable.fromJS(mapStyleJS)

import cities from '../static/all-cities.json'
const positions = cities
  .filter(city => parseInt(city.pop) > 100000)
  .map(city => ({
    position: {
      x: parseFloat(city.lng),
      y: parseFloat(city.lat),
      z: 0
    },
    color: [64, 156, 222],
    radius: 1
  }))


const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN ||
  'pk.eyJ1IjoidGhlam1henoiLCJhIjoiY2loY2F0Y2JpMDBqZnVrbWEzb3F2b2U4ZiJ9.BV9ZaIthT-Wr0xQFz7cpWQ'

const mapViewState = {
  latitude: 15,
  longitude: -25,
  zoom: 2
}

export default () =>
  <MapboxGLMap
    width={window.innerWidth}
    height={window.innerHeight}
    mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
    mapStyle={mapStyle}
    latitude={mapViewState.latitude}
    longitude={mapViewState.longitude}
    zoom={mapViewState.zoom}
  >

    <DeckGLOverlay
      id="default-deckgl-overlay"
      width={window.innerWidth}
      height={window.innerHeight}
      latitude={mapViewState.latitude}
      longitude={mapViewState.longitude}
      zoom={mapViewState.zoom}
      layers={[
        new ScatterplotLayer({
          id: 'scatterplotLayer',
          width: window.innerWidth,
          height: window.innerHeight,
          latitude: mapViewState.latitude,
          longitude: mapViewState.longitude,
          zoom: mapViewState.zoom,
          data: positions
        })
      ]}
    />

  </MapboxGLMap>


