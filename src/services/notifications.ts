import { addDoc, collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Notification } from "../types/notification";

export const createNotification = async (message: string) => {
  try {
    await addDoc(collection(db, "notifications"), {
      message,
      read: false,
      timestamp: new Date(),
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const subscribeToNotifications = (
  callback: (notifications: Notification[]) => void
) => {
  return onSnapshot(collection(db, "notifications"), (snapshot) => {
    const notifications = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Notification[];
    callback(notifications);
  });
};

export const markNotificationAsRead = async (id: string) => {
  const notificationRef = doc(db, "notifications", id);
  await updateDoc(notificationRef, { read: true });
};
