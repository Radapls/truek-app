/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file App.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Thursday, 5th January 2023
 */

import { StatusBar } from 'react-native';
import Routes from './src/routes';

export default function App() {
  return (
    <>
    <StatusBar barStyle={'light-content'} backgroundColor='#FCAB10'/>
    <Routes/>
    </>
  );
}
