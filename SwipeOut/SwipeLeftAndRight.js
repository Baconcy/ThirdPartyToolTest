/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//npm install --save react-native-swipeout
//https://github.com/dancormier/react-native-swipeout

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';

let {width,height} = Dimensions.get('window');
import SwipeView from 'react-native-swipeout'

export default class SwipeLeftAndRight extends Component {


    /*
    * Prop	            Type	Optional	Default	        Description
     backgroundColor	string	Yes	        '#b6bec0'	    background color
     color	            string	Yes	        '#ffffff'	    text color
     component	        string	Yes	        null	        pass custom component to button
     onPress	        func	Yes	        null	        function executed onPress
     text	            string	Yes	        'Click Me'	    text
     type	            string	Yes	        'default'	    default, primary, secondary
     underlayColor	    string	Yes	        null	        button underlay color on press
     disabled	        bool	Yes	        false	        disable button
     */
    constructor(props){
        super(props);
        this.state={
            Rightbuttons:[
                {
                    backgroundColor:'red',
                    color:'white',
                    text:'Rbutton1',
                    onPress:()=>{this.aaaa()}
                },
                {
                    backgroundColor:'blue',
                    color:'white',
                    text:'Rbutton2',
                    onPress:()=>{this.aaaa()}
                },
                {
                    backgroundColor:'green',
                    color:'white',
                    text:'Rbutton3',
                    onPress:()=>{this.aaaa()}
                },
            ],
            Leftbuttons:[
                {
                    backgroundColor:'red',
                    color:'white',
                    text:'Lbutton1',
                    onPress:()=>{this.aaaa()}
                },
                {
                    backgroundColor:'blue',
                    color:'white',
                    text:'Lbutton2',
                    onPress:()=>{this.aaaa()}
                },
                {
                    backgroundColor:'green',
                    color:'white',
                    text:'Lbutton3',
                    onPress:()=>{this.aaaa()}
                },
            ]
        }

        this.aaaa = this.aaaa.bind(this);
    }

    aaaa(){
     console.log('123');
    }
    render() {
        return (
            <View style={styles.container}>

                <SwipeView right={this.state.Rightbuttons}>

                    <View style={styles.swipeStyle}>

                        <Text>swipe me left</Text>

                    </View>

                </SwipeView>

                <SwipeView left={this.state.Leftbuttons}>

                    <View style={styles.swipeStyle}>

                        <Text style={{right:10,position:'absolute'}}>swipe me right</Text>

                    </View>

                </SwipeView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:20,
        backgroundColor: '#F5FCFF',
    },
    swipeStyle:{
        backgroundColor:'yellow',
        width:width,
        height:40,
        justifyContent:'center'
    }
})


AppRegistry.registerComponent('ThirdPartyToolTest', () => SwipeLeftAndRight);
