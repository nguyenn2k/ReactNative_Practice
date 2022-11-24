import { Text,View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { ScrollView } from 'react-native'

export default class SectionList_Color extends Component {
  //Cho mảng:
  ListItem= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  render() {
    return (
    <View style={styles.container}>
        <ScrollView>
          {this.ListItem.map((i)=> (
            <View
              key={i}
              style={{
                borderRadius:10,
                height:100,
                marginHorizontal:20,
                marginVertical:10,
                padding:10,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:`#${Math.floor(Math.random()* 16777215,).toString(
                16,   
                )}`,
                }}
            >
              <Text>item {i}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      marginVertical:50,
    },
})