import { Text, View, StyleSheet } from "react-native"

const ProfileScreen=()=>{
    return(

        <View>
            <Text>Profile Screen</Text>
        </View>
    )
}

const styles= StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        color:'red',
        fontWeight:'500'
        
    }
})

export default ProfileScreen;