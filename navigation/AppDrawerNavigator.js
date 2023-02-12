
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerItem from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DrawerIcon from "../component/DrawerIcon";
const Drawer= createDrawerNavigator();

const AppDrawerNavigaor=({navigation})=>(

    <Drawer.Navigator screenOptions={{
        drawerStyle: {
          backgroundColor: 'lightgreen',
          width: 240,
        },
        activeTintColor: '#e91e63',
        
    
 
      }} >

<Drawer.Screen name="Home" component={HomeScreen}
options={{drawerIcon:()=>(<DrawerIcon 
    url={require('../assets/icons8-home-page-50.png')}/>)}}
    />
<Drawer.Screen name="Profile" component={ProfileScreen}
options={{drawerIcon:()=>(<DrawerIcon 
    url={require('../assets/icon.png')}/>)}}
    />
<Drawer.Screen name="Settings" component={SettingsScreen}options={{drawerIcon:()=>(<DrawerIcon 
    url={require('../assets/icons8-home-page-50.png')}/>)}}
    />



    </Drawer.Navigator>
);

export default AppDrawerNavigaor;