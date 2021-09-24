
const initialState = { testName: 'RobotFedor', testCheckbox: false }
const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, testName: [...state.testName, action.payload] }
    case 'DELETE_ITEM':
      return { ...state, testName: state.testName.filter(el => el !== action.payload) }
    case 'EDIT_ITEM':
      return { ...state, testName: action.payload }
    case 'CHANGE_CHECKBOX':
      return { ...state, testCheckbox: !state.testCheckbox }
    default:
      return state;
  }
};
export default chatReducer;