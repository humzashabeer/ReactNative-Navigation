import { Text, View, StyleSheet } from "react-native"

const ProductDetailScreen=()=>{
    return(

        <View style={styles.container}>
            <Text>ProductDetailScreen</Text>
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

export default ProductDetailScreen;