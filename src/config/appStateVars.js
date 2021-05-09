import { makeVar } from '@apollo/client';

const openPrivateChatTab = makeVar(function(openTab) {
  return {
    openPrivateChatTab: !!openTab
  }
});

export default openPrivateChatTab;
