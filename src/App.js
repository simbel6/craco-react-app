import React, { Component } from 'react';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import './App.less';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import 'moment/locale/zh-cn';

class App extends Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <Provider store={store()}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Provider>
      </ConfigProvider>
    );
  }
}
export default App;
