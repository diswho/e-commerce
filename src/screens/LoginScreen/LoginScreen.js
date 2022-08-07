import { StyleSheet, Text, View } from "react-native"
import { LoginForm } from "./components/LoginForm";

export const LoginScreen = () => {
    // <View style={styles.container}>
    return (
        <View >
            <LoginForm />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});