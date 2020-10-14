import * as React from 'react';
import {AlertWrapper} from '../../helpers/modals.helpers';
import {getFavorites} from '../../services/Storage.service';
import {Job} from '../../types';

export default () => {
  const [favorites, setFavorites] = React.useState<Job[]>();
  const [loading, setLoading] = React.useState(false);

  const fetchAndSetFavorites = async () => {
    try {
      setLoading(true);
      const favoriteJobs = await getFavorites();
      setFavorites(favoriteJobs);
    } catch (error) {
      AlertWrapper({
        title: 'Some error has occured!',
        description: `The following error has occured: ${error.message}`,
        okayButton: {
          text: 'Ok',
          action: () => {},
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    favorites,
    loading,
    fetchAndSetFavorites,
  };
};
