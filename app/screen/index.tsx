import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar, FlatList, Button
} from 'react-native';


const MainScreen = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Button onPress={() => navigation.navigate('AddNew') } title="Add" color="#000"/>

          ),
        });
      }, [navigation]);
    const DATA = [
        {
            id: 1,
            name: 'A Lin', 
            minutes: [
                {meter: 60, color: 'blue', time :'6.90'},
                {meter: 100, color: 'green', time :'11.16'},
                {meter: 200, color: 'purple', time :'23.10'},
                {meter: 400, color: 'brown', time :'52.47'},
            ]
        },
        {
            id: 2,
            name: 'A Kong', 
            minutes: [
                {meter: 60, color: 'blue', time :'6.90'},
                {meter: 100, color: 'green', time :'11.16'},
                {meter: 200, color: 'purple', time :'23.10'},
                {meter: 400, color: 'brown', time :'52.47'},
            ]
        },
        {
            id: 3,
            name: 'A Pheap', 
            minutes: [
                {meter: 60, color: 'blue', time :'6.90'},
                {meter: 100, color: 'green', time :'11.16'},
                {meter: 200, color: 'purple', time :'23.10'},
                {meter: 400, color: 'brown', time :'52.47'},
            ]
        },
        
      ];

      const renderItem = ({ item }) => (
          <View style={styles.item}>
              <Text style={styles.title}>{item.name}</Text>
              <View style={{flexDirection: 'row'}}>
                  <RenderMinutes data={item.minutes} />
              </View>
              
          </View>
      );
      const RenderMinutes = ({ data}) => {
          let renderData = data.map(item => (
            <View>
                <Text style={styles.subtitle(item.color)}>{item.time}</Text>
            </View>
          ));
        return renderData;
      }
  return (
    <SafeAreaView style={styles.container}>
       <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFF'
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
      subItem: {
        fontSize: 16,
        
    },
      subtitle:(color) =>  ({
          fontSize:16,
          backgroundColor: color,
          marginRight: 30,
          padding:3,
          color:'#fff',
      }),
     
});

export default MainScreen;
