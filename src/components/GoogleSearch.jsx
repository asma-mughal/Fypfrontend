import React, {useState} from 'react'
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
  } from 'react-places-autocomplete';
  import PlacesAutocomplete from 'react-places-autocomplete';
  import styles from '../style';
const GoogleSearch = ({coordinates, setCoordinates,address,setAddress}) => {

const handleSelect = async(value) =>{
const results = await geocodeByAddress(value)
const ll = await getLatLng(results[0])
console.log(ll)
setAddress(value)
setCoordinates(ll)
}
  return (
    <PlacesAutocomplete
    value={address}
    onChange={setAddress}
    onSelect={handleSelect}
  >
    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
      <div>
        <input
         className={`${styles.inputauth}`}
          {...getInputProps({
            placeholder: 'Search your address',
            
          })}
        />
        <div className="autocomplete-dropdown-container">
          {loading && <div>Loading...</div>}
          {suggestions.map(suggestion => {
            const className = suggestion.active
              ? 'suggestion-item--active'
              : 'suggestion-item';
            // inline style for demonstration purpose
            const style = suggestion.active
              ? { backgroundColor: '#fafafa', cursor: 'pointer' }
              : { backgroundColor: '#ffffff', cursor: 'pointer' };
            return (
              <div
                {...getSuggestionItemProps(suggestion, {
                  className,
                  style,
                })}
              >
                <span>{suggestion.description}</span>
              </div>
            );
          })}
        </div>
      </div>
    )}
  </PlacesAutocomplete>
  )
}

export default GoogleSearch
