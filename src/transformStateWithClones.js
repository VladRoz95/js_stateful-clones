'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  let stateHistory = { ...state };

  const newState = [];

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(stateHistory, action.extraData);
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete stateHistory[key];
        }
        break;

      case 'clear':
        stateHistory = {};
        break;
    }
    newState.push({ ...stateHistory });
  }

  return newState;
}

module.exports = transformStateWithClones;
