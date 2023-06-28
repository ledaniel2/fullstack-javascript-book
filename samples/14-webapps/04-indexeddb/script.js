let openRequest = indexedDB.open("userDatabase", 1);

openRequest.onupgradeneeded = (e) => {
  let db = e.target.result;
  if (!db.objectStoreNames.contains('users')) {
    db.createObjectStore('users', {keyPath: 'userId'});
  }
};

openRequest.onsuccess = (e) => {
  let db = e.target.result;
  let tx = db.transaction("users", "readwrite");
  let store = tx.objectStore("users");
  
  store.put({userId: "user1", name: "Alice", age: 25});
  store.put({userId: "user2", name: "Bob", age: 30});
  
  tx.oncomplete = () => {
    db.close();
  };
};
