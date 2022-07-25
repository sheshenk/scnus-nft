import { View, Text, Image, Modal, TouchableOpacity } from "react-native";
import { useWalletConnect } from "react-native-walletconnect";
import logoutIcon from '../../../assets/icons/logout.png'
import closeIcon from '../../../assets/icons/x.png'

export default function LogoutModal(props) {
	const { session, killSession } = useWalletConnect()
	if (session.length === 0) return <></>
	if (session[0].accounts.length === 0) return <></>
	const address = session[0].accounts[0]
	return (
		<Modal visible={props.visible} transparent={true} onRequestClose={props.close}>
			<View style={{ flex: 1, alignItems: "center", justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
				<View style={{ width: '80%', padding: 30, backgroundColor: '#fff', borderRadius: 10, paddingBottom: 110}}>
					<Text style={{ fontSize: 20, fontWeight: 'bold' }}>Your Wallet Address</Text>
					<Text style={{ fontSize: 16, marginTop: 6 }}>{address}</Text>
					<View style={{ flex: 1, flexDirection: 'row', width: '100%', justifyContent: 'space-between', minHeight: 84 }}>
						<TouchableOpacity activeOpacity={0.8} onPress={props.close} style={{ marginTop: 30, backgroundColor: '#eee', padding: 12, borderRadius: 12, width: 54}}>
							<Image source={closeIcon} style={{ width: 30, height: 30, tintColor: '#000' }}/>
						</TouchableOpacity>
						<TouchableOpacity activeOpacity={0.8} onPress={() => { props.close(); killSession() }} style={{ marginTop: 30, backgroundColor: '#e74c3c', padding: 12, borderRadius: 12, width: 54}}>
							<Image source={logoutIcon} style={{ width: 30, height: 30, tintColor: '#fff' }}/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Modal>
	)
}