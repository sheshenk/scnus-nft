import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Dimensions, Text, SafeAreaView, Image, Modal, TouchableOpacity } from "react-native";
import { useWalletConnect } from "react-native-walletconnect";
import logo from '../../assets/logo.png'
import logoutIcon from '../../assets/icons/logout.png'
import closeIcon from '../../assets/icons/x.png'

export default function HomeScreen() {
	const { session, killSession } = useWalletConnect()
	const [logoutVisible, setLogoutVisible] = useState(false)
	const navigation = useNavigation()
	useEffect(() => {
		const hasWallet = !!session.length
		if (!hasWallet) navigation.navigate('Authentication')
	}, [session])
	if (session.length === 0) return <></>
	if (session[0].accounts.length === 0) return <></>
	const address = session[0].accounts[0]
	return (
		<View style={{ flex: 1, backgroundColor: '#ffffff' }}>
			<Modal visible={logoutVisible} transparent={true} onRequestClose={() => setLogoutVisible(false)}>
				<View style={{ flex: 1, alignItems: "center", justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
					<View style={{ width: '80%', padding: 30, backgroundColor: '#fff', borderRadius: 10, paddingBottom: 110}}>
						<Text style={{ fontSize: 20, fontWeight: 'bold' }}>Your Wallet Address</Text>
						<Text style={{ fontSize: 16, marginTop: 6 }}>{address}</Text>
						<View style={{ flex: 1, flexDirection: 'row', width: '100%', justifyContent: 'space-between', minHeight: 84 }}>
							<TouchableOpacity onPress={() => setLogoutVisible(false)} style={{ marginTop: 30, backgroundColor: '#eee', padding: 12, borderRadius: 12, width: 54}}>
								<Image source={closeIcon} style={{ width: 30, height: 30, tintColor: '#000' }}/>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => { setLogoutVisible(false); killSession() }} style={{ marginTop: 30, backgroundColor: '#e74c3c', padding: 12, borderRadius: 12, width: 54}}>
								<Image source={logoutIcon} style={{ width: 30, height: 30, tintColor: '#fff' }}/>
							</TouchableOpacity>
						</View>
						
					</View>
				</View>
			</Modal>
			<View style={{ height: 200, backgroundColor: '#dcdde1', paddingTop: 40, paddingBottom: 40}}>
				<View style={{ flex: 1, flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 30, paddingVertical: 30 }}>
					<TouchableOpacity onPress={() => setLogoutVisible(true)}>
						<Text style={{ fontSize: 16, opacity: 0.5}}>Your Wallet Address</Text>
						<Text style={{ fontSize: 24, marginTop: 6, fontWeight: 'bold'}}>{address.slice(0, 8)}...{address.slice(-4)}</Text>
					</TouchableOpacity>
					<Image source={logo} style={{ width: 50, height: 50 }}/>
				</View>
			</View>
			<View style={{ minHeight: 300, width: '100%', backgroundColor: '#fff', marginTop: -30, borderRadius: 30}}>

			</View>
		</View>
		// <SafeAreaView>
		// 	<View style={{ padding: 20 }}>
		// 		<Text>{session[0].accounts[0]}</Text>
		// 		<Button onPress={killSession} title="Log Out"/>
		// 	</View>
		// </SafeAreaView>
	)
}