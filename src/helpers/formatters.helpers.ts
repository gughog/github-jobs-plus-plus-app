import {formatDistance} from 'date-fns';
import {Job} from '../types';
import {AlertWrapper} from './actions.helpers';
import {getApplied, getFavorites} from '../services/Storage.service';

/**
 * Formats a date to a textual date distance indicator.
 * @param {String} date - The Date to be evaluated from current date.
 * @example
 * // Return example:
 * // 'about 4 hours ago'
 */
export const formatDate = (date: string) => {
  return formatDistance(new Date(date), new Date(), {addSuffix: true});
};

export const reconcileArraysAndReturnWithFlags = async (jobs: Job[]) => {
  try {
    const JobsCopy = jobs || [];
    const favoriteJobsCopy = (await getFavorites()) || [];
    const jobsAppliedCopy = (await getApplied()) || [];

    for (let i = 0; i < JobsCopy.length; i += 1) {
      for (let j = 0; j < favoriteJobsCopy.length; j += 1) {
        if (
          JobsCopy[i].id === favoriteJobsCopy[j].id &&
          favoriteJobsCopy[j].isFavorite
        ) {
          JobsCopy[i].isFavorite = true;
        }
      }
      for (let j = 0; j < jobsAppliedCopy.length; j += 1) {
        if (
          JobsCopy[i].id === jobsAppliedCopy[j].id &&
          jobsAppliedCopy[j].applied
        ) {
          JobsCopy[i].applied = true;
        }
      }
    }

    return JobsCopy;
  } catch (error) {
    AlertWrapper({
      title: 'Some error has occured!',
      description: `The following error has occured: ${error.message}`,
      okayButton: {
        text: 'Ok',
        action: () => {},
      },
    });

    return jobs;
  }
};

export const queryUrlGenerator = (baseUrl: string, values: any[]) => {
  const url = values && values.length ? `${baseUrl}?` : baseUrl;

  return `${url}${values
    .map((param: any) => `${param[0]}=${param[1]}`)
    .join('&')}`;
};
