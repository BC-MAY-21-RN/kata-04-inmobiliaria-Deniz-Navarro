import React from 'react';
import {View, Image, Text} from 'react-native';
import ItemStyles from './ItemStyles';
import Icon from 'react-native-vector-icons/Octicons';
import IconItem from '../IconItem';

const ItemList = props => {
  const {item} = props;
  return (
    <View style={ItemStyles.container}>
      <View>
        <Image style={ItemStyles.image} source={{uri: item.img}} />
        <View style={ItemStyles.calificacion}>
          <Icon name="star-fill" size={12} color="gold" />
          <Text style={ItemStyles.text}>{item.calificacion}</Text>
        </View>
      </View>
      <View style={ItemStyles.container2}>
        <Text style={ItemStyles.title}>{item.nombre}</Text>
        <View style={ItemStyles.row3}>
          <Icon name="location" size={20} color="black" />
          <Text> {item.direccion} </Text>
        </View>
        <View style={ItemStyles.row}>
          <IconItem name="bed-outline" data={item.numeroHabitaciones} />
          <IconItem name="bathtub-outline" data={item.numeroBaños} other />
          <IconItem name="contract-outline" data={item.superficie} />
        </View>
        <View style={ItemStyles.row2}>
          <Text style={ItemStyles.text}>${item.costoxmes}/m</Text>
          <Icon name="feed-heart" size={25} color="green" />
        </View>
      </View>
    </View>
  );
};

export default ItemList;
