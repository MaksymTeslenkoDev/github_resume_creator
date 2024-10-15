import React from 'react';
import { Outlet } from 'react-router-dom';
import { useStyles } from './styles';

export function Layout() {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.root}>
      <main className={cx(classes.main, classes.container)}>
        <Outlet />
      </main>
    </div>
  );
}
