import ACTION_TYPES from './types';

// Get the user location one time
export const loggedIn = (user) => {
  return { type: 'LOGGED_IN', user };
}
