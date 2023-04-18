export default function routerReducer(router, action) {
  switch (action.type) {
    case "toAll": {
      return { ...router, All: true, Active: false, Complete: false };
    }
    case "toActive": {
      return { ...router, All: false, Active: true, Complete: false };
    }
    case "toComplete": {
      return { ...router, All: false, Active: false, Complete: true };
    }
  }
}
