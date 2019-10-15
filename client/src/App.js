import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Layout from './components/layout';
import Person from './components/person';
import Selector from './components/selector';



function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#00675b',
      },
    },
  });

  const [personId, setPersonId] = React.useState(1);

  const handleChange = personId => {
  	setPersonId(personId);
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Selector personId={personId} changeHandler={handleChange}/>
        <Person personId={personId} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
