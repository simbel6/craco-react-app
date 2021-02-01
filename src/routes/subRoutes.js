import React from 'react';
import { Switch } from 'react-router-dom';
import la from './loadableComponent';
import PrivateRoute from './PrivateRoute';

// 自动引入childRoutes目录里的子路由
const files = require.context('./childRoutes', false, /\.js$/);
const routeList = [];
files.keys().forEach((key) => {
  const child = files(key).default;
  routeList.push(...child);
});

const SubRoutes = (props) => {
  const { menuList } = props;
  const routes = [].concat(routeList, menuList.menuList);
  return (
    <Switch>
      {routes.map((value) => (
        <PrivateRoute
          exact
          path={value.path}
          key={value.path}
          component={la(value.component)}
          id={value.id}
        />
      ))}
    </Switch>
  );
};

export default React.memo((props) => <SubRoutes menuList={props} />);
