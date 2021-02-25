import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

class Splash extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.navigation.replace("Home");
    }
    render(){
        return(
            <View/>
        )
    }
}

export default connect( null )( Splash );
