import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./BookingForm.module.css";
import toast from "react-hot-toast";

const BookingForm = () => {

    const initialValues = {
        name: '',
        email: '',
        bookingDate: '',
        comment: '',
    }

    const handleSubmit = (values, { resetForm }) => {
        console.log("Form values:", values);
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
        <div>
            <h2 className={css.bookHeader}>Book your campervan now</h2>
            <p className={css.bookText}>Stay connected! We are always ready to help you.</p>
            <div>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({ setFieldValue, values }) => (
                        <Form>
                            <div>
                                <label className={css.formLabel} htmlFor="name">Name*</label>
                                <Field type="text" name="name" id="name" />
                                <ErrorMessage className={css.formError} name="name" component="div" />
                            </div>
                            <div>
                                <label className={css.formLabel} htmlFor="email">Email*</label>
                                <Field type="text" name="email" id="email" />
                                <ErrorMessage className={css.formError} name="email" component="div" />
                            </div>
                            <div>
                                <label className={css.formLabel} htmlFor="">Booking date*</label>
                                <DatePicker selected={values.bookingDate}
                                    onChange={(date) => setFieldValue("bookingDate", date)}
                                    placeholderText="Booking date*"
                                    className={css.formDatePicker}
                                    dateFormat="dd/MM/yyyy" />
                                <ErrorMessage className={css.formError} name="bookingDate" component="div" />
                            </div>
                            <div>
                                <label className={css.formLabel} htmlFor="comment">Comment</label>
                                <Field as="textarea" name="comment" id="comment" />
                                <ErrorMessage className={css.formError} name="comment" component="div" />
                            </div>
                            <button className={css.formButton} type="submit">Send</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default BookingForm;