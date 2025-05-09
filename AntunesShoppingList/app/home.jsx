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

          <View style={{ flex: 1 }}></View>

          <View style={styles.footer}>
            <View style={styles.inputContainer}>
              <TextInput color="#fff" fontSize={18}/>
            </View>
            <TouchebleOpacity style={styles.iconContainer} >
              <Ionicons nome='add' size={36} color='#fff' />
            </TouchebleOpacity>
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
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    widht: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000000c0',
    borderTopleftRadius: 30,
    bordeTopRightRadius: 30 ,

  },
  inputContainer: {
    backgroundColor: "#000",
    elevation: 40,
    flex: 1,
    Height: 50,
    marginVertical: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
    justifycontent: 'center',
  },
  iconContainer: {
    height: 50,
    widht : 50,
    backgroundColor: '#000',
    borderRadius: 25,
    elevation: 40,
    justifycontent: 'center',
    alignItems: 'center',    
  }

})