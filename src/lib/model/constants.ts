import { goto } from "$app/navigation";
import { isLoading } from "./store";

type valueOf<T> = T[keyof T];
type PickType<T, K extends keyof T> = T[K];

const PathId = {
    HOME: "/",
    ARTICLES: "/articles",
} as const;

type PathId = valueOf<typeof PathId>;

const runTransition = (path: PathId) => {
    isLoading.set(true);
    void goto(path);
};

export type { valueOf, PickType };
export { PathId, runTransition };
