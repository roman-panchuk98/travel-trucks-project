import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import css from "./CamperByIdBooking.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";

interface initialValuesProps {
  name: string;
  email: string;
  bookingDate: [Date | null, Date | null];
  comment: string;
}

const initialValues: initialValuesProps = {
  name: "",
  email: "",
  bookingDate: [null, null],
  comment: "",
};

const BookingsFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(25, "Name is too long")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  bookingDate: Yup.array()
    .of(Yup.date().nullable())
    .test(
      "date-range",
      "Please select booking period",
      (value) => !!value && !!value[0] && !!value[1]
    ),
  comment: Yup.string().max(400, "Comment is too long"),
});

const CamperByIdBooking = () => {
  const handleSubmit = (
    values: initialValuesProps,
    action: FormikHelpers<initialValuesProps>
  ) => {
    toast.success("Your booking is success");
    action.resetForm();
  };

  return (
    <div className={css.camperByIdBookingBox}>
      <div className={css.camperByIdBookingInfo}>
        <h3 className={css.camperByIdBookingTitle}>Book your campervan now</h3>
        <p className={css.camperByIdBookingDescription}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={BookingsFormSchema}
      >
        {({ setFieldValue, values }) => (
          <Form className={css.form}>
            <div className={css.formGroup}>
              <Field
                type="text"
                name="name"
                className={css.formInput}
                placeholder="Name*"
              />
              <ErrorMessage
                name="name"
                component="span"
                className={css.error}
              />
            </div>

            <div className={css.formGroup}>
              <Field
                type="email"
                name="email"
                className={css.formInput}
                placeholder="Email*"
              />
              <ErrorMessage
                name="email"
                component="span"
                className={css.error}
              />
            </div>

            <div className={css.formGroup}>
              <DatePicker
                selectsRange
                startDate={values.bookingDate[0]}
                endDate={values.bookingDate[1]}
                onChange={(dates) => {
                  setFieldValue("bookingDate", dates);
                }}
                placeholderText="Booking Date*"
                dateFormat="dd.MM.yyyy"
                className={css.formInput}
                minDate={new Date()}
              />
              <ErrorMessage
                name="bookingDate"
                component="span"
                className={css.error}
              />
            </div>

            <div className={css.formGroup}>
              <Field
                name="comment"
                as="textarea"
                className={`${css.formInput} ${css.formTextArea}`}
                placeholder="Comment"
              />
              <ErrorMessage
                name="comment"
                component="span"
                className={css.error}
              />
            </div>
            <button type="submit" className={css.formSubmitButton}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CamperByIdBooking;
