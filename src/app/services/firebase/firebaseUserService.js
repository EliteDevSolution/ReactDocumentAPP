import { firebaseApp } from "./firebase";

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

const insertDataInFirebase = ({ file, img, ...data }) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (file) {
        let storageRef = storage
          .ref("documents")
          .child(file.type.split("/")[1]);

        data.docUrl = await storageRef
          .put(file)
          .then(async () => await storageRef.getDownloadURL());
      }

      if (img) {
        let storageRef = storage
          .ref("documents")
          .child(file.type.split("/")[1]);

        data.imgUrl = await storageRef
          .put(file)
          .then(async () => await storageRef.getDownloadURL());
      }
    } catch (err) {
      reject(err);
    }

    delete data.docType;

    await db.collection("documents").add(data);
    resolve("success");
  });
};

export {insertDataInFirebase}
