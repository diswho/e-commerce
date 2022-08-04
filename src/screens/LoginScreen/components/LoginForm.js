import { KeyboardAvoidingView, Text, View } from "react-native"

export const LoginForm = () => {
    return (
        <KeyboardAvoidingView>
            {/*  */}
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    group: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginVertical: 10,
    },
    header: {
      marginTop: height * 0.2,
      marginBottom: 10,
      marginHorizontal: 20,
    },
    title: {
      color: Colors.light_green,
      fontSize: 40,
      letterSpacing: 5,
      fontFamily: 'Roboto-Bold',
      textAlign: 'center',
    },
    text: {
      color: '#fff',
    },
    signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      flexDirection: 'row',
      backgroundColor: Colors.lighter_green,
    },
    textSign: {
      fontSize: 15,
      color: '#fff',
      fontFamily: 'Roboto-Medium',
    },
    textSignSmall: {
      color: Colors.lighter_green,
      textAlign: 'center',
    },
    center: {
      alignItems: 'center',
    },
    circleImage: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      padding: 20,
      borderRadius: 55,
      borderStyle: 'dashed',
      borderColor: Colors.grey,
    },
    faceid: {
      resizeMode: 'contain',
      height: 70,
      width: 70,
    },
    loginOpt: {
      color: Colors.lighter_green,
      fontFamily: 'Roboto-Medium',
      marginBottom: 10,
    },
  });