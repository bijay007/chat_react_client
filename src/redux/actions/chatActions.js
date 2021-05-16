const closeCurrent = chat => ({
  type: 'CLOSE_CURRENT', chat
});

const openNew = chat => ({
  type: 'OPEN_NEW', chat
});

export {
  closeCurrent,
  openNew
};