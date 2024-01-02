import { Form, Formik } from "formik";
import * as Yup from "yup";
import { FormInput } from "../../../../common/components/input/formInput";

export const Order = () => {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Please enter your email"),
  });

  const handleSubmit = async (data: Record<string, string>) => {
    console.log("data from submit", data);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnMount
        >
          {(formik) => (
            <>
              <Form className="my-5 w-[90%] md:w-3/4 lg:w-2/5">
                <FormInput
                  name="email"
                  label="Email Address"
                  placeholder="abayomi.tosin2017@gmail.com"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="!rounded-sm"
                />
              </Form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Order;
