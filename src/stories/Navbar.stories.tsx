import React from 'react';
import { Meta } from '@storybook/react';
import { Navbar } from '../components/Navbar';

const meta:Meta <typeof Navbar> = {
  component: Navbar,
  title: 'Navbar'
};

export default meta;

export const Default = () => <Navbar/>;