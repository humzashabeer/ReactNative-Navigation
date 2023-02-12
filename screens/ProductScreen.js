import { Text, View, StyleSheet } from "react-native"

const ProductScreen=()=>{
    return(

        <View>
            <Text>ProductScreen</Text>
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

export default ProductScreen;