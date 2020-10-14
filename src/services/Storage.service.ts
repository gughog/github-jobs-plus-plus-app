import AsyncStorage from '@react-native-community/async-storage';
import {AlertWrapper} from '../helpers/actions.helpers';
import {Job} from '../types';

const STORAGE_KEY = '@GITHUB_PLUS_PLUS_STORE';

export const setFavorites = async (job: Job) => {
  const store = await AsyncStorage.getItem(STORAGE_KEY);

  try {
    // if store haven't items yet, just add it
    if (!store) {
      const data = JSON.stringify([{...job, isFavorite: true, applied: false}]);
      await AsyncStorage.setItem(STORAGE_KEY, data);

      AlertWrapper({
        title: 'Added to your favorites!',
        description: `The position "${job.title}" was saved to your favorite jobs!`,
        okayButton: {
          text: 'Ok',
          action: () => {},
        },
      });

      return true;
    }

    // parsing array stringifyed before
    const parsedStore = JSON.parse(store);

    // case the item is duplicated, remove them
    const isDuplicated = parsedStore.some(
      (favoriteJob: Job) => favoriteJob.id === job.id,
    );

    if (isDuplicated) {
      removeFromFavorites(job);
      return false;
    }

    // else, append the item to the previous, adding a flag
    const payload = [
      ...parsedStore,
      {...job, isFavorite: true, applied: false},
    ];

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(payload));

    AlertWrapper({
      title: 'Added to your favorites!',
      description: `The position "${job.title}" was saved to your favorite jobs!`,
      okayButton: {
        text: 'Ok',
        action: () => {},
      },
    });

    return true;
  } catch (error) {
    AlertWrapper({
      title: 'Some error has occured!',
      description: `The following error has occured: ${error.message}`,
      okayButton: {
        text: 'Ok',
        action: () => {},
      },
    });

    return false;
  }
};

export const removeFromFavorites = async (job: Job) => {
  const store = await AsyncStorage.getItem(STORAGE_KEY);

  try {
    if (store) {
      const payload = JSON.parse(store);
      const newPayload = payload.filter(
        (jobElement: Job) => jobElement.id !== job.id,
      );

      // update records without the deleted item
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newPayload));

      AlertWrapper({
        title: 'Removed from your favorites!',
        description: `The position "${job.title}" was removed to your favorite jobs!`,
        okayButton: {
          text: 'Ok',
          action: () => {},
        },
      });
      return true;
    }
    return true;
  } catch (error) {
    AlertWrapper({
      title: 'Some error has occured!',
      description: `The following error has occured: ${error.message}`,
      okayButton: {
        text: 'Ok',
        action: () => {},
      },
    });

    return false;
  }
};

export const getFavorites = async () => {
  try {
    const store = await AsyncStorage.getItem(STORAGE_KEY);
    if (!store) {
      return [];
    }

    return JSON.parse(store) as Job[];
  } catch (error) {
    AlertWrapper({
      title: 'Some error has occured!',
      description: `The following error has occured: ${error.message}`,
      okayButton: {
        text: 'Ok',
        action: () => {},
      },
    });

    return [];
  }
};

export const getApplied = async () => {
  try {
    const store = await AsyncStorage.getItem(STORAGE_KEY);
    if (!store) {
      return [];
    }

    const parsedStore = JSON.parse(store) as Job[];
    const jobsApplied = parsedStore.filter((job) => job.applied);

    return jobsApplied;
  } catch (error) {
    AlertWrapper({
      title: 'Some error has occured!',
      description: `The following error has occured: ${error.message}`,
      okayButton: {
        text: 'Ok',
        action: () => {},
      },
    });

    return [];
  }
};

export const setApplied = async ({id}: Job) => {
  try {
    // considering that will be only possible to mark a FAVORITE job as applied:
    let store = await getFavorites();

    // toggles 'applied' property
    for (let i = 0; i < store.length; i++) {
      if (store[i].id === id) {
        store[i].applied = !store[i].applied;
        AlertWrapper({
          title: `${
            store[i].applied ? 'Added to' : 'Removed from'
          } applied jobs!`,
          description: `The position "${store[i].title}" was ${
            store[i].applied ? 'added' : 'removed'
          } to your list of applied jobs!`,
          okayButton: {
            text: 'Ok',
            action: () => {},
          },
        });
      }
    }

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch (error) {
    AlertWrapper({
      title: 'Some error has occured!',
      description: `The following error has occured: ${error.message}`,
      okayButton: {
        text: 'Ok',
        action: () => {},
      },
    });
  }
};
