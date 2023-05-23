import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Button } from "@rneui/themed";
import auth from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Hello from "./hello";

const Login = () => {
  const [email, setEmail] = useState("");
  const [trueEmail, setTrueEmail] = useState("");
  const [password, setPassword] = useState("");
  const [truePassword, setTruePassword] = useState("");

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleSignInWithEmail = () => {
    if (!validateEmail(email)) {
      Alert.alert("Invalid email address");
    } else if (!validatePassword(password)) {
      Alert.alert(
        "Invalid password",
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
      );
    } else {
      // handle sign-in with email/password
      setTrueEmail(email);
      setTruePassword(password);

      createUserWithEmailAndPassword(auth, trueEmail, truePassword)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  const handleSignInWithGoogle = () => {
    // handle sign-in with Google
  };

  const handleForgotPassword = () => {
    // handle forgot password
  };

  const validateEmail = (email) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome Back</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={handleEmailChange}
          value={email}
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={handlePasswordChange}
          value={password}
          secureTextEntry={true}
          placeholderTextColor="#000"
        />
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <Button
          onPress={handleSignInWithEmail}
          title="Sign In"
          buttonStyle={{
            backgroundColor: "#000",
            borderWidth: 2,
            borderColor: "#395B50",
            borderRadius: 30,
            padding: 15,
          }}
        />
        <Button
          onPress={handleSignInWithGoogle}
          title="Sign In Using Google"
          buttonStyle={{
            backgroundColor: "#000",
            borderWidth: 2,
            borderColor: "#395B50",
            borderRadius: 30,
            padding: 15,
          }}
        />
      </View>
      {trueEmail && (
        <View>
          <Text>{trueEmail}</Text>
          <Text>{truePassword}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#395B50",
  },
  heading: {
    fontSize: 32,
    marginBottom: 32,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginVertical: 8,
  },
  signInButton: {
    backgroundColor: "#000",
    borderWidth: 2,
    borderColor: "#395B50",
    borderRadius: 30,
    padding: 15,
    marginVertical: 8,
  },
  googleSignInButton: {
    backgroundColor: "#000",
    borderWidth: 2,
    borderColor: "#395B50",
    borderRadius: 30,
    padding: 15,
  },
});

export default Login;
