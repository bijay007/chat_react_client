const togglePrivateTab = (isOpen) => ({
  type: 'TOGGLE_TAB',
  tabOpen: !!isOpen,
})

export default togglePrivateTab;