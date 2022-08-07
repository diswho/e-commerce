import { Ionicons } from "@expo/vector-icons";
import { Dimensions, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { TouchableWithoutFeedback } from "react-native-web";
import Colors from "../../../utils/Colors";

const { height } = Dimensions.get('window');

export const LoginForm = (props) => {
  const { handleSubmit } = props;
  const submit = async (values) => {
    // TODO: not finish
  }
  return (
    <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'position' : 'height'}>
      <TouchableOpacity onPress={() => { }}
        style={{ position: 'absolute', top: 50, left: 20 }}>
        <Ionicons name="ios-arrow-back" size={35} />
      </TouchableOpacity>
      <View>
        <Text>
          LoginForm
        </Text>

      </View>
      <ScrollView>
        <TouchableWithoutFeedback >
          <View style={{
            flexDirection: 'column',
            marginHorizontal: 10,
            zIndex: -1,
          }}>
            <TouchableOpacity
              onPress={() => { }}
              style={{ marginVertical: 10, alignItems: 'center' }}
            >
              {/*  */}
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
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

