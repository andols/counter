import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlitzClient } from '@glitz/core';
import { GlitzProvider } from '@glitz/react';
import {glitzCoreOptions} from './tools/glitz-options';


const container = document.getElementById('container');
const glitz = new GlitzClient(glitzCoreOptions);
ReactDOM.render(<GlitzProvider glitz={glitz}><App/></GlitzProvider>, container);
