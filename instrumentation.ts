export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const g = globalThis as unknown as Record<string, unknown>;
    if (
      typeof g.localStorage === "undefined" ||
      typeof (g.localStorage as Storage).getItem !== "function"
    ) {
      const store: Record<string, string> = {};
      g.localStorage = {
        getItem: (key: string) => store[key] ?? null,
        setItem: (key: string, value: string) => {
          store[key] = String(value);
        },
        removeItem: (key: string) => {
          delete store[key];
        },
        clear: () => {
          Object.keys(store).forEach((k) => delete store[k]);
        },
        get length() {
          return Object.keys(store).length;
        },
        key: (index: number) => Object.keys(store)[index] ?? null,
      } as Storage;
    }
  }
}
