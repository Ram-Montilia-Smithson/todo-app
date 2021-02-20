import firebase from "firebase"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCg1TSACgGn4dTlKcEBRnUyQlHHXvIzVpc",
    authDomain: "ram-todo-app.firebaseapp.com",
    projectId: "ram-todo-app",
    storageBucket: "ram-todo-app.appspot.com",
    messagingSenderId: "320931614852",
    appId: "1:320931614852:web:b354524b6527db958072d1"
})

export const auth = app.auth()
export default app