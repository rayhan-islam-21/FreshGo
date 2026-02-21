"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/validation";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { api } from "@/lib/axios";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    const res = await api.post("/register", data);
    const result = res.data;
    console.log(result);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl shadow-sm rounded-xl mx-auto p-8 mt-12"
    >
      <h1 className="text-2xl font-bold text-center">Create Account</h1>
      <div className="p-2 flex items-start flex-col gap-2">
        <Label>Name</Label>
        <Input
          {...register("name")}
          type="text"
          className="p-4 border border-black/50 rounded-sm"
          placeholder="Enter your name"
        />
        <p className="text-red-500">{errors.name?.message}</p>
      </div>
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
        {isSubmitting ? "Registering..." : "Register"}
      </Button>
    </form>
  );
};

export default RegisterForm;
