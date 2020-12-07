import Main from './Components/main'
import Search from './Components/search'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Layout from './Components/layout'

function App() {
  return (
    <BrowserRouter>

    <Layout>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/search" component={Search} />
      </Switch>
  </Layout>
  </BrowserRouter>

  );
}

export default App;
