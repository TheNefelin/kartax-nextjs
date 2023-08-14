"use client"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

export default function MyMaps(props) {
  return (
    <MapContainer center={[-33.04672, -71.61570]} zoom={13} style={{ height: "200px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[-33.04672, -71.61570]}>
        <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
      </Marker>
    </MapContainer>
  )
}
