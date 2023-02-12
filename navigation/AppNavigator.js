import 'react-native-gesture-handler';
import { Button } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import ProductScreen from "../screens/ProductScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import AppDrawerNavigaor from "./AppDrawerNavigator";


const Stack= createNativeStackNavigator();

const AppNavigator=()=>(

    <NavigationContainer>
     <Stack.Navigator initialRouteName="Login">
       <Stack.Screen name="Login" component={LoginScreen} options={{headerStyle: {
            backgroundColor: 'yellow',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="black"
            />
          ),
          }}/>
       <Stack.Screen name='Signup' component={SignupScreen}/>
       <Stack.Screen name="Products" component={ProductScreen}/>
       <Stack.Screen name="ProductDetail" component={ProductDetailScreen}/>

       <Stack.Screen name="Root" component={AppDrawerNavigaor} options={{
        headerShown:true,
        headerStyle: {
          backgroundColor: 'yellow',
        },}}
        />
       </Stack.Navigator>
    </NavigationContainer>
)

export default AppNavigator;