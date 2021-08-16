import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TodoPage from 'pages/TodoPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={TodoPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
