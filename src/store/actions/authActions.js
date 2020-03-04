export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({type: 'LOGIN_SUCCESS'})
    }).catch((error) => {
      dispatch({type: 'LOGIN_ERROR', error})
    })
  }
};

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({type: 'SIGNOUT_SUCCESS'});
    });
  }
};

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirestore, getFirebase}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((response) => {
      return firestore.collection('users').doc(response.user.uid).set({
        avatar: null,
        background: null,
        bio: '',
        birthDate: new Date(`${newUser.birthMonth}/${newUser.birthDay}/${newUser.birthYear}`),
        books: [],
        ebooks: [],
        chats: [],
        choosenBooks: [],
        dropped: [],
        favouritesBooks: [],
        followers: [],
        gender: newUser.gender,
        groups: [],
        images: [],
        invitations: [],
        isPremium: false,
        joinDate: new Date(),
        nick: newUser.nick,
        onHold: [],
        planToRead: [],
        read: [],
        readPoints: 0,
        reading: [],
        untilPremium: null,
        writePoints: 0,
        reviews: [],
        language: '',
        country: '',
        realName: ''
      })
    }).then(() => {
      dispatch({type: 'SIGNUP_SUCCESS'})
    }).catch(error => {
      dispatch({type: 'SIGNUP_ERROR', error})
    })
  }
};
