import React from 'react'
import { Text, Button, StyleSheet, ImageBackground, Pressable, Platform } from 'react-native'
import { View } from 'react-native';
import { useEffect, useState } from 'react';
// import DropDownPicker from 'react-native-dropdown-picker';
// import Dropdown from './Dropdown';
import Modaal from './Modaal';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
// import 'localstorage-polyfill'; 
export default function Assistant(props) {
  // console.log(props)

  let [Names, setName] = useState([])
  let names = ["علاء", "اسماعيل", "حسن", "محمد", "احمد", "توفيق"]
  let food = ["لحمة", "فراخ", "ارز", "سمك", "فلفل", "طماطم"]
  let [detail, setDetail] = useState([])


  let categName = names.map(name => name)
  detail = categName.join("\n")
  let ArraySent;
  if (localStorage.getItem("ArraySent") === null) {
    ArraySent = [];
    // console.log("fadyyy")
  }
  else {
    // console.log("msh fadyyy")

    ArraySent = JSON.parse(localStorage.getItem("ArraySent"));

  }
  //////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////// Listen to db /////////////////////////////////////////
  async function listen_db() {
    let response = await fetch("")
    let finalResponse = await response.json()

  }
  const pull_data = (data) => {
    // console.log(data)
    // let arr=[]
    // arr.push(data)

    // console.log(arr)
    //  for(let i=0;i<Names.length;i++)
    //  {
    //  arr.map((a,ind)=>{setName(a)})
    // setName(data)
    console.log(data)
    ArraySent.push(data)
    console.log(ArraySent)
    localStorage.setItem("ArraySent", JSON.stringify(ArraySent))
    console.log(ArraySent)
    setName(ArraySent)
    //  }

    // console.log(Names); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
    // Names.map((name,index)=>{console.log(name)})

  }

  function clear() {
    // setModalVisible(!modalVisible);
    // pathArray=null
    localStorage.clear()
    if (localStorage.getItem("ArraySent") === null) {
      ArraySent = [];
      // console.log("fadyyy")
    }
    else {
      // console.log("msh fadyyy")

      ArraySent = JSON.parse(localStorage.getItem("ArraySent"))

    }
    // console.log(pathArray)
    // console.log("clear")

  }

  let categs = ['أشخاص', 'أفعال', 'حروف_الجر', 'ملابس', 'طعام', 'أجهزة_كهربائية', 'غرف_النوم', 'مطبخ', 'غرفة_المعيشة', 'ألوان', 'أسامي_الغرف', 'أدوات_مدرسية']
  let imgs = [require(`../assets/categ/person.jpg`), require(`../assets/categ/action2.png`), require(`../assets/categ/word.png`), require(`../assets/categ/cloth.png`), require(`../assets/categ/food.jpg`), require(`../assets/categ/device.png`), require(`../assets/categ/room.jpg`),require(`../assets/categ/kitchen.png`), require(`../assets/categ/live.png`), require(`../assets/categ/color.png`), require(`../assets/categ/rooms.png`), require(`../assets/categ/school.png`)]
  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: '#251e51' }}>
        <View style={{ flex: 1, backgroundColor: '#251e51', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.buttonTextStyle}>كون جملتك من التصنيفات التالية</Text>
          <View style={styles.spaceText}>

          <Icon onPress={clear} name='delete' size={30} color="white" />
              {ArraySent.map((name, index) =>
                <Text key={index} style={styles.sentence}>{name}</Text>
              )
              }

          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',       flexDirection:Platform.OS === ('android')?'column':Platform.OS === ('ios')?'column':'row', flexWrap: 'wrap', alignContent: 'space-around', width: '80%' }}>

            <Modaal categ={categs[0]} imag={imgs[0]} func={pull_data} />
            <Modaal categ={categs[1]} imag={imgs[1]} func={pull_data} />
            <Modaal categ={categs[2]} imag={imgs[2]} func={pull_data} />
            <Modaal categ={categs[3]} imag={imgs[3]} func={pull_data} />
            <Modaal categ={categs[4]} imag={imgs[4]} func={pull_data} />
            <Modaal categ={categs[5]} imag={imgs[5]} func={pull_data} />
            <Modaal categ={categs[6]} imag={imgs[6]} func={pull_data} />
            <Modaal categ={categs[7]} imag={imgs[7]} func={pull_data} />
            <Modaal categ={categs[8]} imag={imgs[8]} func={pull_data} />
            <Modaal categ={categs[9]} imag={imgs[9]} func={pull_data} />
            <Modaal categ={categs[10]} imag={imgs[10]} func={pull_data} />
            <Modaal categ={categs[11]} imag={imgs[11]} func={pull_data} />
          </View>
          </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({

  container:
  {

    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,


  },
  buttonStyle: {
    backgroundColor: '#622da4',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 50,
    alignItems: 'center',
    borderRadius: 30,
    // marginLeft: 35,
    // marginRight: 35,
    marginTop: 20,
    marginBottom: 10,
    margin: 'auto',
    justifyContent: 'center',
    width: '40%'
 },
 buttonTextStyle: {
    color: '#FFFFFF',
    //   paddingVertical: 10,
    fontSize: 38,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10


 },
 TextStyle:
 {
    color: '#FFFFFF',
    //   paddingVertical: 10,
    fontSize: 28,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 30
 },
 img:
 {
    width: 200,
    height: 200,
    borderRadius: 200,
    justifyContent: 'center',


 },
 sentence:
 {
    width: 350,
    height: 40,
    marginEnd: 5,
    textAlign: 'center',
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',

 },
 spaceText:
 {
  textAlign:'center',
  display:'flex',
  flexDirection:'row-reverse',
  margin:50,
  padding:10,
  backgroundColor:'#622da4',


 },
  title:

  {
    display: "flex",
    justifyContent: "center",
    fontSize: 30,
    fontWeight: '100',
    fontWeight: 'bold',
    color: 'white'


  },

  space:
  {
    // display:'flex',
    // justifyContent:'center',
    // alignItems:'center',
    width: 200,
    height: 40,
    // margin:'auto'        
  },

  // square:
  // {
  //   width: 1100,
  //   height: 700,

  //   backgroundColor: 'rgba(173, 216, 230,0.5)',
  //   display: 'flex',
  //   justifyContent: 'flex-start',
  //   alignItems: 'center'

  // },

  // div:
  // {
  //   width: 700,
  //   height: 450,
  //   margin: 'auto',
  //   backgroundColor: 'rgb(0, 0, 128)',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center'

  // }

});