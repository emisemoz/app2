import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Button } from '../components/ButtonComponent';
import {Input} from '../components/InputComponent';
import React, {useEffect} from 'react'
import { UseSelector, useDispatch } from 'react-redux';
import {createProfile} from '../../store/actions/profileAction';
import { formatDiagnostic } from 'typescript';

const RegisterScreen =(props) =>{
    const {navigation}= props;
    const dispatch = useDispatch();
    const globalProfileData = useSelector(store => store.profileReducer);
    const onChangeInput = (inputType, value) => {
        createIconSetFromFontello({
            ...form
            [inputType] : value 
        });
    };
    useEffect (() =>{
        console.log(globalProfileData);
    }, [globalProfileData]);
    useEffect(() =>{
        console.log('LOCAL STATE');
        console.log('username: ' +form.username);
        console.log('email: ' +form.email);
        console.log('password: ' +form.password);
    })
    return (
        <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.mainContainer}>
                <Input
                title="Username"
                placeholder="Username"
                onChangeText={
                    (text) => onChangeInput ('username', text)
                }
                />
                <Input 
                title="Email"
                placeholder="Email"
                onChangeText={
                    (text) => onChangeInput ('email', text)
                }
                />
                <Input 
                title="Password"
                placeholder="Password"
                onChangeText={
                    (text) => onChangeInput ('password', text)
                }
                />
            </View>
            <Button 
            text="Register"
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Already have an account?
                </Text>
                <TouchableOpacity
                onPress={
                    () => navigation.navigate('Login')
                        }
            >
            </TouchableOpacity>
            </View>
            <Text style={styles.loginText}>
                Login
            </Text>
        </ScrollView>
    )
}


const styles=StyleSheet.create({
    scroll:{
        flexGrow: 1
    },
    mainContainer:{
        flex: 1,
        backgroundColor: '#E6E6FA',
        alignItems:'center'
    },
    inputContainer: {
        padding: 16,
        width: '100%'
        },
        textContainer: {
        flexDirection: 'row',
        marginTop: 16
        },
        text: {
        fontSize: 16
        },
        loginText: {
        color: '#1A5B0A',
        fontSize: 16
        }
})
export default RegisterScreen;