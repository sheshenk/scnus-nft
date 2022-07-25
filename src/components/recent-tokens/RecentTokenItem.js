import { View, Image, TouchableOpacity } from "react-native";

export default function RecentTokenItem(props) {
	return (
		<TouchableOpacity activeOpacity={0.8} style={{ shadowColor: '#000', shadowRadius: 4, shadowOpacity: 0.3, shadowOffset: {width: 0, height: 4}, height: 150, marginRight: 16 }}>
			<View style={{ borderRadius: 12, overflow: 'hidden', height: 150 }}>
				<Image source={{ uri: props.token }} style={{ width: 150, height: 150 }}/>
			</View>
		</TouchableOpacity>
	)
}