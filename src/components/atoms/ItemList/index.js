import React from 'react';
import {View, Image, Text} from 'react-native';

const ItemList = props => {
  const {item} = props;
  return (
    <View>
      <Text>ID: {item.id}</Text>
      <Text>Nombre: {item.nombre}</Text>
      <Image style={{width: 50, height: 50}} source={{uri: item.img}} />
    </View>
  );
};

export default ItemList;
