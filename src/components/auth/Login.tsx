// src/components/Login.tsx
import React from "react";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button.tsx";
import { SlLockOpen } from "react-icons/sl";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { useSignInForm } from "../../hooks/useSignInForm.ts";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form.tsx";

const Login: React.FC = (): JSX.Element => {

  const { form, onSubmit, loading } = useSignInForm();

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="rounded-lg lg:w-[28vw] md:w-[45vw] sm:w-[45vw] w-full px-5 py-10">
        <h2 className="text-3xl font-semibold text-white text-center mb-14">
          Sign in to your HireSphere account
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mb-6 space-y-8">
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
            <Button type="submit" variant="default" size="lg" className="w-full" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
        </Form>
        <div className="mt-4">
        <Button
              type="submit"
              variant="outline"
              className="w-full"
              disabled={loading}
              size="lg"
            >
               <svg
            stroke="currentColor"
            className="mt-1 mr-3"
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
        </Button>
        </div>
        <p className="mt-6 text-center text-white">
          Don't have an account{" "}
          <Link
            to="/signup"
            className="text-[#F97316] underline text-sm font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
