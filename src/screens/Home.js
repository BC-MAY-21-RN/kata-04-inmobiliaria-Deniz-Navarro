import React from 'react';
import VerticalList from '../components/atoms/VerticalList';
import casas from '../db/inmobiliaria.json';

const Home = () => {
  return <VerticalList data={casas} />;
};

export default Home;
