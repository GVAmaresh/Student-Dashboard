import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { promisify } from "util";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const secretToken = "my-new-iphone-token";
import { onSnapshot, query, snapshotEqual, where } from "firebase/firestore";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { db, auth } from "./firebase";
import { getAll } from "firebase/remote-config";
import { setUserCookie } from "./userCookie";
const createJWT = (id) => {
  try {
    const token = jwt.sign({ id }, secretToken, { expiresIn: "90d" });
    return token;
  } catch (error) {
    console.error("Error creating JWT:", error.message);
    return null;
  }
};
const fetchData = async (studentQuery) => {
  try {
    const snapshot = await getDocs(studentQuery);
    const currentUser = [];

    for (const doc of snapshot.docs) {
      currentUser.push({ ...doc.data(), id: doc.id });

      const semMarksQuery = query(collection(doc.ref, "Sem Marks"));
      const semMarksSnapshot = await getDocs(semMarksQuery);
      const semMarksData = semMarksSnapshot.docs.map((semDoc) => ({
        ...semDoc.data(),
        id: semDoc.id,
      }));

      const jwtToken = createJWT(currentUser[0].id);

      if (jwtToken) {
        Cookies.set("token", jwtToken, { expires: 7, secure: true });
      }
      currentUser.push(semMarksData);
    }

    return {
      student: currentUser[0],
      semMarks: currentUser[1],
      role: currentUser[0].role,
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

export const SIGNIN = async (user) => {
  try {
    if (!user.email || !user.password) {
      throw new Error("Email and password are required.");
    }
    const auth = getAuth();
    console.log(user.email, user.password);
    const authenticatedUser = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return { role: "" };
      });
    if (!authenticatedUser) {
      return { role: "" };
    }
    ISLOGGEDIN(authenticatedUser.uid);
  } catch (error) {
    console.error("SIGNIN error:", error.message);
    return { role: "" };
  }
};

export const ISLOGGEDIN = async (uid) => {
  try {
    const docRef = doc(db, "student", uid);
    const docSnap = await getDoc(docRef);
    setUserCookie(uid);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    return { role: "" };
  }
};
