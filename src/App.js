import Main from './Components/mainComponent/main'
import Search from './Components/searchComponent/search'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Layout from './Components/layoutComponent/layout'

function App() {
  return (
    <BrowserRouter>
{/* Main layout component */}
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
