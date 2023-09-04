import {View} from 'react-native';

import Greet from './components/greet.js';

export default function App() {
  return (
    <View style={{flex:1, backgroundColor:"lightblue", padding:60}}>
      <Greet name='Kashyap'/>
      <Greet name='Dev'/>
    </View>
  );
}