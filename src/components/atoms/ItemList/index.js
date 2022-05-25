import React from 'react';
import {View, Image, Text} from 'react-native';
import ItemStyles from './ItemStyles';

const ItemList = props => {
  const {item} = props;
  return (
    <View style={ItemStyles.container}>
      <View>
        <Image style={ItemStyles.image} source={{uri: item.img}} />
        <View style={ItemStyles.calificacion}>
          <Text>{item.calificacion}</Text>
        </View>
      </View>
      <View style={ItemStyles.container2}>
        <Text style={ItemStyles.title}>{item.nombre}</Text>
        <Text>{item.direccion}</Text>
        <View style={ItemStyles.row}>
          <Text>{item.numeroHabitaciones}</Text>
          <Text>{item.numeroBaños}</Text>
          <Text>{item.superficie}</Text>
        </View>
        <View style={ItemStyles.row2}>
          <Text>${item.costoxmes}/m</Text>
          <Text>heart</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemList;
