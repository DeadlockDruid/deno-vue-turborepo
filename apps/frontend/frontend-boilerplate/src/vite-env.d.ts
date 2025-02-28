/// <reference types="vite/client" />

declare const VITE_API_BASE_URL: string;

declare module "*.vue" {
  import { defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}
