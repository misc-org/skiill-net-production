import { goto } from "$app/navigation";
import { isLoading } from "./store";

type valueOf<T> = T[keyof T];
type PickType<T, K extends keyof T> = T[K];

const PathId = {
    HOME: "/",
    ARTICLES_TOP: "/articles",
    ARTICLES_INTRODUCTION: "/articles#introduction",
    ARTICLES_METHOD: "/articles#method",
    ARTICLES_RESULT: "/articles#result",
    ARTICLES_CONSIDERATION: "/articles#consideration",
    ARTICLES_CONCLUSION: "/articles#conclusion",
} as const;

type PathId = valueOf<typeof PathId>;

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const runTransition = (path: PathId) => {
    isLoading.set(true);
    void goto(path);
};

export type { valueOf, PickType };
export { PathId, runTransition, wait };
