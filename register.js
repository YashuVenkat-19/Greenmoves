import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  DatePickerIOS,
  ScrollView,
} from "react-native";
import { Button } from "@rneui/themed";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDOB] = useState(new Date());
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [formValid, setFormValid] = useState(false);

  const handleNameChange = (value) => setName(value);
  const handleEmailChange = (value) => setEmail(value);
  const handleDobChange = (date) => setDOB(date);
  const handleGenderChange = (value) => setGender(value);
  const handleCityChange = (value) => setCity(value);
  const handlePasswordChange = (value) => setPassword(value);
  const handleConfirmPasswordChange = (value) => setConfirmPassword(value);
  const handleContactNumberChange = (value) => setContactNumber(value);

  const validatePassword = () => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!regex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character."
      );
      setFormValid(false);
    } else if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      setFormValid(false);
    } else {
      setPasswordError("");
      setFormValid(true);
    }
  };

  const validateAge = () => {
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const month = today.getMonth() - dob.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    if (age < 13) {
      setAgeError("You must be at least 13 years old to register.");
      setFormValid(false);
    } else {
      setAgeError("");
      setFormValid(true);
    }
  };

  const handleSubmit = () => {
    if (formValid) {
      console.log("Registration form submitted successfully.");
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Registration Form</Text>

          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            onChangeText={handleNameChange}
            value={name}
            placeholderTextColor="#000"
          />

          <Text style={styles.label}>E-mail address</Text>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            onChangeText={handleEmailChange}
            placeholderTextColor="#000"
            value={email}
          />

          <Text style={styles.label}>Date of Birth</Text>
          <DatePickerIOS
            style={styles.datePicker}
            date={dob}
            mode="date"
            onDateChange={handleDobChange}
          />

          <Text style={styles.label}>Gender</Text>
          <TextInput
            style={styles.input}
            placeholder="Gender"
            onChangeText={handleGenderChange}
            value={gender}
            placeholderTextColor="#000"
          />

          <Text style={styles.label}>Location, City</Text>
          <TextInput
            placeholderTextColor="#000"
            style={styles.input}
            placeholder="City"
            onChangeText={handleCityChange}
            value={city}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#000"
            onChangeText={handlePasswordChange}
            onBlur={validatePassword}
            value={password}
          />
          {passwordError ? (
            <Text style={styles.error}>{passwordError}</Text>
          ) : null}
          <Text style={styles.label}>Re-Enter Password</Text>
          <TextInput
            placeholderTextColor="#000"
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={handleConfirmPasswordChange}
            onBlur={validatePassword}
            value={confirmPassword}
          />
          <Text style={styles.label}>contactNumber</Text>

          <TextInput
            style={styles.input}
            placeholderTextColor="#000"
            placeholder="Contact Number"
            onChangeText={handleContactNumberChange}
            value={contactNumber}
          />

          <Button
            onPress={handleSubmit}
            title="Resgister"
            buttonStyle={{
              backgroundColor: "#000",
              borderWidth: 2,
              borderColor: "#395B50",
              borderRadius: 30,
              padding: 10,
              marginBottom: 250,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#395B50",
  },
  title: {
    paddingTop: 150,
    fontSize: 40,
    marginBottom: 50,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "600",
  },
  input: {
    borderRadius: 5,
    backgroundColor: "#395B50",
    borderWidth: 1.5,
    borderColor: "#000",
    padding: 20,
    marginBottom: 30,
  },
  datePicker: {
    marginBottom: 10,
    padding: 15,
  },
  button: {
    backgroundColor: "#007bff",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 150,
  },
  error: {
    color: "red",
    marginBottom: 30,
  },
});

export default RegistrationForm;
