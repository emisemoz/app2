import { Image, TouchableOpacity, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {ButtonComponent} from '../components/ButtonComponent';
import {InputComponent} from '../components/InputComponent';
const LoginScreen = () => {
    const {navigation}=props;
return (
    <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image
                style={styles.image}
                source={require('../../../assets/images/login.png')}
                />
            </View>
            <View style={styles.inputContainer}>
                <InputComponent 
                title="Username"
                placeholder="Username"
                />
                <InputComponent 
                title="Password"
                placeholder="Password"
                />
            </View>
            <ButtonComponent 
            text="Login"
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Dont have an account?
                </Text>
            <TouchableOpacity
                onPress={
                () => navigation.navigate('Register')
                        }
            >
            <Text style={styles.registerText}>
            Register</Text>
            </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
)
}

export default LoginScreen

const styles = StyleSheet.create({
    scroll: {
        flexGrow: 1
    },
    mainContainer:{
        backgroundColor: '#E6E6FA',
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
    },
    image: {
        width: 180,
        height: 180
    },
    inputContainer: {
        padding: 16,
        width: '100%'
    },
    textContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    text:{
        fontSize: 16
    },
    registerText: {
        color: '#1A5B0A',
        fontSize: 16
    }
});