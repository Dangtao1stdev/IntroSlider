import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import { onBoardings } from './src/assets/data/data'
import SliderIntro from 'react-native-slider-intro'
import { LinearGradient } from 'expo-linear-gradient'
export default function App() {
	_renderItem = (item) => {
		return (
			<View style={styles.slide}>
				<SafeAreaView>
					<Image source={item.img} style={styles.image} />
					<Text style={styles.title}>{item.title}</Text>
					<Text style={styles.text}>{item.description}</Text>
				</SafeAreaView>
			</View>
		)
	}
	_renderNextButton = () => {
		return (
			<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				colors={['#17bde8', '#6dd5f0']}
				style={styles.linearGradient}
			>
				<Text style={styles.btn}>Next</Text>
			</LinearGradient>
		)
	}
	_renderDoneButton = () => {
		return (
			<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				colors={['#17bde8', '#6dd5f0']}
				style={styles.linearGradient}
			>
				<Text style={styles.btn}>Done</Text>
			</LinearGradient>
		)
	}
	const renderSkipButton = () => {
		return (
			<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				colors={['#17bde8', '#6dd5f0']}
				style={styles.linearGradient}
			>
				<Text style={styles.btn}>Skip</Text>
			</LinearGradient>
		)
	}
	return (
		<SliderIntro
			renderItem={_renderItem}
			renderDoneButton={_renderDoneButton}
			renderNextButton={_renderNextButton}
			data={onBoardings}
			// renderSkipButton={renderSkipButton}
			animatedDotBackgroundColor="#1bbee8"
			dotWidth={12}
			navContainerMaxSizePercent={0.25}
			navigationBarHeight={120}
		/>
	)
}

const styles = StyleSheet.create({
	slide: {
		flex: 1,
		alignContent: 'center',
		// justifyContent: 'center',
	},
	title: {
		position: 'absolute',
		bottom: '20%',
		alignSelf: 'center',
		fontSize: 24,
		fontWeight: 'bold',
	},
	text: {
		position: 'absolute',
		bottom: '15%',
		alignSelf: 'center',
		textAlign: 'center',
		fontSize: 15,
		fontWeight: '600',
	},
	image: {
		height: '100%',
		width: '100%',
	},
	btn: {
		fontWeight: 'bold',
		fontSize: 14,
		color: 'white',
	},
	linearGradient: {
		padding: 15,
		borderRadius: 10,
	},
})
