import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "../screens/SignInScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import ResetConfirmation from "../screens/ResetConfirmation";
import SignUpScreen from "../screens/SignUpScreen";
import ClubOrCompany from "../screens/ClubOrCompanyScreen.js/ClubOrCompany";
import ClubSignUpScreen from "../screens/ClubSignUpScreen";
import CompanySignUpScreen from "../screens/CompanySignUpScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ResetConfirmation" component={ResetConfirmation} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ClubOrCompany" component={ClubOrCompany} />
        <Stack.Screen name="ClubSignUp" component={ClubSignUpScreen} />
        <Stack.Screen name="CompanySignUp" component={CompanySignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
