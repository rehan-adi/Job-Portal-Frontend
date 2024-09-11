import { z } from "zod";
import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupValidation } from "@/validation/auth.validation.ts";

type FormField = z.infer<typeof signupValidation>;

export const useSignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm<FormField>({
    resolver: zodResolver(signupValidation),
    defaultValues: {
      email: "",
      password: "",
      role: "",
    },
  });

  const onSubmit = async (data: FormField) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:1000/api/v1/auth/register",
        data
      );

      if (response.status === 201) {
        toast.success("Sign up successful! You can now sign in.");
        form.reset();
        navigate("/signin");
      }
    } catch (error: any) {
      console.log(error);
      const message =
      error.response?.data?.message ||
      "An error occurred. Please try again.";
    toast.error("Failed to register", {
      description: message,
      duration: 2000,
    });
    } finally {
      setLoading(false);
    }
  };

  return { form, onSubmit, loading };
};
