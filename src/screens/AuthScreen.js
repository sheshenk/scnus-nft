import { StackActions, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import logo from '../../assets/logo.png'
import { useUserContext } from "../services/userContextProvider";

export default function AuthScreen() {
	const { user, login } = useUserContext()
	const viewportHeight = Dimensions.get('window').height
	if (user === undefined) return <></>
	return (
			<View style={{ flex: 1, backgroundColor: '#ffffff' }}>
				<View style={{ backgroundColor: '#dcdde1', width: '100%', alignItems: 'center', justifyContent: 'center', paddingTop: viewportHeight * 0.1, paddingBottom: viewportHeight * 0.2 }}>
					<Image source={logo} style={{ width: viewportHeight / 5, height: viewportHeight / 5, marginTop: -20 }}/>
				</View>
				<ScrollView style={{ marginTop: -viewportHeight * 0.65, borderRadius: 30, paddingTop: viewportHeight * 0.5 }} showsVerticalScrollIndicator={false}>
					<View style={{ backgroundColor: '#ffffff', paddingHorizontal: 40, paddingVertical: 60, borderRadius: 30, alignItems: 'center', minHeight: viewportHeight * 0.6 }}>
						<Text style={{ fontWeight: 'bold', fontSize: 28, textAlign: 'center'}}>Welcome to <Text style={{ color: '#F3904F' }}>ScaNUS</Text></Text>
						<Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center', marginTop: 6, opacity: 0.4 }}>by <Text style={{ color: '#364378' }}>NUS Fintech Lab</Text></Text>
						<Text style={{ fontSize: 18, marginTop: 36, textAlign: 'center' }}>ScaNUS is the first app of its kind that offers NFT rewards for engagement with event information.</Text>
						<Text style={{ fontSize: 18, marginTop: 24, textAlign: 'center' }}>Scan and collect tokens, and enjoy rewards from over 15 F&#38;B outlets.</Text>
						<View style={{ width: '100%', position: 'absolute', height: 110, top: '100%' }}>
							<TouchableOpacity onPress={login} activeOpacity={0.8} style={{ backgroundColor: '#F3904F', marginTop: 48, width: '100%', padding: 20, borderRadius: 12, shadowRadius: 20, shadowColor: '#000', shadowOpacity: 0.2, shadowOffset: { height: 12 } }}>
								<Text style={{ color: '#fff', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Connect Wallet</Text>
							</TouchableOpacity>
							<Text style={{ textAlign: 'center', fontSize: 14, marginTop: 16, opacity: 0.3 }}>We recommend using the MetaMask wallet!</Text>
						</View>
					</View>
				</ScrollView>
			</View>
	)
}