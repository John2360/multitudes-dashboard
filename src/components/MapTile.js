import React from 'react'
import GoogleMapReact from 'google-map-react';
import env from "react-dotenv";


import LocationOnIcon from '@mui/icons-material/LocationOn';

// const MapMarker = () => <LocationOnIcon className='map-marker' sx={{ fontSize: "60px" }}></LocationOnIcon>;
const MapMarker = () => <div className='map-marker'></div>;


function MapTile(props) {
    const { data } = props;

    const createMapOptions = (maps) => {
        return {
          panControl: false,
          mapTypeControl: false,
          scrollwheel: false,
          fullscreenControl: false,
          scaleControl: false,
          zoomControl: false,
          styles: [{ stylers: [{ 'saturation': -300 }, { 'gamma': 0.8 }] }]
        }
      }
    const defaultProps = {
        center: {
          lat: 37.2077475,
          lng: -120.0150329
        },
        zoom: 6
      };

    return (
        <div style={{ height: '100%', minHeight: '700px', width: '100%' }}>
            <GoogleMapReact
                // bootstrapURLKeys={{ key: env.GoogleMapsAPI }}
                bootstrapURLKeys={{ key: "AIzaSyChrFM-128zsLznW38n8toC8Olq70loVY" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                options={createMapOptions}
            >
                {Object.keys(data).map((key, index) => {
                    return (
                        <MapMarker
                            key={index}
                            lat={data[key][0]}
                            lng={data[key][1]}
                        />
                    )
                })}
            </GoogleMapReact>
        </div>
    )
}

export default MapTile