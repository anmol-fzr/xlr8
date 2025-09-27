import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
	plugins: [
		tailwindcss(),
		tanstackRouter({}),
		react(),
		VitePWA({
			registerType: "autoUpdate",
			manifest: {
				name: "my-better-t-app",
				short_name: "my-better-t-app",
				description: "my-better-t-app - PWA Application",
				theme_color: "#0c0c0c",
			},
			pwaAssets: { disabled: false, config: true },
			devOptions: { enabled: true },
		}),
	],
	optimizeDeps: {
		include: ["@xlr8/ui"],
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@/components": path.resolve(__dirname, "./src/components/"),
			"@auth": path.resolve(__dirname, "./src/modules/auth/"),

			// Monorepo Config
			"@xlr8/ui": path.resolve(__dirname, "../../packages/ui/src/"),
		},
	},
});
