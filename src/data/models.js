// Contains a list of reactive variables (apollo v3) used in the application

import { makeVar } from "@apollo/client";

export const currentLoggedUserVar = makeVar('');

/* export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getLoggedUser: {
          read() {
            return currentLoggedUserVar()
          }
        }
      }
    }
  }
}); */
