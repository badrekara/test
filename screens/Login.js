import { StyleSheet, Text, View } from 'react-native';
import { Input, Image, Button } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';

const Login = ({ navigation }) => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const signIn = () => {

};

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light'/>
            <Image source={{
                uri:
                "https://www.f-cdn.com/assets/img/facebook/default-04d56222.jpg",
            }}
            style={{ width: 200, height: 200}}
            />
            <View style={styles.inputContainer}>
                 <Input placeholder='Email' 
                   autoFocus 
                   type="email" 
                   value={email} 
                   onChangeText={(text) => setEmail(text)}/>
                 <Input placeholder='Password' 
                   secureTextEntry 
                   type="password"
                   value={password} 
                   onChangeText={(text) => setPassword(text)}/>
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button containerStyle={styles.button} onPress={() => navigation.navigate('Register')} type="outline" title="Register" />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },
    inputContainer: {
        width: 300,

    },
    button: {
        width: 200,
        marginTop: 10,
    },
});

