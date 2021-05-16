const openTab = () => ({
  type: 'OPEN_TAB',
  tabOpen: true,
});

const closeTab = () => ({
  type: 'CLOSE_TAB',
  tabOpen: false,
});

export {
  openTab,
  closeTab,
};