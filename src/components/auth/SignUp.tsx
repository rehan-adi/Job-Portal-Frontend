import React from "react";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button.tsx";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { SlLockOpen } from "react-icons/sl";
import { useSignUpForm } from "../../hooks/useSignUpForm.ts";
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

const SignUp: React.FC = (): JSX.Element => {
  const { form, onSubmit, loading } = useSignUpForm();

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
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MdOutlineMarkEmailRead className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white text-xl" />
                      <input
                        type="email"
                        placeholder="Enter your Email"
                        {...field}
                        className={`peer w-full h-10 bg-transparent text-white font-sans font-normal outline-none focus:outline-none transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2 rounded-md pr-10 border-blue-gray-200 focus:border-[#EA580C] ${
                          fieldState.error ? "border-red-500" : ""
                        }`}
                        aria-label="Email"
                        aria-required="true"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-white">Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <SlLockOpen className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white text-xl" />
                      <input
                        type="password"
                        placeholder="Enter your Password"
                        {...field}
                        className={`peer w-full h-10 bg-transparent text-white font-sans font-normal outline-none focus:outline-none transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2 rounded-md pr-10 border-blue-gray-200 focus:border-[#EA580C] ${
                          fieldState.error ? "border-red-500" : ""
                        }`}
                        aria-label="Password"
                        aria-required="true"
                      />
                    </div>
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
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      value={field.value}
                    >
                      <SelectTrigger className="w-full text-white bg-transparent rounded-md">
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
            <Button
              type="submit"
              variant="outline"
              className="w-full"
              disabled={loading}
            >
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
        <button
          type="button"
          className="w-full text-white rounded-md hover:bg-[#212121] duration-300 mt-12 flex justify-center items-center gap-3 font-normal text-sm bg-[#EA580C] py-2 px-5"
        >
          <svg
            stroke="currentColor"
            className="mt-1"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 488 512"
            height="22px"
            width="15px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
          </svg>
          Sign Up with Google
        </button>
        <p className="mt-6 text-center text-white">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-[#EA580C] underline text-sm font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
