export default(state = [], payload) => {
  switch (payload.type) {
      case 'addToCard':
          return [...state, payload.item];
      default:
          return state;
  }
};