import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar, SectionList } from 'react-native';
import groupedPokemon from './Grouped-data.json';

export default function SectionListItems() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={groupedPokemon}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
            </View>
          );
        }}
        renderSectionHeader={({ section: { type } }) => (
          <Text style={styles.sectionHeader}>{type}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  card: {
    padding: 10,
    backgroundColor: '#f9c2ff',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  cardText: {
    fontSize: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    padding: 8,
  },
});
