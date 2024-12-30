import { View, Text,ScrollView,SafeAreaView,StyleSheet ,Platform,StatusBar,FlatList} from 'react-native'
import React from 'react'
import pokemonData from './data.json';
import Index from '..';

export default function FlatLisItems() {
  return (
    <SafeAreaView style={styles.container}>    
        <FlatList 
           // data={pokemonData}
           data={pokemonData}
            renderItem={({item})=>{
                console.log(item.id)
                 return (
            
            <View key={item.id} style={styles.card}>
              <Text style={styles.name}>Name: {item.name}</Text>
              <Text style={styles.type}>Type: {item.type.join(', ')}</Text>
            </View>
           
          );
        
            
            }}
            keyExtractor={(item,Index)=>item.id.toString()}
            ItemSeparatorComponent={<View style={{height:16}}/>}
            ListEmptyComponent={<Text>No Items Found</Text>}
            ListHeaderComponent={<Text style={styles.header}>Pokemon List</Text>}
            ListFooterComponent={<Text style={styles.footer}>Pokemon List Ends</Text>}

        />

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
  },header:{
    fontSize:24,
    textAlign:'center',
  },footer:{
        fontSize:20,
        textAlign:'center',
        marginTop:10,
  }
});