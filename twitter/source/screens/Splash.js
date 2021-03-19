import React, { Component } from 'react';
import { Animated, Easing, Image, SafeAreaView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import RNBootSplash from "react-native-bootsplash";
import styles from '../styles';

class Splash extends Component{
    constructor(props) {
        super(props);
        this.animatedValue = new Animated.Value(0);
    }
    componentDidMount(){
        RNBootSplash.hide();
        var that = this;
        setTimeout(function(){
            Animated.timing(that.animatedValue, {
                toValue: 1,
                duration: 300,
                easing: Easing.ease,
                useNativeDriver: true
            }).start( () => { that.props.navigation.navigate("Home") } )
        }, 3000);
    }
    render(){
        return(
            <View style={[ styles.background_blue, styles.flex ]}>
                <Animated.Image style={[ styles.align_twitter_icon, {
                    transform:[
                        {
                            scale: this.animatedValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 100]
                            })
                        }
                    ]
                } ]} source={ require("../assets/splash_icon.png")} resizeMode="contain"/>
            </View>
        )
    }
}

export default connect( null )( Splash );
