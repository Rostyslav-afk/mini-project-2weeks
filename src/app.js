import {
  defaultModules,
  error,
} from "../node_modules/@pnotify/core/dist/PNotify.js";
import * as PNotifyMobile from "../node_modules/@pnotify/mobile/dist/PNotifyMobile.js";
import "@pnotify/core/dist/BrightTheme.css";
defaultModules.set(PNotifyMobile, {});

function errorMessage() {
  error({
    title: "Oh No!",
    text: "Write the name of the country more precisely!",
    delay: 3000
  });
}

errorMessage()

