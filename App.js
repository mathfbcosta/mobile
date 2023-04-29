import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const [phoneNumber, setPhoneNumber] = useState('');
const formatPhoneNumber = (text) => {
  let formattedText = text;

  if (text.length === 3) {
    formattedText = `(${text}) `;
  } else if (text.length === 9) {
    formattedText = `${text}-`;
  } else if (text.length > 14) {
    formattedText = text.substring(0, 14);
  }

  setPhoneNumber(formattedText);
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Insira seu número de telefone!</Text>
      <TextInput
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={formatPhoneNumber}
        type={Number}
        prop maxLength={11}
        style={
          {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderWidth: 0.5,
            borderColor: '#000',
            borderRadius: 5,
            padding: 10,
            margin: 10,
            height: 40,
            width: 140,
            resizeMode: 'stretch',
            alignItems: 'center'
          }
        }
        placeholder="(XXX) XXXXX-XXXX"
        underlineColorAndroid="transparent"
      />

      <StatusBar style="dark" />
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00395c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

