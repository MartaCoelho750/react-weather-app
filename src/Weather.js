import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Weather APP</h1>

      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              placeholder="Enter City"
              className="form-control"
            />{" "}
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>{" "}
        </div>{" "}
      </form>
      <h2>Porto</h2>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Mostly Cloudy"
          />
          6ºC
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
