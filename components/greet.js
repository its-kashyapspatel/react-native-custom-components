import {View, Text} from 'react-native';

export default function Greet({name}) {
    return (
        <View style={{flex:1}}>
            <Text>Namaste, {name}</Text>
        </View>
    );
}