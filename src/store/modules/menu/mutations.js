const BLOGMENU_UPDATED = (state, menuItems) => {
  state.items = menuItems;
  state.items.splice();
};

export default {
  BLOGMENU_UPDATED,
};
