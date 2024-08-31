import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signupValidation } from "@/validation/auth.validation.ts";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

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

  return { form, onSubmit, loading };
};
