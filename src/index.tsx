//@ts-ignore
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import TestComponent from '@/TestComponent';

import './styles/general.less'

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <TestComponent />
);
