export const useAllData = () => useState(() => []);

export const useAuth = () =>
  useState(() => ({
    isAuthenticated: false,
  }));