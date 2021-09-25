
const initialState = { testName: 'RobotFedor', testCheckbox: false }
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_CHECKBOX':
      return { ...state, testCheckbox: !state.testCheckbox }
    default:
      return state;
  }
};
export default profileReducer;