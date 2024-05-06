import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Stylesheet/Toaster.css';

toast.configure();

export const toaster = (identifier, message, timeout = 2000) => {
	toast[identifier](message, {
		position: toast.POSITION.BOTTOM_RIGHT,
		autoClose: timeout,
		hideProgressBar: true,
		pauseOnHover: false,
	});
};
