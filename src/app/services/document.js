import {firebaseApp} from "./firebase/firebase";

const db = firebaseApp.firestore();

const getDocument = (documentID) => {
  return new Promise(async (resolve, reject) => {
    db.collection("documents")
      .doc(documentID)
      .get()
      .then((doc) => {
        resolve(doc.data() || {});
      });
  });
};

const updateDocument = (documentID, document) => {
  db.doc(`documents/${documentID}`).update({...document});
}

const setHistory = (documentID, data) => {
  db.collection(`documents/${documentID}/history`).add({
    document: data.document,
    createdDate: new Date().getTime()
  });
}

const getAllDocuments = (documentID) => {
  return db.collection(`documents/${documentID}/history`).get().then(querySnapshot => {
    let documents = []
    querySnapshot.forEach(doc => {
      const data = doc.data()
      data.document = removeTags(data.document)
      data['key'] = doc.id;
      documents.push(data)
    })
    return documents
  })
}


const removeTags = (str) => {
  if ((str === null) || (str === ''))
    return false;
  else
    str = str.toString();
  return str.replace(/(<([^>]+)>)/ig, '');
}

export {getDocument, updateDocument, setHistory, getAllDocuments}
