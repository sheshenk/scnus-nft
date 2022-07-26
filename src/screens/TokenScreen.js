import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"
import { Dimensions, Image, Linking, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native"
import back from '../../assets/icons/back.png'

export default function TokenScreen({ route }) {
	const { token } = route.params
	const imageWidth = Dimensions.get('window').width
	const navigation = useNavigation()
	return (
		<>
			<StatusBar barStyle='light-content'/>
			<ScrollView bounces={false}>
				<Image source={{ uri: token.image }} style={{ width: imageWidth, height: imageWidth }}/>
				<LinearGradient style={{ position: 'absolute', width: imageWidth, height: imageWidth }} colors={['rgba(0,0,0,0.7)', 'transparent', 'transparent', 'transparent']}/>
				<View style={{ padding: 30 }}>
					<Text style={{ fontSize: 28, fontWeight: 'bold' }}>{token.name}</Text>
					<Text style={{ fontSize: 12, marginTop: 8, opacity: 0.6, letterSpacing: 0.5, textTransform: 'uppercase' }}>Minted By You: 21/07/2022, 08:55 PM</Text>
					<Text style={{ fontSize: 18, lineHeight: 16 * 1.618, marginTop: 24 }}>{token.description}</Text>
					<View style={{ display: 'flex', flexDirection: 'row', marginTop: 32, marginBottom: 64 }}>
						<TouchableOpacity onPress={() => Linking.openURL(token.website)} activeOpacity={0.8} style={{ backgroundColor: '#364378', padding: 12, borderRadius: 8 }}>
							<Text style={{ color: '#fff', fontSize: 14 }}>Visit Website</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => {}} activeOpacity={0.8} style={{ backgroundColor: '#e67e22', padding: 12, borderRadius: 8, marginLeft: 12 }}>
							<Text style={{ color: '#fff', fontSize: 14 }}>View on Etherscan</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
			<SafeAreaView style={{ position: 'absolute' }}>
				<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 20, paddingTop: 10 }}>
					<TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()} style={{ backgroundColor: 'white', padding: 10, borderRadius: 100 }}>
						<Image source={back} style={{ width: 30, height: 30 }}/>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</>
	)
}