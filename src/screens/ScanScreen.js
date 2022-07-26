import { useNavigation } from "@react-navigation/native"
import { BarCodeScanner } from "expo-barcode-scanner"
import { LinearGradient } from "expo-linear-gradient"
import { useEffect, useState } from "react"
import { Image, SafeAreaView, StatusBar, TouchableOpacity, View } from "react-native"
import back from '../../assets/icons/back.png'
import MintModal from "../components/mint/MintModal"
import { SAMPLE_UNOWNED_TOKENS } from "../constants/sampleTokens"

export default function ScanScreen() {
	const [hasPermission, setHasPermission] = useState(null)
	const [tokenToMint, setTokenToMint] = useState(null)
	const navigation = useNavigation()
	useEffect(() => {
		(async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync()
			setHasPermission(status === 'granted')
		})()
	}, [])
	const handleScan = ({ data }) => {
		const mapped = SAMPLE_UNOWNED_TOKENS.find(t => t.hash === data)
		if (!tokenToMint && mapped) {
			setTokenToMint(mapped)
		}
	}
	return (
		<>
		<MintModal token={tokenToMint} close={() => setTokenToMint(null)}/>
		<StatusBar barStyle='light-content'/>
		<BarCodeScanner onBarCodeScanned={handleScan} style={{ width: '100%', height: '100%' }}/>
		<LinearGradient style={{ position: 'absolute', width: '100%', height: '100%' }} colors={['rgba(0,0,0,0.7)', 'transparent', 'transparent', 'transparent']}/>
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