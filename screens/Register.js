import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";
import { View, StyleSheet } from "react-native";
import { Button, Input, Text } from "@rneui/themed";
import { useState, useLayoutEffect } from "react";
import { auth } from "../firebase";


const Register = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useLayoutEffect(() => {
       navigation.setOptions({
            headerBackTitle: "Login"
       })
    }, [navigation])

    const register = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(authUser => {
            authUser.user.updateProfile({
                displayName: name,
                photoURL: imageUrl || 
                "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
            });
        })
        .catch((error) => alert(error.message));
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50 }}>Create new account</Text>
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Full Name"
                    autoFocus
                    type='text'
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Input
                    placeholder="Email"
                    type='email'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                placeholder="Password"
                type='password'
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <Input
                    placeholder="Profile Picture URL (opt)"
                    type='text'
                    value={imageUrl}
                    onChangeText={(text) => setImageUrl(text)}
                    onSubmitEditing={register}
                />
            </View>
            <Button 
                   containerStyle={styles.button} 
                   raised 
                   onPress={register} 
                   title="Register"
            />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    );
};

export default Register;

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


