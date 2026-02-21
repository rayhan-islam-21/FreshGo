import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/validation";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const RegisterForm = () => {
  return (
    <form className="max-w-2xl shadow-sm rounded-xl mx-auto p-8 mt-12">
        <h1 className="text-2xl font-bold text-center">Create Account</h1>
      <div className="p-2 flex items-start flex-col gap-2">
        <Label>Name</Label>
        <Input
          type="text"
          className="p-4 border border-black/50 rounded-sm"
          placeholder="Enter your name"
        />
      </div>
      <div className="p-2 flex items-start flex-col gap-2">
        <Label>Email</Label>
        <Input
          type="email"
          className="p-4 border border-black/50 rounded-sm"
          placeholder="Enter your email"
        />
      </div>
      <div className="p-2 flex items-start flex-col gap-2">
        <Label>Password</Label>
        <Input
          type="password"
          className="p-4 border border-black/50 rounded-sm"
          placeholder="Enter your password"
        />
      </div>

      <Button size="lg" variant="outline" className="bg-green-500 text-white w-full mt-8">create account</Button>
      
    </form>
  );
};

export default RegisterForm;
