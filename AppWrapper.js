import { useWalletConnect } from "react-native-walletconnect";
import AuthScreen from "./src/screens/AuthScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function AppWrapper() {
	const { session } = useWalletConnect()
	const hasWallet = !!session.length
	return (
		<Stack.Navigator initialRouteName={!hasWallet ? 'Authentication' : 'Home'} screenOptions={{ headerShown: false, animation: 'none' }}>
			<Stack.Screen name="Authentication" component={AuthScreen}/>
			<Stack.Screen name="Home" component={HomeScreen}/>
		</Stack.Navigator>
	)
}