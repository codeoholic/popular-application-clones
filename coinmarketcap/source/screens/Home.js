import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { connect } from 'react-redux';

class Home extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <SafeAreaView>
                <View>
                    <Text>Hello Coinmarketcap</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default connect( null )( Home );
