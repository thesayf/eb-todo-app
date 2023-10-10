import React from 'react';
import AppLayout from "./pages/app_layout"
import { AppProvider } from "./app_context"

function App() {
  return (
    <AppProvider>
      <AppLayout/>
    </AppProvider>
  )
}

export default App;
