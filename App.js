import React from 'react'
import {Text,View,Image,StyleSheet} from 'react-native'

const App =()=>{
  return (

      <View style={styles.pageContainer}>
        <View style={styles.card}>
          <Image style={styles.image}
            source={{uri : "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png"}}
          />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex : 1,
  },
  card : {
    width: '95%',
    height : '70%',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset : {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius : 6.68,
    elevation : 11,
  },
  image : {
    width : "100%",
    height : "100%",
    borderRadius : 10
  }
}
)

export default App;