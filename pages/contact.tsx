import ContactForm from '../components/ContactForm';
import { Helmet } from 'react-helmet';
const ContactMe = () => {
	return (
		<>
			<Helmet>
				<title>Dom Devs | Contact</title>
			</Helmet>
			<ContactForm></ContactForm>
		</>
	);
};

export default ContactMe;
