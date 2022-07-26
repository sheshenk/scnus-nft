import { View } from "react-native";
import HomeBodyContainer from "../components/home/HomeBodyContainer";
import HomeHeader from "../components/home/HomeHeader";
import RecentTokenView from "../components/recent-tokens/RecentTokenView";
import TierView from "../components/tier/TierView";

export default function HomeScreen() {
	return (
		<View style={{ flex: 1, backgroundColor: '#ffffff' }}>
			<HomeHeader/>
			<HomeBodyContainer>
				<RecentTokenView/>
				<TierView/>
			</HomeBodyContainer>
		</View>
	)
}