import { Link } from "react-router-dom";
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
import Hide from './Password';

export function SignIn() {
  return (
    <>
      <img
        src="/img/background.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="white"
            className="relative top-10 mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="light-green">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-2 mt-4">
            <label className="mb-0"> Email </label>
            <Input type="email" className="w-full h-full" label="Email" size="lg" color="blue" />
            <Hide/>
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button fullWidth className="bg-light-green-500">
              Login
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to="/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  color="light-green"
                  className="ml-1 font-bold"
                >
                  Apply
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

export default SignIn;
