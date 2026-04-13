import {onCall, HttpsError} from "firebase-functions/v2/https";
import {setGlobalOptions} from "firebase-functions/v2/options";
import {initializeApp} from "firebase-admin/app";
import {getAuth} from "firebase-admin/auth";
import {getDatabase} from "firebase-admin/database";

setGlobalOptions({maxInstances: 10});

initializeApp();

export const createUserByAdmin = onCall(
  {region: "europe-west1"},
  async (request) => {
    if (!request.auth) {
      throw new HttpsError("unauthenticated", "Debes iniciar sesión.");
    }

    const callerUid = request.auth.uid;
    const db = getDatabase();

    const adminSnapshot = await db.ref(`admins/${callerUid}`).get();

    if (!adminSnapshot.exists() || adminSnapshot.val() !== true) {
      throw new HttpsError(
        "permission-denied",
        "Solo un administrador puede crear usuarios."
      );
    }

    const email = String(request.data?.email || "").trim().toLowerCase();
    const password = String(request.data?.password || "").trim();

    if (!email || !password) {
      throw new HttpsError(
        "invalid-argument",
        "Email y contraseña obligatorios."
      );
    }

    if (password.length < 6) {
      throw new HttpsError("invalid-argument", "Mínimo 6 caracteres.");
    }

    const userRecord = await getAuth().createUser({
      email,
      password,
    });

    return {
      ok: true,
      uid: userRecord.uid,
    };
  }
);
