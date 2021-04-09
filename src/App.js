import React, { useState } from "react";
import "./styles.css";

const vehicleDB = {
  "🚗": "Car",
  "🛺": "Auto rickshaw",
  "🚌": "Bus",
  "🚑": "Ambulance",
  "🚒": "Fire Truck",
  "🚛": "Lorry",
  "🚜": "Tractor",
  "🚔": "Police Car",
  "🚖": "Taxi",
  "🛹": "Skate Board",
  "🚲": "Cycle",
  "🚢": "Ship",
  "🛵": "Scooter",
  "🚁": "Helicopter",
  "🚂": "Train",
  "🚄": "Bullet Train",
  "🛸": "UFO",
  "🚀": "Roc8 😉"
};

const vehicles = Object.keys(vehicleDB);

export default function App() {
  const [vehicle, setVehicleName] = useState("");

  function vehicleInputHandler(event) {
    let vehicleName = vehicleDB[event.target.value];
    if (vehicleName === undefined) {
      vehicleName = "This vehicle is not present in our database";
    }
    setVehicleName(vehicleName);
  }

  function vehicleClickHandler(vehicle) {
    setVehicleName(vehicleDB[vehicle]);
  }

  return (
    <div className="App">
      <h1>Vehicle viewer</h1>
      <h2>
        Enter a vehicle emoji or Choose any vehicle emoji below to identify it
      </h2>
      <input
        onChange={vehicleInputHandler}
        placeholder="Enter a vehicle emoji"
      />
      <div className="output">{vehicle}</div>

      <section className="section">
        {/* <h3>Vehicles we know!!</h3> */}
        {vehicles.map((vehicle) => {
          return (
            <span
              onClick={() => vehicleClickHandler(vehicle)}
              className="section-item"
              key={vehicle}
            >
              {vehicle}
            </span>
          );
        })}
      </section>
    </div>
  );
}
