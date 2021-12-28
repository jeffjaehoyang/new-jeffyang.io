import { useEffect, useReducer, useState } from 'react';

export function useAuthState(firebase) {
  const [auth, setAuth] = useState(undefined);

  const lazy = (fn) => {
    // workaround for gatsby SSR build error for firebase
    return () => {
      return fn();
    };
  };

  const githubProvider = lazy(() => new firebase.auth.GithubAuthProvider());

  const githubLogin = (githubProvider) =>
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        return firebase.auth().signInWithPopup(githubProvider());
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error code: ', errorCode);
        console.log('error message: ', errorMessage);
      });

  const handleLogin = async () => {
    await githubLogin(githubProvider);
  };

  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'auth_state_changed':
          return {
            ...state,
            user: action.user,
            loading: false
          };
        case 'error':
          return {
            ...state,
            error: action.error,
            loading: false
          };
      }
    },
    {
      user: undefined,
      loading: true,
      error: undefined
    }
  );

  useEffect(() => {
    setAuth(firebase.auth());
  }, [firebase]);

  useEffect(() => {
    if (auth === undefined) return;

    const unsubscribe = auth.onAuthStateChanged(
      (user) => {
        dispatch({ type: 'auth_state_changed', user });
      },
      (error) => {
        dispatch({ type: 'error', error });
      }
    );

    return () => {
      unsubscribe();
    };
  }, [auth]);

  return [state.user, state.loading, state.error, handleLogin];
}
