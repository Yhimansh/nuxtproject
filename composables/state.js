export const useAllData = () => useState(() => []);

export const useAuth = () =>
  useState(() => ({
    isAuthenticated: false,
  }));


//for menu store
export const activeMenu = ref(null)
export function openMenu(name) {
  if (activeMenu.value === name) {
    closeMenu()
    return
  }
  
  closeMenu()
  activeMenu.value = name
}

export function closeMenu() {
  activeMenu.value = null 
}


