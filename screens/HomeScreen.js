import { Text, View, StyleSheet, ImageBackground, Image, ScrollView } from "react-native"

const HomeScreen=()=>{
    return(


        <ImageBackground style={styles.backgroundImage} 
        source={require('../assets/homeBackground.jpg')}>
            <ScrollView>
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require('../assets/online-quran-classes.jpg')}>

                <Text style={styles.textStyle} >Welcome To E-Islamic-Studies</Text>

            </ImageBackground>

            <Text style={styles.title}>Contact Us For More..!</Text>

            <Image style={styles.image} source={require('../assets/E-Isamic-Ad.jpeg')}/>
            
        </View>
        </ScrollView>

        </ImageBackground>
    )
}

const styles= StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        color:'yellow',
        fontWeight:'500',
        backgroundColor:'gray',
        fontSize:30
        
    },

    backgroundImage:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    image:{
        height:350,
        width:350,
        margin:30
        //borderRadius:400/2,
        
    },
    textStyle:{
        fontSize:30,
        color:'black',
       
        
    }
})

export default HomeScreen;