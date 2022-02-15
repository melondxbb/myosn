
export const initialState = {
  loading: false
};

const reducer = (state, actions) => {
  switch(actions.type){
    case "SET_LOADING_ON":
      return {...state, loading: true};
    default: 
      return state;
  };
}

export default reducer;