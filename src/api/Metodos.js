import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from 'firebase/database';
import { getStorage, ref as storageRef, getDownloadURL, listAll } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBTWbxRD5Yo2aD9upbGFd02TBVyrvlwSck",
  authDomain: "finanzona-5e59f.firebaseapp.com",
  databaseURL: "https://finanzona-5e59f-default-rtdb.firebaseio.com",
  projectId: "finanzona-5e59f",
  storageBucket: "finanzona-5e59f.appspot.com",
  messagingSenderId: "986790137021",
  appId: "1:986790137021:web:078192b9d8e847b3cf7bd4"
};

const app = initializeApp(firebaseConfig);

export async function obtenerURLsImagenesCarpeta(carpeta) {
  try {
    const folderRef = storageRef(getStorage(app), carpeta);
    const res = await listAll(folderRef);

    const promises = res.items.map(async (itemRef) => {
      try {
        const url = await getDownloadURL(itemRef);
        return url;
      } catch (error) {
        console.error('Error al obtener la URL de descarga:', error);
        return null; // Puedes manejar el error devolviendo null u otro valor predeterminado
      }
    });

    const urls = await Promise.all(promises);
    return urls.filter(url => url !== null); // Filtrar cualquier URL nula por errores
  } catch (error) {
    console.error('Error al obtener las URLs de las imágenes:', error);
    return []; // En caso de error, devolver un arreglo vacío
  }
}

export const ObtenerRamaArreglo = async (Nombre) => {
  try {
    const dbRef = ref(getDatabase(app));
    const snapshot = await get(child(dbRef, Nombre));

    if (snapshot.exists()) {
  
      return snapshot.val();
    } else {
      console.log('No data available');
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export async function obtenerURLArchivo(ubicacion) {

  const folderRef = storageRef(getStorage(app), ubicacion);

  try {
    const url = await getDownloadURL(folderRef);
    return url;
  } catch (error) {
    console.error('Error al obtener la URL de descarga:', error);
    return null; // Puedes manejar el error devolviendo null u otro valor predeterminado
  }
}



