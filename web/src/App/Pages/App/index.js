import React from 'react'
import styles from './styles.css'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Stocks from './Stocks'
import Settings from './Settings'

export default class MainHome extends React.Component {
  static propTypes = {}

  render() {
    return (
      <div className={styles.container}>
        <Switch>
          <Route path="/settings" component={Settings} />
          <Route path="/" component={Home} />
          <Route path="/stocks" component={Stocks} />
        </Switch>
      </div>
    )
  }
}
