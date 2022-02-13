import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { es } from "./es/es";

const resources = {
  es: {
    translation: {
      ...es
    }
  }
};

i18next.use(initReactI18next).init({
  resources,
  lng: "es",
  initImmediate: true
});

export const { t } = i18next;

export const tk = <typeof es>(
  (i18next.getDataByLanguage("es")?.translation as unknown)
);

export default i18next;
