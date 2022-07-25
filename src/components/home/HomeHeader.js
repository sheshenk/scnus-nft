import { View, Text, Image, TouchableOpacity } from "react-native";
import { useWalletConnect } from "react-native-walletconnect";
import logo from '../../../assets/logo.png'

export default function HomeHeader(props) {
	const { session } = useWalletConnect()
	if (session.length === 0) return <></>
	if (session[0].accounts.length === 0) return <></>
	const address = session[0].accounts[0]
	return (
		<View style={{ height: 200, backgroundColor: '#ecf0f1', paddingTop: 40, paddingBottom: 40}}>
			<View style={{ flex: 1, flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 30, paddingVertical: 30 }}>
				<TouchableOpacity activeOpacity={0.8} onPress={props.openLogoutModal}>
					<Text style={{ fontSize: 16, opacity: 0.5}}>Your Wallet Address</Text>
					<Text style={{ fontSize: 24, marginTop: 6, fontWeight: 'bold'}}>{address.slice(0, 8)}...{address.slice(-4)}</Text>
				</TouchableOpacity>
				<Image source={logo} style={{ width: 50, height: 50 }}/>
			</View>
		</View>
	)
}