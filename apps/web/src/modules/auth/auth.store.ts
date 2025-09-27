import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface AuthStoreEmpty {
	isLogin: false;
	user: null;
}

type User = {
	name: string;
	email: string;
	phoneNumber: number;
};

interface AuthStoreWithData {
	isLogin: true;
	user: User;
}

interface AuthStoreActions {
	setUser: (payload: Pick<AuthStoreWithData, "user">) => void;
	reset: VoidFunction;
}

type AuthStore = (AuthStoreEmpty | AuthStoreWithData) & AuthStoreActions;

const useAuthStore = create<AuthStore>()(
	persist(
		immer((set) => ({
			isLogin: false,
			user: null,

			setUser(payload) {
				set((currState) => {
					currState.isLogin = true;
					currState.user = payload.user;
					return currState;
				});
			},

			reset() {
				set({
					isLogin: false,
					user: null,
				});
			},
		})),
		{ name: "auth-store" },
	),
);

export { useAuthStore };
