import { writable } from "svelte/store";

const currentPath = writable("");

const isLoading = writable(true);
const isDrawerOpened = writable(false);
const isBusy = writable(false);

export { currentPath, isLoading, isDrawerOpened, isBusy };
