import React from 'react'
import { Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../../assets/svg/logo.svg'
import { StatusBar } from 'expo-status-bar';
import { Line, Path, Svg } from 'react-native-svg';

const Welcome = () => {
    const {height,width} = useWindowDimensions()
  return (
    <View style={{flex:1}}>
        <StatusBar style="dark"/>
      <LinearGradient
        colors={['#000D1D', '#001E41']}
        style={{
          position:'absolute',
          height,
          width
          }}
          start={{ x: 0.5, y: 0.1 }}
          end={{ x: 0.5, y: 0.9 }}
      />
       <Logo/>
       <Text style={{color:'white'}}>Empowering you to safeguard your online presence against breaches and threats.</Text>
       <TouchableOpacity>
       <Text style={{color:'white'}}>Get Started</Text>
       </TouchableOpacity>
    </View>
  )
}

export default Welcome
