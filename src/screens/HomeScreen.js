import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useWalletConnect } from "react-native-walletconnect";
import LogoutModal from "../components/auth/LogoutModal";
import HomeBodyContainer from "../components/home/HomeBodyContainer";
import HomeHeader from "../components/home/HomeHeader";
import RecentTokenView from "../components/recent-tokens/RecentTokenView";

export default function HomeScreen() {
	const { session } = useWalletConnect()
	const [logoutVisible, setLogoutVisible] = useState(false)
	const navigation = useNavigation()
	useEffect(() => {
		const hasWallet = !!session.length
		if (!hasWallet) navigation.navigate('Authentication')
	}, [session])
	if (session.length === 0) return <></>
	if (session[0].accounts.length === 0) return <></>
	const renderItem = ({ item }) => (
		<TouchableOpacity activeOpacity={0.8} style={{ shadowColor: '#000', shadowRadius: 4, shadowOpacity: 0.3, shadowOffset: {width: 0, height: 4}, height: 150, marginRight: 16 }}>
			<View style={{ borderRadius: 12, overflow: 'hidden', height: 150 }}>
				<Image source={{ uri: item }} style={{ width: 150, height: 150 }}/>
			</View>
		</TouchableOpacity>
	)
	return (
		<View style={{ flex: 1, backgroundColor: '#ffffff' }}>
			<LogoutModal visible={logoutVisible} close={() => setLogoutVisible(false)}/>
			<HomeHeader/>
			<HomeBodyContainer>
				<RecentTokenView/>
			</HomeBodyContainer>
		</View>
	)
}