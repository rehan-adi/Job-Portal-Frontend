
import { z } from "zod";
import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { signinValidation } from "@/validation/auth.validation.ts";

type SignInFormField = z.infer<typeof signinValidation>;

export const useSignInForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm<SignInFormField>({
    resolver: zodResolver(signinValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<SignInFormField> = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:1000/api/v1/auth/login",
        data
      );

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        toast.success("Sign in successful!");
        form.reset();
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
      if (axios.isAxiosError(error) && error.response) {
        toast.error(`Error: ${error.response.data.message}`);
      } else if (error instanceof Error) {
        toast.error(`Error: ${error.message}`);
      } else {
        toast.error("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { form, onSubmit, loading };
};
