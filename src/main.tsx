import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AppRoute } from './routes'

import { ChakraProvider } from '@chakra-ui/react';

import "moment/dist/locale/pt-br";
import moment from 'moment';

moment.locale("pt-br");

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={AppRoute} />
    </ChakraProvider>
  </React.StrictMode>,
)
