import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Button, Text, SafeAreaView, View } from "react-native";
import { useWalletConnect } from "react-native-walletconnect";

export default function HomeScreen() {
	const { session, killSession } = useWalletConnect()
	const navigation = useNavigation()
	useEffect(() => {
		const hasWallet = !!session.length
		if (!hasWallet) navigation.navigate('Authentication')
	}, [session])
	if (session.length === 0) return <></>
	if (session[0].accounts.length === 0) return <></>
	return (
		<SafeAreaView>
			<View style={{ padding: 20 }}>
				<Text>{session[0].accounts[0]}</Text>
				<Button onPress={killSession} title="Log Out"/>
			</View>
		</SafeAreaView>
	)
}