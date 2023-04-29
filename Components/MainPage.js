import React, { useEffect, useState } from "react"
import { View, text, StyleSheet} from "react-native"




const MainPage = ({navigation}) => {
    const [colombiaInfo, setColombia] = useState({})

    useEffect(() =>{
        async function fetchData(){
            const colombiaData = await getColombiaInfo()
            setColombiaInfo(colombiaData)
    
        }
        fetchData();
        navegation.setOptions({
            headerRight: () =>{
                return(
                    <Icon name='rowing'onPress={() => navigation.navigate('')} />
                )
            }
        })
        
    })
    
    return (
        <View style={Styles.container}>
            <text style={styles.title}> Informacion  de: {colombiaInfo.name} </text>
            <text style={styles.title}> regiones: {colombiaInfo.description} </text>
            <text style={styles.title}> Descripcion: {colombiaInfo.description} </text>
            <text style={styles.title}> Capital: {colombiaInfo.stateCapital} </text>
            <text style={styles.title}> Superficie: {colombiaInfo.superface} </text>
            <text style={styles.title}> Poblacion: {colombiaInfo.population} </text>


        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:  {
      fontSize:20,
      fontWeight: 'bold',
      marginVertical: 10,  
    },
    text: {
        fontSize: 16,
        marginVertical: 5,
    },

})

export default MainPage