import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TextInputMask } from 'react-native-masked-text';

export default function App() {
  const [cell, setCell] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Insira seu número de telefone!</Text>
      <TextInputMask style={styles.celNumber}
        type={'cel-phone'}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99)'
        }}
        value={cell}
        onChangeText={text => setCell(text)}
        prop maxLength={14}
        keyboardType="phone-pad"
        placeholder="(XX) XXXXX-XXXX"
        underlineColorAndroid="transparent"


      />
      <StatusBar style="dark" />
    </View >
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff'
  },
  celNumber: {
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

  },
  container: {
    flex: 1,
    backgroundColor: '#00395c',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
