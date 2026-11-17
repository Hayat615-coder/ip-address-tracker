import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import customMarker from "../assets/icon-location.svg";
const ChangeMapView = ({ coords }: { coords: [number, number] }) => {
  const map = useMap();
  map.setView(coords, map.getZoom());
  return null;
};

const BodyComponent = () => {
  const customIcon = L.icon({
    iconUrl: customMarker,
    iconRetinaUrl: customMarker,
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
  });

  const position: [number, number] = [51.505, -0.09];
  return (
    <>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          width: "100vw",
          height: "100vh",
          zIndex: 8,
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <ChangeMapView coords={position} />
      </MapContainer>

      <div className="relative z-10 mx-auto max-w-274.5 px-4">
        {/* <section
          aria-label="IP address information"
          className="relative -translate-y-19.5 rounded-2xl bg-white px-7 py-7 shadow-[0_12px_30px_rgba(0,0,0,0.12)] md:px-8"
        >
          <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-4 md:divide-x md:divide-y-0">
            {Info.map((item) => (
              <div
                key={item.label}
                className="min-w-0 py-4 first:pt-0 last:pb-0 md:px-7 md:py-0 md:first:pl-0 md:last:pr-0"
              >
                <h2 className="mb-2 text-[11px] font-bold tracking-[0.18em] text-[#858585]">
                  {item.label}
                </h2>
                <p className="wrap-break-words text-[21px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#2b2b2b] md:text-[22px]">
                  {item.value}
                </p>
                {"secondLine" in item && item.secondLine ? (
                  <p className="mt-0.5 text-[21px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#2b2b2b] md:text-[22px]">
                    {item.secondLine}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </section> */}
      </div>
    </>
  );
};

export default BodyComponent;
