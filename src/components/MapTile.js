import React from 'react'
import GoogleMapReact from 'google-map-react';

// import LocationOnIcon from '@mui/icons-material/LocationOn';
// const MapMarker = () => <LocationOnIcon className='map-marker' sx={{ fontSize: "60px" }}></LocationOnIcon>;

const MapMarker = () => <div className='map-marker'></div>;


function MapTile(props) {
    const { data, api_key } = props;

    const createMapOptions = (maps) => {
        return {
          panControl: false,
          mapTypeControl: false,
          scrollwheel: false,
          fullscreenControl: false,
          scaleControl: false,
          zoomControl: false,
          styles: [
                { elementType: "geometry", stylers: [{ color: "#f2f2f2" }] },
                {
                    featureType: "water",
                    elementType: "geometry.fill",
                    stylers: [{ color: "#b0acb4" }],
                  },
                { stylers: [{ 'saturation': -300 }, { 'gamma': 0.8 }] },
                { elementType: "labels.text.fill", stylers: [{ color: "#000000" }] },
                {
                    featureType: "administrative.country",
                    elementType: "geometry.stroke",
                    stylers: [{ color: "#000000" }],
                  },
                  {
                    featureType: "administrative.province",
                    elementType: "geometry.stroke",
                    stylers: [{ color: "#000000" }],
                  },

            ]
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
                bootstrapURLKeys={{ key: api_key }}
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