import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { useWalletConnect } from "react-native-walletconnect";
import LogoutModal from "../components/auth/LogoutModal";
import HomeBodyContainer from "../components/home/HomeBodyContainer";
import HomeHeader from "../components/home/HomeHeader";
import RecentTokenView from "../components/recent-tokens/RecentTokenView";
import TierView from "../components/tier/TierView";

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
	return (
		<View style={{ flex: 1, backgroundColor: '#ffffff' }}>
			<LogoutModal visible={logoutVisible} close={() => setLogoutVisible(false)}/>
			<HomeHeader openLogoutModal={() => setLogoutVisible(true)}/>
			<HomeBodyContainer>
				<RecentTokenView/>
				<TierView/>
			</HomeBodyContainer>
		</View>
	)
}