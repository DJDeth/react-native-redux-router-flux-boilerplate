import ACTION_TYPES from '../actions/types';

//export these data as Global Variables
export function loginReducer(state={ user: {}, }, action) {
    var user = { ...state.user };

// Value return based on different types of action
    switch(action.type) {
        case ACTION_TYPES.LOGGED_IN:
          user = action.user
          return { ...state, region };
        default:
          console.log(action.type + " action not found");
          return state;
    }
};
