import * as Notifications from 'expo-notifications';
// import * as Permissions from 'expo-permissions';

const AskingNotificationPermissonToken = async () => {
  let token;
  let { status } = await Notifications.requestPermissionsAsync()
  // console.log(status);
  if (status !== 'granted') {
    console.log('Failed to get push token for push notification!');
    return (token = '');
  }
  token = (await Notifications.getExpoPushTokenAsync()).data;
  return token;
};

export default AskingNotificationPermissonToken;
