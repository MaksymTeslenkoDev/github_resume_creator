import React from "react";
import Route  from "../../ui/Route";

export function PublicRoute(props) {
  const { component: Component, ...rest } = props;

  return <Route {...rest} component={Component} />;
}
