import { useAuthStore } from "@auth/auth.store";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { LoginPage } from "@/modules/auth/pages/LoginPage";

export const Route = createFileRoute("/")({
	beforeLoad: () => {
		const isLogin = useAuthStore.getState()?.isLogin ?? false;
		if (isLogin) {
			throw redirect({
				to: "/dashboard",
			});
		}
	},
	component: LoginPage,
});
