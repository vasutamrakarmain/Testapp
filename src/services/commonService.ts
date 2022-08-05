export const isSignIn = (): boolean => {
  return localStorage.getItem("loginUser") === undefined ||
    localStorage.getItem("loginUser") === null
    ? false
    : true;
};

export const getSigninInfo = (): any|null => {
  if (
    localStorage.getItem("loginUser") === undefined ||
    localStorage.getItem("loginUser") === null
  ) {
    return null;
  } else {
    let temp: string | null = localStorage.getItem("loginUser");
    return temp !== null ? JSON.parse(temp) : null;
  }
};
