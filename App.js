import { NavigationContainer } from "@react-navigation/native";
import WalletConnectProvider from "react-native-walletconnect";
import AppWrapper from "./AppWrapper";

export default function App() {
	return (
		<WalletConnectProvider>
			<NavigationContainer>
				<AppWrapper/>
			</NavigationContainer>
		</WalletConnectProvider>
	)
}