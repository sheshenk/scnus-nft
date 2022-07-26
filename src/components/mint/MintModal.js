import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import close from '../../../assets/icons/x.png'

export default function MintModal(props) {
	const mint = () => {
		props.close()
	}
	return (
		<Modal visible={!!props.token} transparent={true} onRequestClose={props.close}>
			{
				props.token && (
					<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
						<View style={{ width: '90%', backgroundColor: 'white', borderRadius: 10 }}>
							<View style={{ display: 'flex', padding: 30, paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
								<Text style={{ fontSize: 20, fontWeight: 'bold' }}>Mint Token</Text>
								<TouchableOpacity onPress={props.close}>
									<Image source={close} style={{ width: 30, height: 30 }}/>
								</TouchableOpacity>
							</View>
							<View style={{ padding: 30, paddingTop: 10 }}>
								<Text style={{ fontSize: 18, lineHeight: 18*1.618 }}>You found a new token! You are now able to mint <Text style={{ fontWeight: 'bold' }}>{props.token.name}</Text></Text>
								<TouchableOpacity onPress={mint} activeOpacity={0.8} style={{ backgroundColor: '#364378', padding: 12, marginTop: 24, alignItems: 'center', width: 120, borderRadius: 12 }}>
									<Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Mint!</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				)
			}
		</Modal>
	)
}