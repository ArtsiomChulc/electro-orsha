interface ImportMetaEnv {
    readonly VITE_FIREBASE_API_KEY: string;
    readonly VITE_FIREBASE_AUTH_DOMAIN: string;
    readonly VITE_FIREBASE_PROJECT_ID: string;
    readonly VITE_FIREBASE_STORAGE_BC: string;
    readonly VITE_FIREBASE_MSG_SENDER_ID: string;
    readonly VITE_FIREBASE_APP_ID: string;
    readonly VITE_FIREBASE_MEASURE_ID: string;
    readonly VITE_EMAIL_JS_ID: string;
    readonly VITE_EMAIL_JS_TEMPLATE_ID: string;
    readonly VITE_EMAIL_JS_PUBLIC_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
