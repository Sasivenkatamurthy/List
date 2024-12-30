import { View, Text, StyleSheet, StatusBar, Platform, ScrollView,SafeAreaView } from 'react-native';
import React from 'react';
import pokemonData from './data.json';

export default function List() {
  return (
    <SafeAreaView style={styles.container}>

      <ScrollView style={styles.ScrollView}>
      {
        pokemonData.map((pokemon) => {
          return (
            
            <View key={pokemon.id} style={styles.card}>
              <Text style={styles.name}>Name: {pokemon.name}</Text>
              <Text style={styles.type}>Type: {pokemon.type.join(', ')}</Text>
            </View>
           
          );
        })
      }
       </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    
    marginTop: Platform.OS === 'android' ? 45 : 0,
    paddingTop:StatusBar.currentHeight
  },
  card: {
    padding: 10,
    margin: 10,
    border:40,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
   
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  type: {
    fontSize: 16,
    color: 'gray',
  },ScrollView:{
    paddingHorizontal:16,
  }
});