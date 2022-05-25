import React from 'react';
import {FlatList} from 'react-native';
import ItemList from '../ItemList';

const VerticalList = props => {
  const {data} = props;
  return (
    <FlatList data={data} renderItem={({item}) => <ItemList item={item} />} />
  );
};

export default VerticalList;
