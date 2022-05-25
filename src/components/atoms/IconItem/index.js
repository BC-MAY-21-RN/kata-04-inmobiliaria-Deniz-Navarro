import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import IconStyles from './IconStyles';

const IconItem = props => {
  const {name, data, other} = props;
  return (
    <View style={IconStyles.container}>
      {other ? <Icon2 name={name} size={25} /> : <Icon name={name} size={25} />}
      <Text style={IconStyles.text}>{data}</Text>
    </View>
  );
};

export default IconItem;
