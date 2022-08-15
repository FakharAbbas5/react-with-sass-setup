import { ADMIN_STORAGE_KEY } from "../config/helpers/variables";

const useAuthenticate = () => {
  const admin = JSON.parse(localStorage.getItem(ADMIN_STORAGE_KEY));
  const authenticate = () => admin;

  return { authenticate };
};

export default useAuthenticate;
