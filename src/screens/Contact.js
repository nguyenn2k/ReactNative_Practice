import { Text, View, Image, StyleSheet} from 'react-native'
import React, { Component } from 'react'

export default class Contact extends Component {
    datas = [
        {
            title:"Bill Gates",
            desc:"Microsoft Company",
            image:require("../assets/contact/billgates.jpeg")
        },
        {
            title:"Elon musk",
            desc:"Tesla Company",
            image:require("../assets/contact/elon_musk.jpeg")
        },
        {
            title:"Jeff Bezos",
            desc:"Amazon Company",
            image:require("../assets/contact/jeff.jpeg")
        },
        {
            title:"Joe Belfiore",
            desc:"Microsoft Company",
            image:require("../assets/contact/joe_belfiore.webp")
        },
        {
            title:"Joe Biden",
            desc:"President American",
            image:require("../assets/contact/joe_biden.jpeg")
        },
        {
            title:"Mark Zuckerberg",
            desc:"Meta Company",
            image:require("../assets/contact/mark.jpeg")
        },
        {
            title:"Vladimir Putin",
            desc:"President Russia",
            image:require("../assets/contact/putin.jpeg")
        },
        
    ]
    Header =() =>{
        return (
            <View style={styles.header}>
                <Image style={styles.header__icon} source={require('../assets/contact/menu.png')}/>
                <Text style={styles.header__title}>Contact</Text>
                <Image style={styles.header__icon} source={require('../assets/contact/search.png')}/>
            </View>
        )
    }
    //Đại diện cho 1 giao diện item:
    items = (data,index)=>{
        return(
            <View style={styles.item}>
                <Image style={styles.item__img} source={data.image}/>
                <View style={styles.item__body}>
                    <Text style={styles.item__body__title}>{data.title}</Text>
                    <Text style={styles.item__body__desc}>{data.desc}</Text>
                </View>
            </View>
        )
    }
    ContactList = ()=>{
        return this.datas.map((data, index)=>(
            this.items(data,index)
        ))
    }
  render() {
    return (
      <View style={styles.container}>
        {this.Header()}
        {this.ContactList()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f6f6f6'
    },
    header:{
        //Mặc định là Flex:
        //Chiều
        flexDirection:'row',
        //Màu nền:
        backgroundColor:'white',
        //Trục chính (Ngang)
        justifyContent:'space-between',
        //bên phải và bên trái có padding:
        paddingLeft:20,
        paddingRight:20,
        //Platform:
        height: Platform.OS =='ios' ? 100 : 56,
        //
        paddingTop: Platform.OS =='ios' ? 64 : 0,
        //Canh giữa theo chiều dọc:
        alignItems:'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.3
    },
    header__icon:{
        width:24,
        height:24,
    },
    header__title:{
        fontSize:16,
        fontWeight:'500'
    },
    item:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:16,
        marginRight:16,
        marginTop:16,
    },
    item__body:{
        marginLeft:16,
    },
    item__body__title:{
        fontSize:16,
        fontWeight: '500',
    },
    item__body__desc:{
        fontSize:14,
        color:'#CCC'
    },
    item__img:{
        height:56,
        width:56,
        borderRadius:28,
    }
})