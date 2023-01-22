// vite.config.js
import { defineConfig } from "file:///C:/Users/Emman/Documents/Web%20dev/ExaRealestate/ExaRealestate/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Emman/Documents/Web%20dev/ExaRealestate/ExaRealestate/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
    plugins: [react()],
    resolve: {
        alias: [{ find: "@", replacement: "/src" }]
    }
});
export {
    vite_config_default as
    default
};