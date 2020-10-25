import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,TextInput, Switch,TouchableOpacity,Text
} from 'react-native';


const AddNewScreen = () => {
    const [name, setName] = useState('');
    const [yearOfBirth, setYearOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [isMale, setIsMale] = useState(true);
    const [isFemale, setIsFemale] = useState(false);
    const [dataRadio, setDataRadio] = useState(['60m', '100m' ,'200m', '400m', '500m']); 
    const changeGenderMale = () => {
            setIsFemale(false);
            setIsMale(true);
    }
    const changeGenderFeMale = () => {
        setIsFemale(true);
        setIsMale(false);
}

   
      
  return (
    <SafeAreaView>
       <View style={{padding:50, backgroundColor: '#fff'}}>
       <TextInput
            style={{ height: 40, borderColor: '#ddd', borderWidth: 1, paddingLeft: 10 }}
            onChangeText={text => setName(text)}
            value={name}
            autoCorrect={false}
            placeholder={'Name'}
        />
        <TextInput
            style={{ height: 40, borderColor: '#ddd', borderWidth: 1, paddingLeft: 10, marginVertical: 10 }}
            onChangeText={text => setYearOfBirth(text)}
            value={yearOfBirth}
            keyboardType={'numeric'}
            returnKeyType={'done'}
            placeholder={'Year Of Birth'}
        />
        <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{borderColor: '#ddd', borderWidth: 1, padding: 5 , width: 70, backgroundColor: isMale ? 'purple': '#fff'}}
                onPress={changeGenderMale}
            >
                <Text style={{alignSelf: 'center'}}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderColor: '#ddd', borderWidth: 1, padding: 5, width:70 , backgroundColor: isFemale ? 'purple': '#fff'}}
            onPress={changeGenderFeMale}
            >
                <Text style={{alignSelf: 'center'}}>Female</Text>
            </TouchableOpacity>
      </View>
        
       </View>
       <View style={{backgroundColor: '#fff', marginVertical: 30}}>
           <Text>Personal Bests</Text>
           <View style={{padding:50}}>
               <View style={{flexDirection: 'row' , justifyContent:'space-around', marginVertical: 5}}>
                {/* {dataRadio.map((item, key) => (
                    <TouchableOpacity> */}
                    {/* <Image style={styles.img} source={require("./img/rb_selected.png")}/> */}
                    {/* <Text key={key}>{item}</Text>
                </TouchableOpacity>
                )
                )} */}
                <Text style={{backgroundColor: 'blue',
          marginRight: 38,
          padding:3,
          color:'#fff', alignSelf:'center'}}>60m</Text>
                <TextInput
            style={{ height:30, width: 70, borderColor: '#ddd', borderWidth: 1, paddingLeft: 10 }}
            onChangeText={text => setYearOfBirth(text)}
            value={yearOfBirth}
            keyboardType={'numeric'}
        />
        <TextInput
            style={{height:30,  width: 70, borderColor: '#ddd', borderWidth: 1, paddingLeft: 10 }}
            onChangeText={text => setYearOfBirth(text)}
            value={yearOfBirth}
            keyboardType={'numeric'} 
        />
        <Text style={{backgroundColor: 'white',
          marginRight: 30,
          padding:3,
          color:'#000', alignSelf:'center'}}>s</Text>
        </View>

        <View style={{flexDirection: 'row' , justifyContent:'space-around', marginVertical: 5}}>
                <Text style={{backgroundColor: 'green',
          marginRight: 32,
          padding:3,
          color:'#fff', alignSelf:'center'}}>100m</Text>
                <TextInput
            style={{ height:30, width: 70, borderColor: '#ddd', borderWidth: 1, paddingLeft: 10 }}
            onChangeText={text => setYearOfBirth(text)}
            value={yearOfBirth}
            keyboardType={'numeric'}
        />
        <TextInput
            style={{height:30,  width: 70, borderColor: '#ddd', borderWidth: 1, paddingLeft: 10 }}
            onChangeText={text => setYearOfBirth(text)}
            value={yearOfBirth}
            keyboardType={'numeric'} 
        />
        <Text style={{backgroundColor: 'white',
          marginRight: 30,
          padding:3,
          color:'#000', alignSelf:'center'}}>s</Text>
        </View>
        <View style={{flexDirection: 'row' , justifyContent:'space-around', marginVertical: 5}}>
                <Text style={{backgroundColor: 'purple',
          marginRight: 30,
          padding:3,
          color:'#fff', alignSelf:'center'}}>200m</Text>
                <TextInput
            style={{ height:30, width: 70, borderColor: '#ddd', borderWidth: 1, paddingLeft: 10 }}
            onChangeText={text => setYearOfBirth(text)}
            value={yearOfBirth}
            keyboardType={'numeric'}
        />
        <TextInput
            style={{height:30,  width: 70, borderColor: '#ddd', borderWidth: 1, paddingLeft: 10 }}
            onChangeText={text => setYearOfBirth(text)}
            value={yearOfBirth}
            keyboardType={'numeric'} 
        />
        <Text style={{backgroundColor: 'white',
          marginRight: 30,
          padding:3,
          color:'#000', alignSelf:'center'}}>s</Text>
        </View> */}
        {/* <View style={{flexDirection: 'row' , justifyContent:'space-around', marginVertical: 5}}>
                <Text style={{backgroundColor: 'brown',
          marginRight: 30,
          padding:3,
          color:'#fff', alignSelf:'center'}}>400m</Text>
                <TextInput
            style={{ height:30, width: 70, borderColor: '#ddd', borderWidth: 1, paddingLeft: 10 }}
            onChangeText={text => setYearOfBirth(text)}
            value={yearOfBirth}
            keyboardType={'numeric'}
        />
        <TextInput
            style={{height:30,  width: 70, borderColor: '#ddd', borderWidth: 1, paddingLeft: 10 }}
            onChangeText={text => setYearOfBirth(text)}
            value={yearOfBirth}
            keyboardType={'numeric'} 
        />
        <Text style={{backgroundColor: 'white',
          marginRight: 30,
          padding:3,
          color:'#000', alignSelf:'center'}}>s</Text>
        </View>
           </View>
       </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFF',
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

export default AddNewScreen;
