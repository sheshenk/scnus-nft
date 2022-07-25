import { View } from "react-native";

export default function HomeBodyContainer(props) {
	return (
		<View style={{ minHeight: 2000, width: '100%', backgroundColor: '#fff', marginTop: -30, borderRadius: 30, paddingVertical: 30 }}>
			{ props.children }
		</View>
	)
}