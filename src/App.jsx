import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/homePage';
import { Layout , Menu, Avatar } from 'antd';
import avatar from './assets/avatar.jpg';
import name from './assets/name.png';
import './App.css';

const { Header } = Layout

function App() {
  return (
      <Layout>
            <Header style={{background: '#fff', padding: '0 30px'}}>
                <Avatar shape="circle" size={40} src={avatar} />
                <img src={name} alt="Terrence" style={{height: 64}} />
                <Menu theme="light" mode="horizontal" style={{display: 'inline-block'}} defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            
            {/* <HashRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                </Switch>
            </HashRouter> */}
      </Layout>
    
    
  );
}

export default App;
