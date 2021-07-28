const _state = {};

export default function reducer(state=_state, action) {
  let updateState = (nstate)=> ({...nstate, ...state});
  return state;
}