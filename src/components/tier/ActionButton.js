import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity } from "react-native";

export default function ActionButton(props) {
	const navigation = useNavigation()
	return (
		<TouchableOpacity onPress={() => navigation.navigate(props.name)} activeOpacity={0.8} style={{ height: 70, alignItems: 'center' }}>
			<Image source={props.icon} style={{height: 50, width: 50, tintColor: '#888' }}/>
			<Text style={{ marginTop: 6 }}>{props.name}</Text>
		</TouchableOpacity>
	)
}