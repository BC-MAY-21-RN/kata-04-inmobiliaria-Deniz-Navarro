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
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop: 5,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    marginBottom: 2,
    fontWeight: 'bold',
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 2,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row3: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  calificacion: {
    position: 'absolute',
    backgroundColor: '#FFF4AF',
    width: 45,
    height: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    padding: 5,
    bottom: 10,
    alignSelf: 'center',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default ItemStyles;
