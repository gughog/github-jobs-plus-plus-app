import {formatDistance} from 'date-fns';

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
