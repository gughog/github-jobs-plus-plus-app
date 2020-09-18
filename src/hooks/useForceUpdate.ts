import * as React from 'react';

/**
 * Custom hook that forces a re-render for a component.
 */
const useForceUpdate = () => {
  const [, setValue] = React.useReducer((x) => x + 1, 0);

  return () => {
    console.log('forceUpdated!!!');
    return setValue();
  };
};

export default useForceUpdate;
