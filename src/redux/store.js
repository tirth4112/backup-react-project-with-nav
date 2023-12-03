import { createStore } from 'redux';
import reducers from './reducers/index';
import CryptoJS from 'crypto-js';

// Define your secret key (make sure it's secure and consistent)
const secretKey = 'presistdata';

// Load the persisted state from localStorage and decrypt it
const encryptedState = localStorage.getItem('reduxState') || '';
let decryptedState = {};

try {
  const bytes = CryptoJS.AES.decrypt(encryptedState, secretKey);
  const decryptedStateString = bytes.toString(CryptoJS.enc.Utf8);
  decryptedState = JSON.parse(decryptedStateString);
} catch (error) {
  // Handle decryption error (e.g., invalid secret key or corrupted data)
  console.error('Error decrypting state:', error);
  // You can provide a fallback state here if decryption fails
  decryptedState = {}; // Example: fallback to an empty state
}

const store = createStore(reducers, decryptedState);

store.subscribe(() => {
  // Encrypt and save the state to localStorage
  try {
    const stateToPersist = JSON.stringify(store.getState());
    const encryptedStateToPersist = CryptoJS.AES.encrypt(stateToPersist, secretKey).toString();
    localStorage.setItem('reduxState', encryptedStateToPersist);
  } catch (error) {
    console.error('Error encrypting and saving state:', error);
  }
});
export default store;