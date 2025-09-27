import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { useAuthStore } from "@/modules/auth";

export const Route = createFileRoute("/dashboard")({
	beforeLoad: () => {
		const { isLogin = false } = useAuthStore.getState();
		if (!isLogin) {
			throw redirect({
				to: "/",
			});
		}
	},
	component: Outlet,
});
