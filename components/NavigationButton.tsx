import * as React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import type { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '../App'

type StackNavigation = StackNavigationProp<StackParamList>

type PropsType = {
	text: string
	route: 'Home' | 'Bmi' | 'Calories' | 'Promil'
}

const NavigationButton = ({ text, route }: PropsType) => {
	const navigation = useNavigation<StackNavigation>()

	return (
		<TouchableWithoutFeedback onPress={() => navigation.navigate(route)}>
			<View style={styles.container}>
				<Text style={styles.text}>{text}</Text>
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 300,
		height: 50,
		backgroundColor: '#eb1555',
		marginTop: 40,
		borderRadius: 8,
		justifyContent: 'center',
	},
	text: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 18,
	},
})

export default NavigationButton
