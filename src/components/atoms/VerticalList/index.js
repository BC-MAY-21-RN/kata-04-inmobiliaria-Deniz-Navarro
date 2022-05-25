import React from 'react';
import {FlatList} from 'react-native';
import ItemList from '../ItemList';
import ListStyles from './ListStyles';

const VerticalList = props => {
  const {data} = props;
  return (
    <FlatList
      data={data}
      style={ListStyles.container}
      renderItem={({item}) => <ItemList item={item} />}
    />
  );
};

export default VerticalList;
