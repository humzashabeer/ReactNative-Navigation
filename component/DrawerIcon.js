import { Image, View, StyleSheet } from "react-native"

const DrawerIcon=(url)=>{
  return(
    <Image style={styles.iconStyle} source={url}></Image>

  )

}
 const styles=StyleSheet.create({

    iconStyle:{

        height:50,
        width:50,
        borderWidth:2,
        borderColor:'blue'

    }

 })

export default DrawerIcon;

