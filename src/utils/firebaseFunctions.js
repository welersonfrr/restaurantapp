import { async } from "@firebase/util";
import {
  collection,
  doc,
  getDocs,
  orderBy,
  Query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

// Saving now Item
export const saveitem = async (data) => {
  await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
    merge: true,
  });
};

// Getall food items
export const getAllFoodItems = async () => {
  const items = await getDocs(
    Query(collection(firestore, "foodItems"), orderBy("id", "desc"))
  );

  return items.doc.map((doc) => doc.data());
};
