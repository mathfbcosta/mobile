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
        placeholderTextColor="#e5e5e5"
        underlineColorAndroid="transparent"


      />
      <StatusBar style="dark" />
    </View >
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 25

  },
  celNumber: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00395c',
    borderWidth: 0.5,
    borderColor: '#00395c',
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    height: 40,
    width: 140,
    alignItems: 'center'

  },
  container: {
    flex: 1,
    backgroundColor: '#00395c',
    alignItems: 'center',
    justifyContent: 'center',
  }
});