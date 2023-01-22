import { Link } from "react-router-dom";
import { FaceSmileIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { SimpleFooter } from "@/widgets/layout";
import { StyledEngineProvider } from '@mui/material/styles';
import Sign from './signup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export function SignUp() {
  return (
    <>
      <img
        src="/img/background.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto mt-4 mb-2">
        <Card className="absolute my-5  top-2/4 left-2/4 w-full max-w-[30rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="white"
            className="relative top-10 mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="black">
              Application Form
            </Typography>
            <p 
              variant="small"
              > Let's get to know you a bit more <FaceSmileIcon
              width="40px"
              color="yellow"
              className="-mt-0.5 inline-block h-3.5 w-3.5"
              />
              </p>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 mt-4">
            <div className="flex gap-6">
            <Input label="First Name" size="lg" color="blue"  className="inline-block h-3.5 w-3.5" />
            <Input label="Last Name" size="lg" color="blue"  className="inline-block h-3.5 w-3.5"/>
            </div>
            <Input type="email" label="Email" size="lg" color="blue" />
            <StyledEngineProvider injectFirst >
              <Sign />
            </StyledEngineProvider>
            <div>
            <FormControl >
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio  />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Others" />
      </RadioGroup>
    </FormControl>
            </div>
     
          
            <div className="flex gap-6">
            <Input
              type="password"
              label="Password"
              size="lg"
              color="blue"
              className="inline-block h-3.5 w-3.5"
            />
              <Input
              type="password"
              label="Confirm Password"
              size="lg"
              color="blue"
              className="inline-block h-3.5 w-3.5"
            />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button fullWidth  className="bg-light-green-500">
              Continue
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="light-green"
                  className="ml-1 font-bold"
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
      
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  );
}

export default SignUp;
