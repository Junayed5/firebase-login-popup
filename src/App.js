import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import './App.css';
import app from './firebase.init';

const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({})

  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()


  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user
        console.log(user);
        setUser(user)
      })
      .catch(error => console.log(error))
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth,githubProvider)
    .then(result => {
      const user = result.user
      console.log(user);
      setUser(user)
    })
    .catch(error => {
      console.log(error);
    })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(result => {
        setUser({})
      })
      .catch(error => {
        setUser({})
      })
  }

  return (
    <div className="App">
      {
        user.email ? <button onClick={handleSignOut}>Sign out</button> :<div><button onClick={handleGoogleSignIn}>Google sign in</button><button onClick={handleGithubSignIn}>GitHub sign in</button></div>
      }
      <h1>Name: {user.displayName}</h1>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
