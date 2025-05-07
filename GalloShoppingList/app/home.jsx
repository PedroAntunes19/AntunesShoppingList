import React from 'react'
import { imageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import {Ionicons} from '@expo/vector-icons';

export default function Home() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <imageBackground
        source={require('../assents/backgroud/jpg')}
        style={{flex:1, justifycontent:'flex-start'}}
        resizeMode='repeat'
        >
          <View Style={styles.header}>
            <Text style={styles.title}>Lista de Produtos</Text>
            <Ionicons name="trash" size={32} color="#fff" />
          </View>
      </imageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 25,
    paddingTop: 50,
    flexDirection: 'row',
    justifycontent:'space-between',
    alignItems: 'center',
    backgroundColor: '#000000c0',
    borderBottomLeftRadius: 30,
    borderBottomReghtRadius: 30,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff'
  }
})