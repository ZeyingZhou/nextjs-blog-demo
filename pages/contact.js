import Head from "next/head";
import { Fragment } from "react";
import ContactForm from "../components/contact/contact-form";

function ContactPage() {
    return <Fragment>
        <Head>
            <title>Contact Me</title>
            <meta name="description" content="Send me ur message"></meta>
        </Head>
        <ContactForm></ContactForm>
    </Fragment>
}

export default ContactPage;