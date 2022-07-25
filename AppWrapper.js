import { useWalletConnect } from "react-native-walletconnect";
import AuthScreen from "./src/screens/AuthScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScanScreen from "./src/screens/ScanScreen";
import MerchantScreen from "./src/screens/MerchantScreen";
import TokensScreen from "./src/screens/TokensScreen";
import TokenScreen from "./src/screens/TokenScreen";

const Stack = createNativeStackNavigator()

export default function AppWrapper() {
	const { session } = useWalletConnect()
	const hasWallet = !!session.length
	return (
		<Stack.Navigator initialRouteName={!hasWallet ? 'Authentication' : 'Home'}>
			<Stack.Screen name="Authentication" component={AuthScreen} options={{ headerShown: false, animation: 'none' }}/>
			<Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, animation: 'none' }}/>
			<Stack.Screen name="Scan" component={ScanScreen}/>
			<Stack.Screen name="Merchants" component={MerchantScreen}/>
			<Stack.Screen name="Tokens" component={TokensScreen}/>
			<Stack.Screen name="Token" component={TokenScreen}/>
		</Stack.Navigator>
	)
}