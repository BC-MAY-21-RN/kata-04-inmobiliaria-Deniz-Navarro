import React from 'react';
import {Text, FlatList, View, Image} from 'react-native';
import casas from '../db/inmobiliaria.json';

const Home = () => {
  return (
    <FlatList
      data={casas}
      renderItem={({item}) => (
        <View>
          <Text>ID: {item.id}</Text>
          <Text>Nombre: {item.nombre}</Text>
          <Image style={{width: 50, height: 50}} source={{uri: item.img}} />
        </View>
      )}
    />
  );
};

export default Home;
