import React, { Component } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import RNBootSplash from "react-native-bootsplash";
import styles from '../styles';

class Splash extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        // this.props.navigation.replace("Home");
        RNBootSplash.hide({ fade: true });
    }
    render(){
        return(
            <View style={[ styles.background_blue, styles.flex ]}>
                <Image style={ styles.align_twitter_icon } source={ require("../assets/splash_icon.png")} resizeMode="contain"/>
            </View>
        )
    }
}

export default connect( null )( Splash );
