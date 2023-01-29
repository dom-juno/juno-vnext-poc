import { Formik, FormikHelpers, FormikValues } from "formik";
import { Button, Card, Stack, TextField } from "@mui/material";
import * as Yup from "yup";
// import "./style.scss";
import { Container } from "@mui/system";
import { useState } from "react";
import JunoSpin from "../../components/JunoSpin";

const SignInSchema = Yup.object().shape({
  // firstname: Yup.string()
  //   .required("Firstname is required"),
  email: Yup.string()
    .email("Must be a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars minimum"),
});

const AppLogin = ({...props}) => {
  const {setToken} = props;
  const [loading, setLoading] = useState(false);
  if (loading) {
    return <JunoSpin />;
  }
  const handleSubmit = async (
    values: FormikValues,
    formikHelpers: FormikHelpers<{ email: string; password: string, /*firstname:string*/ }>
  ) => {
    setLoading(true);
    console.log(values);
    console.log("POST AUTH HERE");
    setTimeout(() => {
      console.log("AUTH RETURN HERE");
      setToken('valid_auth_response');
      setLoading(false);
    }, 1000);
  };
  const initialValues = {
    // firstname: "",
    email: "",
    password: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty,
        } = formik;
        return (
          <Container maxWidth="sm">
            <Card sx={{ mt: 10, p: "20px 40px 40px 40px", boxShadow:'0px 0px 4px 0px black' }}>
              <h1>Sign in to continue</h1>
              <form onSubmit={handleSubmit}>
                {/* <Stack sx={{ mt: 2, mb: 3 }}>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    id="firstname"
                    name="firstname"
                    label="Firstname"
                    placeholder="John"
                    value={values.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.firstname && Boolean(errors.firstname)}
                    helperText={touched.firstname && errors.firstname}
                  />
                </Stack> */}
                <Stack sx={{ mt: 2, mb: 3 }}>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    id="email"
                    name="email"
                    label="Email/Username"
                    placeholder="example@test.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Stack>
                <Stack sx={{ mt: 2, mb: 3 }}>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                </Stack>
                <Button
                size="large"
                sx={{color:'#C7169C', border:'1px solid #C7169C'}}
                  variant="outlined"
                  type="submit"
                  disabled={!(dirty && isValid)}
                >
                  Login
                </Button>
              </form>
            </Card>
          </Container>
        );
      }}
    </Formik>
  );
};
export default AppLogin;
