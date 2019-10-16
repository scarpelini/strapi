import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import ReactGoogleMapLoader from 'react-google-maps-loader';
import ReactGooglePlacesSuggest from 'react-google-places-suggest';
import { Wrapper, MapWrapper, Marker, InputText } from './components';
import { intersection, isEmpty, isObject, isEqual, isFunction } from 'lodash';
import defaultValue from './defaultValue.json';

const DEFAULT_LOCATION = {
  lat: -23.561637,
  lng: -46.65613,
};

const keyCodes = {
  enter: 13,
};

const googleMapsAddressComponentTypes = [
  'route',
  'street_number',
  'country',
  'postal_code',
  'sublocality_level_1',
  'administrative_area_level_1',
  'administrative_area_level_2',
];

const addressComponentTypes = [
  'street',
  'number',
  'country',
  'zip_code',
  'neighborhood',
  'city',
  'state',
];

class Address extends React.PureComponent {
  constructor(props) {
    super(props);
    const parsedValue = this.parseValue(props.value);
    this.state = {
      draftValue: parsedValue,
      inputValue:
        parsedValue && parsedValue.formattedAddress
          ? parsedValue.formattedAddress
          : '',
      search: '',
      error: false,
    };
  }

  componentDidMount() {
    if (!process.env.GOOGLE_MAPS_API_KEY) {
      console.log(
        "Please, configure the environment variable 'GOOGLE_MAPS_API_KEY'"
      );
    }
    this.notifyChanges();
  }

  componentDidUpdate(prevProps) {
    if (
      !isEqual(this.props.value, prevProps.value) &&
      !isEqual(this.props.value, this.state.draftValue)
    ) {
      const parsedValue = this.parseValue(this.props.value);
      this.setState(
        {
          draftValue: parsedValue,
          inputValue:
            parsedValue && parsedValue.formattedAddress
              ? parsedValue.formattedAddress
              : this.state.inputValue,
        },
        this.notifyChanges
      );
    }
  }

  parseValue = value => {
    if (isEmpty(value)) return defaultValue;

    if (isObject(value)) return value;

    try {
      return JSON.parse(value);
    } catch (error) {
      return {};
    }
  };

  notifyChanges = () => {
    this.props.onChange({
      target: {
        name: this.props.name,
        value: this.state.draftValue,
        type: 'json',
      },
    });
  };

  composeAddress = geocodedPrediction => {
    const {
      address_components: components,
      formatted_address: formattedAddress,
      geometry,
    } = geocodedPrediction;

    const geolocation = {
      lat:
        geometry && geometry.location && isFunction(geometry.location.lat)
          ? geometry.location.lat()
          : 0,
      lng:
        geometry && geometry.location && isFunction(geometry.location.lng)
          ? geometry.location.lng()
          : 0,
    };

    const address = components.reduce((accumulator, currentValue) => {
      const currentTypes = intersection(
        currentValue.types,
        googleMapsAddressComponentTypes
      );
      if (!isEmpty(currentTypes)) {
        const [type] = currentTypes;
        if (!isEmpty(type)) {
          const index = googleMapsAddressComponentTypes.indexOf(type);
          if (index !== -1 && addressComponentTypes[index]) {
            return {
              ...accumulator,
              [addressComponentTypes[index]]: currentValue.long_name,
            };
          }
        }
      }
      return accumulator;
    }, {});

    this.setState(
      {
        draftValue: {
          ...address,
          geolocation,
          formattedAddress,
        },
      },
      this.notifyChanges
    );
  };

  handleSelectSuggest = geocodedPrediction => {
    this.setState(
      { search: '', inputValue: geocodedPrediction.formatted_address },
      () => {
        this.composeAddress(geocodedPrediction);
      }
    );
  };

  handleNoResult = () => {};

  // handleDragEnd = event => {
  //   const { lat, lng } = event.center;
  //   this.setState({
  //     center: {
  //       lat: lat(),
  //       lng: lng()
  //     }
  //   });
  // }

  renderMap = () => {
    const { geolocation } = this.state.draftValue;
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
        defaultCenter={DEFAULT_LOCATION}
        defaultZoom={14}
        center={geolocation}
        options={{
          disableDefaultUI: false,
          mapTypeControl: false,
          streetViewControl: false,
        }}
      >
        {geolocation && <Marker lat={geolocation.lat} lng={geolocation.lng} />}
      </GoogleMapReact>
    );
  };

  renderPlacesSuggest = googleMaps => {
    const { inputValue } = this.state;
    return (
      <ReactGooglePlacesSuggest
        googleMaps={googleMaps}
        autocompletionRequest={{
          input: this.state.search,
        }}
        onNoResult={this.handleNoResult}
        onSelectSuggest={this.handleSelectSuggest}
      >
        <InputText
          name="address"
          type="search"
          autoComplete="off"
          placeholder="Enter with the address"
          value={inputValue}
          onKeyDown={event => {
            if (event.keyCode === keyCodes.enter) {
              event.preventDefault();
            }
          }}
          onChange={({ target: { value } }) =>
            this.setState({ search: value, inputValue: value })
          }
        />
      </ReactGooglePlacesSuggest>
    );
  };

  render() {
    return (
      <Wrapper>
        <MapWrapper>
          <ReactGoogleMapLoader
            params={{
              key: process.env.GOOGLE_MAPS_API_KEY,
              libraries: 'places',
            }}
            render={googleMaps =>
              googleMaps && (
                <>
                  {this.renderPlacesSuggest(googleMaps)}
                  {this.renderMap()}
                </>
              )
            }
          />
        </MapWrapper>
      </Wrapper>
    );
  }
}

Address.defaultProps = {
  name: '',
  value: null,
  onChange: () => {},
};

Address.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
  google: PropTypes.any,
  onChange: PropTypes.func,
};

export default Address;
