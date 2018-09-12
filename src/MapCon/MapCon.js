import React, { Component } from "react";
import "./MapCon.css";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class MapCon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="mapStyle ">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyANwFiiJVgUV6ztft88hlU3WsofeUXCKuM" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text={""} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapCon;
