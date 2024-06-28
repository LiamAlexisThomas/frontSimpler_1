import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Platform,
  ImageBackground,
  Image,
} from "react-native";
import Input from "../components/input";
import { useState } from "react";
import PasswordInput from "../components/passinput";
import Boton from "../components/boton";
import { loginCheck } from "../apis/login";

export default Login = ({navigator}) => {
  const [dni, setDni] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async () => {
    navigator.navigator('tabs')
    // const Data = await loginCheck(dni, password);
    // console.log(Data);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/fondo.jpg")}
          resizeMode="cover"
          style={{ flex: 1 }}
        >
          <View style={styles.zona1}>
            <Image
              source={require("../../assets/logo.jpg")}
              style={{ width: 150, height: 150, borderRadius: 50 }}
            ></Image>
            <Text
              style={{
                fontSize: 40,
              }}
            >
              {" "}
              Bienvenido{" "}
            </Text>
          </View>
          <View style={styles.zona2}>
            <Input
              label="ingresa tu dni"
              value={dni}
              onChange={setDni}
              type="numeric"
              icon="account"
            ></Input>
            <PasswordInput
              label="ingresa tu contraseña"
              value={password}
              onChange={setPassword}
            />
            <Boton texto="iniciar sesión" onPres={() => handleLogin()} />
          </View>
          <View style={styles.zona3}></View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" && 25,
  },
  zona1: {
    flex: 0.4,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  zona2: {
    flex: 0.45,
    paddingHorizontal: 5,
  },
  zona3: {
    flex: 0.15,
  },
});
