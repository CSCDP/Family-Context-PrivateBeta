import React from 'react';

import Layout from './components/layout';
import Person from './components/person';
import Selector from './components/selector';

function App() {
  const [personId, setPersonId] = React.useState(1);

  const handleChange = personId => {
  	setPersonId(personId);
  }

  return (
    <Layout>
      <Selector personId={personId} changeHandler={handleChange}/>
      <Person personId={personId} />
    </Layout>
  );
}

export default App;
