/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  SectionList
} from 'react-native';
import data from './data';

export default class sectionListExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.title}>{section.title}</Text>}
          ItemSeparatorComponent={()=><View style={styles.itemSeparator}/>}
          keyExtractor={(item)=>item.name}
          sections={data}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    backgroundColor: '#F5FCFF',
  },
  title:{
    backgroundColor:'red',
    color:'white',
    padding : 10
  },
  item :{
    padding:10
  },
  itemSeparator:{
    height:1,
    width:'100%',
    backgroundColor:'#E8E8E8'
  },
});

AppRegistry.registerComponent('sectionListExample', () => sectionListExample);
