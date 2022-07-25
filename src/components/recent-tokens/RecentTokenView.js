import { View, Text, TouchableOpacity } from "react-native";
import RecentTokenList from "./RecentTokenList";

export default function RecentTokenView() {
	return (
		<>
		<View style={{ flex: 1, paddingHorizontal: 30, width: '100%', maxHeight: 40 }}>
			<View style={{ flex: 1, flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between', maxHeight: 40 }}>
				<Text style={{ fontSize: 20, fontWeight: 'bold' }}>Your Tokens</Text>
				<TouchableOpacity style={{ padding: 10, backgroundColor: '#364378', borderRadius: 6 }} activeOpacity={0.8}>
					<Text style={{ fontSize: 14, fontWeight: 'bold', color: '#fff' }}>View All</Text>
				</TouchableOpacity>
			</View>
		</View>
		<RecentTokenList/>
		</>
		
	)
}