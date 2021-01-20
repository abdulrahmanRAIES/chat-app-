import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  input: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  logo: {
    alignSelf: 'center',
    height: Dimensions.get('window').height / 2,
    width: Dimensions.get('window').width / 2,
    top:30
  },
  button: {
    alignSelf: 'center',
  },
  button_text: {
    color: 'white',
  },
});
