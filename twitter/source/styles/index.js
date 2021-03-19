import { StyleSheet, Dimensions, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({

	// A
	align_twitter_icon:{
		width: 50,
		height: 50
	},

	// B
	background_blue:{
		alignItems: "center",
		backgroundColor: "#55ACEE",
		justifyContent: "center"
	},

	// F
	flex:{
		flex: 1
	}

})