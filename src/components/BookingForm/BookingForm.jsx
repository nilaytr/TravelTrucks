import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from 'react-hot-toast';
import css from "./BookingForm.module.css";

const BookingForm = () => {

    const initialValues = {
        name: '',
        email: '',
        bookingDate: '',
        comment: '',
    }

    const handleSubmit = (values, { resetForm }) => {
        toast.success("Successfully booked!");
        resetForm();
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        bookingDate: Yup.date().required('Required'),
        comment: Yup.string().min(3, 'Too Short!').max(100, 'Too Long!').required('Required'),
    });

    return (
        <div className={css.bookWrapper}>
            <h2 className={css.bookHeader}>Book your campervan now</h2>
            <p className={css.bookText}>Stay connected! We are always ready to help you.</p>
            <div className={css.formWrapper}>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({ setFieldValue, values }) => (
                        <Form>
                            <div>
                                <Field className={css.formInput} type="text" name="name" id="name" placeholder="Name*" />
                                <ErrorMessage className={css.formError} name="name" component="div" />
                            </div>
                            <div>
                                <Field className={css.formInput} type="text" name="email" id="email" placeholder="Email*" />
                                <ErrorMessage className={css.formError} name="email" component="div" />
                            </div>
                            <div>
                                <DatePicker selected={values.bookingDate}
                                    onChange={(date) => setFieldValue("bookingDate", date)}
                                    placeholderText="Booking date*"
                                    className={css.formInput}
                                    dateFormat="dd/MM/yyyy"
                                />
                                <ErrorMessage className={css.formError} name="bookingDate" component="div" />
                            </div>
                            <div className={css.commentWrapper}>
                                <Field className={css.formInput} as="textarea" name="comment" id="comment" placeholder="Comment" />
                                <ErrorMessage className={css.formError} name="comment" component="div" />
                            </div>
                            <button className={css.formButton} type="submit">Send</button>
                            <Toaster position="top-center" reverseOrder={false}/>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default BookingForm;