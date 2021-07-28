const loadState = function() {
  try {
    let parsedState = localStorage.getItem("state");
    if(parsedState === null) return undefined;
    return JSON.parse(parsedState);

  }catch(error) {
    return undefined;
  }
}

const saveState = function(state) {
  try {
    let parsedState = JSON.stringify(state);
    localStorage.setItem("state", parsedState);

  }catch(error) {
    //ignore error
  }
}

export {loadState, saveState};