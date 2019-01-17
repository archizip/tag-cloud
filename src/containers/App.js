import React from 'react';
import Cloud from '../components/Cloud';
import TagView from '../components/TagView';
import NotFound from '../components/NotFound';
import data from '../utils/data';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Router hashType='noslash'>
    <Switch>
      <Route exact path="/" render={()=> (
        <Cloud data={data} uniqueKey="sentimentScore" width={500}/>
      )}/>
      <Route exact path="/tag:id" component={TagView} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
export default App;
