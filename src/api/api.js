import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { app } from './firebase.config';

const db = getFirestore(app);

export const subscribe = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'subscribers'), {
      email: data,
    });
    if (docRef.id) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};
