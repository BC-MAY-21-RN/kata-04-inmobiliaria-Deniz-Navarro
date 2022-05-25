import React from 'react';
import {StyleSheet} from 'react-native';

const ItemStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#EFF6F6',
    borderRadius: 20,
    flexDirection: 'row',
  },
  container2: {
    width: 230,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  calificacion: {
    position: 'absolute',
    backgroundColor: 'yellow',
    width: 40,
    justifyContent: 'center',
  },
});

export default ItemStyles;
