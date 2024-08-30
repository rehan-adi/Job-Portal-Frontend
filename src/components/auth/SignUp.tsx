import { z } from "zod";
import axios from "axios";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Input } from "../ui/input.tsx";
import { Button } from "../ui/button.tsx";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { signupValidation } from "@/validation/auth.validation.ts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form.tsx";

type FormField = z.infer<typeof signupValidation>;

const SignUp: React.FC = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof signupValidation>>({
    resolver: zodResolver(signupValidation),
    defaultValues: {
      email: "",
      password: "",
      role: "",
    },
  });

  const onSubmit: SubmitHandler<FormField> = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://hiresphere.onrender.com/api/v1/auth/register",
        data
      );

      if (response.status === 201) {
        toast.success("Sign up successful! You can now sign in.");
        navigate("/signin");
      }
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        toast.error(`Error: ${error.message}`);
      } else {
        toast.error("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="rounded-lg lg:w-[28vw] md:w-[45vw] sm:w-[45vw] w-full px-5 py-10">
        <header>
          <h2 className="text-3xl font-semibold text-white text-center mb-14">
            Create your HireSphere account
          </h2>
        </header>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Role</FormLabel>
                  <FormControl>
                    <Select {...field}>
                      <SelectTrigger className="w-full text-white bg-gray-700 rounded-md">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent className="border border-gray-600 rounded-md">
                        <SelectItem value="job_seeker">Job Seeker</SelectItem>
                        <SelectItem value="employer">Employer</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant="outline" className="w-full">
              {" "}
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                  Submitting...
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
        </Form>
        <div className="text-center mt-8">
          <p className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Already have a account?{" "}
            <Link to="/signin" className="underline underline-offset-2">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
