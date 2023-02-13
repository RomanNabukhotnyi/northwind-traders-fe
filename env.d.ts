/// <reference types="vite/client" />
interface ImportMetaEnv {
  VITE_ADMIN_PASSWORD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
