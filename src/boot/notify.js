import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const notify = {
  success(message) {
    toast.success(message);
  },
  error(message) {
    toast.error(message);
  },
  commonError() {
    toast.error("Terjadi Kesalahan Pada Server");
  },
  sessionExpired() {
    toast.warn("Session has expired. Redirected to the login page.")
  },
  info(message) {
    toast.info(message);
  },
  warn(message) {
    toast.warn(message);
  },
};

export default notify
