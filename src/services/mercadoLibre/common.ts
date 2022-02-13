import urlJoin from "url-join";
import { CONFIG } from "src/config";

export const apiBaseUrl = urlJoin(CONFIG.ABSOLUTE_URL as string, "api");
