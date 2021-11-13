import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
const defaultLocations = [


  {
    id: 'default-varmland',
    predictionPlace: {
      address: 'Värmlands län, Sverige',
      bounds: new LatLngBounds(new LatLng(61.0550439996377, 14.4757757321121), new LatLng(58.7255580012549, 11.6911350013191)),
    },
  },
  {
    id: 'default-vasterbotten',
    predictionPlace: {
      address: 'Västerbotten , Sverige',
      bounds: new LatLngBounds(new LatLng(66.3463529855209, 21.7162371914268), new LatLng(63.3615345015914, 14.3263923634416)),
        
    },
    
  },
 
  {
    id: 'default-vasternorrland',
    predictionPlace: {
      address: 'Västernorrland, Sverige',
      bounds: new LatLngBounds(new LatLng(64.0281739572981, 19.3798837814855), new LatLng(62.08312974677823, 14.7799187594565)),
    },
   
  },
  {
    id: 'default-vasatra-gotaland',
    predictionPlace: {
      address: 'Västra Götalands län, Sverige',
      bounds: new LatLngBounds(new LatLng(59.2634479992296, 14.7789408992402), new LatLng(57.1458160702656, 10.8383672184931)),
    },
  },


];
export default defaultLocations;
