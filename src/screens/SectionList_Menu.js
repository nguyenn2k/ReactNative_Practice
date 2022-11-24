import { Text, StyleSheet, View, SectionList } from 'react-native'
import React, { Component } from 'react'

export default class SectionList_Menu extends Component {
    //DATA:
    listItem=[
        {
            title:'Món tráng miệng',
            data:[
                {id: '1.1', item: 'Trái cây'},
                {id: '1.2', item: 'Sữa chua'},
                {id: '1.3', item: 'Bánh Tráng Trộn'},
                {id: '1.4', item: 'Nước Ép Hoa Quả'},
            ],
        },
        {
            title:'Món Chính',
            data:[
                {id: '2.1', item: 'Bánh Canh Cua'},
                {id: '2.2', item: 'Mì Hoàn Thánh'},
                {id: '2.3', item: 'Bánh Mì Trứng'},
            ],
        },
        {
            title:'Món Ăn Đặc Sản Thủ Đô',
            data:[
                {id: 'HN1', item: 'Bún Ốc'},
                {id: 'HN2', item: 'Phở Thìn'},
                {id: 'HN3', item: 'Phở Cuốn'},
                {id: 'HN4', item: 'Bún Chả'},
            ],
        },
        {
            title:'Món Ăn Đặc Sản Vũng Tàu',
            data:[
                {id: 'VT1', item: 'Mực 1 nắng'},
                {id: 'VT2', item: 'Bún Hải Sản Bề Bề'},
                {id: 'VT3', item: 'Ốc Vú Nàng'},
                {id: 'VT4', item: 'Gỏi Cá Mai'},
            ],
        },
    ]
    //RenderItem:
    renderItem ({item}){
        return(
            <View style={styles.item}>
                <Text>{item.item}</Text>
            </View>
        )
    }
    //RenderSectionHeader:
    renderSectionHeader({section}){
        <View 
            style={{
            height:50,
            marginHorizontal:20,
            marginVertical:10,
            padding:10,
            justifyContent:'center',
            //Random Color:
            backgroundColor:`#${Math.floor(Math.random()* 16777215,).toString(
            16,   
            )}`,
            }}
        >
            <Text>{section.title}</Text>
        </View>
    }
  render() {
    return (
      <View style={styles.container}>
        <SectionList
            sections={this.listItem}
            stickyHeaderIndices={false}
            keyExtractor={(item,i)=>item.id}
            renderItem= {this.renderItem}
            renderSectionHeader={this.renderSectionHeader}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginVertical:50,
    },
    item:{
        borderRadius:10,
        height:50,
        borderWidth:1,
        marginHorizontal:20,
        marginVertical:10,
        padding:10,
    },
})
