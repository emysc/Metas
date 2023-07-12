import React from 'react';
import { MonoText } from './StyledText';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, View } from 'react-native';

import Colors from '@/constants/Colors';

export default function EditScreenInfo() {
  return (
    <LinearGradient colors={['#DEF3FF', '#91D3F9', '#C74FF1']} style={styles.linearGradient}>
      <View style={styles.tittleLogo}><Image source={require('C:/Users/Pc Ryzen Gaming/Documents/Metas/assets/images/logo.png')}></Image>
        <Text style={styles.appName}>
          Metas
        </Text>
        <Text style={styles.h2}>
          By Emys
        </Text>
      </View>
    </LinearGradient>
  );
}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  appName: {
    fontSize: 65,
    fontFamily: 'Roboto',
    textAlign: 'center',
    color: 'white',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  tittleLogo: {
    width: '100%',
    height: '30%',
    padding: '15%',
    marginTop: '70%',
    marginBottom: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  h2: {
    color: '#D6E7FA',
    fontSize: 20,
    width: '75%',
    textAlign: 'right',
  }

});
