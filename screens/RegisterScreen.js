import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { blue, white } from '../constants/color';

const RegisterScreen = ({ navigation }) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const {name, email, password } = input;

  const handleInput = (e) => {
    setInput(() => ({
      ...input,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.info}>
          <Text style={styles.title}>Create new account</Text>
          <Text style={{ textAlign: 'center', color: blue }}>Signup to continue</Text>
        </View>

        <View style={styles.form}>

          <TextInput style={styles.textInput} placeholder='Enter email' name="name" value={name} onChange={handleInput} />
          
          <TextInput style={styles.textInput} placeholder='Enter email' name="email" value={email} onChange={handleInput} />

          <TextInput style={styles.textInput} placeholder='Enter password' name="password" value={password} onChange={handleInput} />
      
          <TouchableOpacity>
            <Text style={styles.btn}>Sign up</Text>
          </TouchableOpacity>

          {/* <View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", flexWrap: "nowrap", }}>
              <Text style={{ color: blue, fontWeight: "600", marginTop: 30, textAlign: 'center' }}>Don't hava a account?</Text>
              <TouchableOpacity>
                <Text style={{ color: blue, fontWeight: "600", marginTop: 30, textAlign: 'center' }}> Create new account.</Text>
              </TouchableOpacity>
            </View>
          </View> */}

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: blue, fontWeight: "600", marginTop: 30, textAlign: 'center' }}> Login here.</Text>
          </TouchableOpacity>

        </View>


      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "700",
    textAlign: 'center',
    color: blue
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white"
  },
  box: {
    width: Dimensions.get('window').width - 100,
  },
  form: {
    marginTop: 60
  },
  btn: {
    backgroundColor: blue,
    color: white,
    textAlign: 'center',
    paddingVertical: 9,
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "600",
    borderRadius: 5,
    marginTop: 20
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    paddingVertical: 7,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  }
});







export default RegisterScreen;