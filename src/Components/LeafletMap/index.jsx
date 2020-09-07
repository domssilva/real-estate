import React, { Component } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import './styles.scss';

import mapPin from '../../pin.png';

export default class LeafletMap extends Component {
  state = {
    zoom: 13,
  }

  render() {
    const position = [this.props.lat, this.props.lng];

    const myIcon = L.icon({
        iconUrl: mapPin,
        iconSize: [30, 30],
    });

    return (
        <Map 
            className="leafletMap" 
            worldCopyJump={true}
            center={position} 
            zoom={this.state.zoom}
        >
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker 
                position={position}
                icon={myIcon}
            >
                <Popup>
                    that's us!
                </Popup>
            </Marker>
        </Map>
    );
  }
}