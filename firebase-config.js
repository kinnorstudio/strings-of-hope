/* ============================================================
   FIREBASE CONFIG  —  Strings of Hope (project: soh-app-defde)
   These values are PUBLIC by design (safe to commit); security is
   enforced by the Firestore rules, not by hiding them.
   Setup steps + rules: docs/firebase-setup.md
   ============================================================ */
/* CLOUD SWITCH — false = local-only build: no sign-in gate, no Google/email
   sign-in, no sync, and the Firebase SDK is never even downloaded. Progress is
   saved on the device. Members' existing cloud data in Firestore is untouched
   and comes back the moment this is set to true (with the site's domain added
   under Firebase → Authentication → Settings → Authorized domains). */
window.SOH_CLOUD_ENABLED = false;

window.SOH_FIREBASE_CONFIG = {
  apiKey: "AIzaSyCh3t4Vh4VHvuSRh18x-50PAxKTf0mX9ZM",
  authDomain: "soh-app-defde.firebaseapp.com",
  projectId: "soh-app-defde",
  storageBucket: "soh-app-defde.firebasestorage.app",
  messagingSenderId: "468551964746",
  appId: "1:468551964746:web:76dea4603da8647ba8aeb3",
  measurementId: "G-5TF6LV9ZK2"
};
