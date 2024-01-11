import React, { Component } from 'react'; import { Text, View } from 'react-native';
import {Text, 
    View, 
    StyleSheet, 
    SafeAreaView, 
    TouchableOpacity, 
    StatusBar, 
    Platform, 
    ImageBackground, 
    Image} 
    from 'react-native';

export default class HomeScreen extends Component{
render() {
    return ( 
    <View>
    <SafeAreaView/>
    <ImageBackground source={require('C:/Users/vvyah/Downloads/stellar/assets/stars.gif')} style={styles.backgroundImage}>
        <Text style={styles.titleText}> Stellar App</Text>

    <TouchableOpacity 
    style={styles.routeCard} onPress={() =>
      this.props.navigation.navigate("DailyPic")
    }>
        <Text style={styles.routeText}>Daily Pic</Text>
        <Image source={require('C:/Users/vvyah/Downloads/stellar/assets/daily_pictures.png')} style={{width: 80, height:80}}></Image>
    </TouchableOpacity>

    <TouchableOpacity 
    style={styles.routeCard} onPress={() =>
      this.props.navigation.navigate("SpaceCrafts")
    }>
        <Text style={styles.routeText}>Space Craft</Text>
        <Image source={require('C:/Users/vvyah/Downloads/stellar/assets/space_crafts.png')} style={{width: 80, height:80}}></Image>
    </TouchableOpacity>

    <TouchableOpacity 
    style={styles.routeCard} onPress={() =>
      this.props.navigation.navigate("StarMap")
    }>
        <Text style={styles.routeText}>Star Map</Text>
        <Image source={require('C:/Users/vvyah/Downloads/stellar/assets/star_map.png')} style={{width: 80, height:80}}></Image>
    </TouchableOpacity>

    </ImageBackground>
</View>
    )
}
}

const styles= StyleSheet.create({
    container:{
        flex:1
    },
    backgroundImage:{
        flex:1,
       resizeMode:"cover"
    },
    titleText:{
        fontSize:20,
        fontWeight:"bold",
        color:"white"
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    }
})