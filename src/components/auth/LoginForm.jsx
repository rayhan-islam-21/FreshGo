"use client";
import React from "react";
import { Button } from "../ui/button";
import { Label } from "recharts";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/validation";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const router = useRouter();

  const onSubmit = async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false, // 🔥 IMPORTANT
    });

    if (res?.error) {
      console.log("Login failed:", res.error);
    } else {
      console.log("Login success");
      router.push("/"); // redirect after success
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl shadow-sm rounded-xl mx-auto p-8 mt-12"
    >
      <h1 className="text-2xl font-bold text-center">Login to Account</h1>
      <div className="p-2 flex items-start flex-col gap-2">
        <Label>Email</Label>
        <Input
          type="email"
          {...register("email")}
          className="p-4 border border-black/50 rounded-sm"
          placeholder="Enter your email"
        />
        <p className="text-red-500">{errors.email?.message}</p>
      </div>
      <div className="p-2 flex items-start flex-col gap-2">
        <Label>Password</Label>
        <Input
          type="password"
          {...register("password")}
          className="p-4 border border-black/50 rounded-sm"
          placeholder="Enter your password"
        />
        <p
          className="text-red-500
        "
        >
          {errors.password?.message}
        </p>
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        variant="outline"
        className="bg-green-500 text-white w-full mt-8"
      >
        {isSubmitting ? "loginig..." : "Log In"}
      </Button>
    </form>
  );
};

export default LoginForm;
