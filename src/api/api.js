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

export const contact = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
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
