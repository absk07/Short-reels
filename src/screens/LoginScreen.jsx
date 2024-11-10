import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Spacer from "../components/Spacer";
import Theme from "../../Theme";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google'
import AsyncStorage from '@react-native-async-storage/async-storage'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// WebBrowser.maybeCompleteAuthSession();


const LoginScreen = () => {
  const navigation = useNavigation();
  const [mobileNo, setMobileNo] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  //hooks
  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   webClientId: "821910283348-q8go6gnm9bh8o8oddjgfkvgm8fo0mrdo.apps.googleusercontent.com",
  //   androidClientId: "821910283348-7bub1pfseoc52sgpbetc373rcfbmocms.apps.googleusercontent.com",
  //   iosClientId: "821910283348-klpdbiepm4plngvn4g455k5vasliqief.apps.googleusercontent.com"
  // })

  // useEffect(() => { 
  //   handleGoogleSignIn(); 
  // }, [response]);

  // async function handleGoogleSignIn() {
  //   const user = await AsyncStorage.getItem('user');
  //   if (!user) {
  //     if (response?.type === 'success') {
  //       await getUserInfo(response.authentication.accessToken);
  //     }
  //   } else {
  //     setUserInfo(JSON.parse(user));
  //   }
  // }

  // const getUserInfo = async (token) => {
  //   if (!token) return;
  //   try {
  //     const response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
  //       headers: { Authorization: `Bearer ${token}` }
  //     })
  //     const user = await response.json();
  //     await AsyncStorage.setItem('user', JSON.stringify(user));
  //     setUserInfo(user);
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "205220877887-5qn5h85j5q7c9quah9tarjlquv2954si.apps.googleusercontent.com",
      androidClientId: "205220877887-3a1e5reh8rtg1pdn000fk75gasu2s9j1.apps.googleusercontent.com"
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const usrInfo = await GoogleSignin.signIn();
      setUserInfo(usrInfo);
      console.log(usrInfo)
      navigation.navigate('Video');
    } catch (error) {
      console.log('Problem during sigin using google', error)
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end",
          marginBottom: 50,
        }}>
        <Spacer>
          <View style={styles.iconContainer}>
            <Image
              source={require("../../assets/logo.png")}
              style={{
                width: 200,
                height: 100,
                marginTop: 100,
                objectFit: "contain",
              }}
            />
          </View>
        </Spacer>
        <Spacer>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Roboto_700Bold",
              paddingHorizontal: 10,
            }}>
            Login or Signup with Flicka
          </Text>
        </Spacer>
        <TextInput
          style={Theme.inputBox}
          placeholder="Mobile number"
          value={mobileNo}
          onChangeText={setMobileNo}
          keyboardType="numeric"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Spacer>
          <TouchableOpacity
            style={Theme.Button}
            onPress={() => navigation.navigate("OTP")}
          >
            <Text style={Theme.ButtonText}>
              <Ionicons name="phone-portrait-outline" size={20} color="white" />{" "}
              Continue with phone number
            </Text>
          </TouchableOpacity>
        </Spacer>
        <Spacer>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 1, height: 1, backgroundColor: "grey" }} />
            <View>
              <Text style={{ width: 50, textAlign: "center", color: "grey" }}>
                OR
              </Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: "grey" }} />
          </View>
        </Spacer>
        <Spacer>
          <TouchableOpacity
            style={Theme.Button}
            onPress={signIn}>
            <Text style={Theme.ButtonText}>
              <Ionicons name="logo-google" size={20} color="white" /> Sign in
              with Google
            </Text>
          </TouchableOpacity>
        </Spacer>
      </View>
      {/*<Spacer>
                <TouchableOpacity
                    style={Theme.Button}
                    onPress={() =>
                        navigation.navigate('Video')
                    }
                >
                    <Text style={Theme.ButtonText}><FontAwesome5 name="facebook" size={20} color="white" />  Sign in with Facebook</Text>
                </TouchableOpacity>
            </Spacer> 
            <Spacer>
                <TouchableOpacity
                    style={Theme.Button}
                    onPress={() =>
                        navigation.navigate('Video')
                    }
                >
                    <Text style={Theme.ButtonText}><MaterialCommunityIcons name="email-outline" size={20} color="white" />  Sign in with Email</Text>
                </TouchableOpacity>
            </Spacer>*/}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginScreen;
