import { Image, TouchableOpacity, ScrollView, StyleSheet, Text, View, useEffect } from 'react-native'
import React, {useState} from 'react'
import { UseSelector } from 'react-redux';
import {ButtonComponent} from '../components/ButtonComponent';
import {InputComponent} from '../components/InputComponent';
const LoginScreen = (props) => {
    const {navigation}=props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const checkData = () => {
        if(username === '' || password === '' || ){
            alert('Please input your username and password!');
        }
        else if ((username.toLowerCase()===
        globalProfileData.username.toLowerCase())
        && (password.toLocaleLowerCase()===
        globalProfileData.password.toLowerCase()))
        {
            navigation.navigate('Home');
        }
        else{
            alert('Your username and password didnt match!');
        };
        setUsername('');
        setPassword('');
    };
    }
    const [
        isPassVisible,
        setIsPassVisible
    ] = useState(false);
    const globalProfileData = useSelector(store=>
        store.profileReducer);
        useEffect( () => {
            console.log('GLOBAL STATE ON LOGIN PAGE');
            console.log(globalProfileData);
        }, [globalProfileData]);
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
                onChangeText= {(text) => setUsername(text)}
                value={username}
                />
                <InputComponent 
                title="Password"
                placeholder="Password"
                isPassword={true}
                secureTextEntry={isPassVisible ? false : true}
                iconName={ isPassVisible ? 'eye-off' : 'eye'}
                onPress={ () => setIsPassVisible(!isPassVisible)}
                onChangeText= {(text) => setPassword(text)}
                value={password}
                />
            </View>
            <ButtonComponent 
            text="Login"
            onPress= { () => checkData()}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Dont have an account?
                </Text>
            <TouchableOpacity
                onPress={
                () => navigation.navigate('Register')}
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