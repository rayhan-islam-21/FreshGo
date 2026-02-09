"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Save,
  Rocket,
  Upload,
  X,
  Package,
  Info,
} from "lucide-react";
import { TbCoinTakaFilled } from "react-icons/tb";
import Image from "next/image";

const AddProductPage = () => {
  const [preview, setPreview] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      status: "In Stock",
      tax: "yes",
      unlimited: false,
    },
  });

  const onSubmit = async (data) => {
    // API call logic goes here
    console.log("Form Submitted:", data);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // Watch the unlimited status to disable the quantity input
  const isUnlimited = watch("unlimited");

  return (
    <div className="min-h-screen  p-6 md:p-10">
      {/* Top Navigation / Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
        <div>
          <h1 className="text-2xl font-extrabold  tracking-tight">
            Add New Product
          </h1>
          <p className=" text-sm font-medium mt-1">
            Fill in the details to list a new product in your store.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="outline"
            className=" border-slate-200 font-bold h-11 px-6 rounded-xl"
          >
            <Save className="h-4 w-4 mr-2" /> Save Draft
          </Button>
          <Button
            type="submit"
            form="product-form"
            disabled={isSubmitting}
            className="bg-[#4EA674] hover:bg-[#3d855c] text-white font-bold h-11 px-8 rounded-xl shadow-sm  transition-all active:scale-95"
          >
            <Rocket className="h-4 w-4 mr-2" />
            {isSubmitting ? "Publishing..." : "Publish Product"}
          </Button>
        </div>
      </div>

      <form
        id="product-form"
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 xl:grid-cols-3 gap-8"
      >
        {/* Main Details Section */}
        <div className="xl:col-span-2 space-y-8">
          <Card className="border-slate-100 shadow-sm rounded-lg    overflow-hidden">
            <CardHeader className="border-b border-slate-50 px-8  py-6">
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Info className="h-5 w-5 text-green-500" /> Basic Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6 ">
              <div className="space-y-2">
                <Label className="text-slate-400 font-bold text-sm">
                  Product Name
                </Label>
                <Input
                  {...register("name", { required: "Name is required" })}
                  className={`h-12 bg-slate-50/50 border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/10 transition-all ${errors.name ? "border-red-400" : ""}`}
                  placeholder="e.g. Apple iPhone 15"
                />
                {errors.name && (
                  <span className="text-red-500 text-xs font-bold">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-slate-400 font-bold text-sm">
                  Description
                </Label>
                <Textarea
                  {...register("description")}
                  className="min-h-45 bg-slate-50/50 border-slate-200 rounded-xl resize-none p-4 focus:ring-2 focus:ring-indigo-500/10 transition-all"
                  placeholder="Describe the key features and specifications..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Pricing & Inventory Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-slate-200 shadow-sm rounded-lg p-2">
              <CardHeader className="px-6 py-4">
                <CardTitle className="text-md font-bold flex items-center gap-2">
                  <TbCoinTakaFilled className="h-6 w-6 text-emerald-500" /> Pricing
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6 space-y-4">
                <div className="space-y-2">
                  <Label className="font-bold text-slate-400 text-xs">
                    Product Price
                  </Label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
                      <TbCoinTakaFilled/>
                    </span>
                    <Input
                      type="number"
                      {...register("price")}
                      className="h-11 pl-8 bg-slate-50/50 border-slate-200 rounded-xl font-bold"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <Label className="font-bold text-slate-400 text-xs">
                    Tax Included
                  </Label>
                  <Switch
                    onCheckedChange={(val) =>
                      setValue("tax", val ? "yes" : "no")
                    }
                    defaultChecked
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm rounded-lg  p-2">
              <CardHeader className="px-6 py-4">
                <CardTitle className="text-md font-bold flex items-center gap-2">
                  <Package className="h-4 w-4 text-amber-500" /> Inventory
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6 space-y-4">
                <div className="space-y-2">
                  <Label className="font-bold text-slate-400 text-xs">
                    Stock Quantity
                  </Label>
                  <Input
                    type="number"
                    {...register("stock")}
                    disabled={isUnlimited}
                    className="h-11 bg-slate-50/50 border-slate-200 rounded-xl font-bold disabled:opacity-30"
                    placeholder="0"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="unlimited"
                    onCheckedChange={(val) => setValue("unlimited", !!val)}
                  />
                  <Label
                    htmlFor="unlimited"
                    className="text-xs font-bold text-slate-400 cursor-pointer"
                  >
                    Unlimited Stock
                  </Label>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Column: Media */}
        <div className="space-y-8">
          <Card className="border-slate-100 shadow-sm rounded-lg  overflow-hidden">
            <CardHeader className="border-b border-slate-50 px-6 py-4">
              <CardTitle className="text-md font-bold text-slate-800">
                Product Media
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="relative border-2 border-dashed border-slate-200 rounded-2xl transition-all hover:bg-slate-50/50">
                {preview ? (
                  <div className="p-2 relative aspect-square">
                    <Image
                      src={preview}
                      alt="Preview"
                      fill
                      className="w-full h-full object-cover rounded-xl shadow-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setPreview(null)}
                      className="absolute top-4 right-4  p-1.5 rounded-full shadow-md text-red-500 hover:bg-red-50 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center p-12 cursor-pointer group">
                    <div className="h-12 w-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <Upload className="h-5 w-5 text-slate-400" />
                    </div>
                    <span className="text-sm font-bold text-slate-700">
                      Upload Image
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleImageChange}
                      accept="image/*"
                    />
                  </label>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Visibility Section */}
          <Card className="border-slate-100 shadow-sm rounded-lg p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <Checkbox id="featured" />
              <Label
                htmlFor="featured"
                className="text-sm font-bold text-slate-600 cursor-pointer"
              >
                Featured Product
              </Label>
            </div>
            <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
              Checking this will display the product on the homepage featured
              section.
            </p>
          </Card>
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;
