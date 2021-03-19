import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { connect } from 'react-redux';

class Splash extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        // this.props.navigation.replace("Home");
    }
    render(){
        return(
            <SafeAreaView>
                <View>
                    <Text>Hello Twitter Splash</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default connect( null )( Splash );
