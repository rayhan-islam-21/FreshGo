"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import {
  Rocket,
  Upload,
  Info,
  Plus,
  RotateCcw,
  Link as LinkIcon,
  Percent,
  Trash2,
  Camera,
} from "lucide-react";
import { TbCoinTakaFilled } from "react-icons/tb";
import Image from "next/image";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AddProductPage = () => {
  const [images, setImages] = useState([]);
  const [mainPreviewIndex, setMainPreviewIndex] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      name: "",
      category: "",
      tag: "",
      unlimited: false,
      price: 0,
      discount: 0,
    },
  });

  const notify = () => toast("Here is your toast.");

  const price = watch("price");
  const discount = watch("discount");
  const isUnlimited = watch("unlimited");
  const name = watch("name");
  const [finalPrice, setFinalPrice] = useState(0);

  // Calculate Final Price
  useEffect(() => {
    const p = parseFloat(price) || 0;
    const d = parseFloat(discount) || 0;
    const discounted = p - (p * Math.min(d, 100)) / 100;
    setFinalPrice(discounted > 0 ? discounted : 0);
  }, [price, discount]);

  const onSubmit = async (data) => {
    // Add images to the final data payload
    const formData = { ...data, productImages: images, finalPrice };
    console.log("Form Submitted Successfully:", formData);
    alert("Product Published! Check console for data.");
  };

  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;
    setIsUploading(true);
    try {
      const uploadPromies = files.map((file) => uploadToCloudinary(file));
      const uploadUrls = await Promise.all(uploadPromies);
      setImages((prev) => [...prev, ...uploadUrls]);
    } catch (error) {
      console.error("Cloudinary Upload Error:", error);
      notify();
    } finally {
      setIsUploading(false);
    }
  };

  useEffect(() => {
    if (name) {
      // 1. Clean the name
      const baseSlug = name
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      const currentSlug = watch("slug");
      const existingId = currentSlug?.split("-").pop();
      const isFourDigits = /^\d{4}$/.test(existingId);

      const uniqueId = isFourDigits
        ? existingId
        : Date.now().toString().slice(-4);

      setValue("slug", `${baseSlug}-${uniqueId}`, { shouldValidate: true });
    }
  }, [name, setValue, watch]);

  const removeImage = (index) => {
    const filtered = images.filter((_, i) => i !== index);
    setImages(filtered);
    if (mainPreviewIndex >= filtered.length) setMainPreviewIndex(0);
  };

  const uploadToCloudinary = async (file) => {
    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("upload_preset", "freshgo");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dnrubj8x4/image/upload",
      formdata,
    );
    const data = response.data;
    return data.secure_url;
  };

  return (
    <div className="min-h-screen p-6 md:p-10 ">
      <Toaster />
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6 max-w-300 mx-auto">
        <div>
          <h1 className="text-3xl font-black tracking-tight">Create Product</h1>
          <p className="text-slate-500 font-medium mt-1">
            Manage your store inventory and pricing.
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Button
            type="submit"
            form="product-form"
            disabled={isSubmitting}
            className="bg-[#21C45D] hover:bg-[#19a34d] text-white font-bold h-12 px-8 rounded-lg shadow-sm transition-all active:scale-95"
          >
            <Rocket className="h-4 w-4 mr-2" />
            {isSubmitting ? "Publishing..." : "Publish Now"}
          </Button>
        </div>
      </div>

      <form
        id="product-form"
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 xl:grid-cols-3 gap-8 max-w-300 mx-auto"
      >
        {/* Left Column: Core Details */}
        <div className="xl:col-span-2 space-y-8">
          <Card className="border-none shadow-sm rounded-lg overflow-hidden ">
            <CardHeader className="px-8 pt-8 pb-4">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 bg-green-50 rounded-lg">
                  <Info className="h-5 w-5 text-green-600" />
                </div>
                General Information
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Product Name */}
                <div className="space-y-2">
                  <Label className="text-slate-500 font-bold text-xs uppercase ml-1">
                    Product Name
                  </Label>
                  <Input
                    {...register("name", {
                      required: "Product name is required",
                    })}
                    className={`h-14 bg-slate-50/50 border-slate-200 rounded-2xl transition-all text-base font-medium ${errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                    placeholder="MacBook Pro M3..."
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs font-bold mt-1 ml-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Slug */}
                <div className="space-y-2">
                  <Label className="text-slate-500 font-bold text-xs uppercase ml-1">
                    URL Slug
                  </Label>
                  <div className="relative">
                    <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                    <Input
                      {...register("slug", {
                        required: "URL slug is required",
                      })}
                      className={`h-14 pl-12 bg-slate-50/50 border-slate-200 rounded-2xl font-medium text-green-700 ${errors.slug ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                      placeholder="macbook-pro-m3"
                    />
                  </div>
                  {errors.slug && (
                    <p className="text-red-500 text-xs font-bold mt-1 ml-1">
                      {errors.slug.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label className="text-slate-500 font-bold text-xs uppercase ml-1">
                  Detailed Description
                </Label>
                <Textarea
                  {...register("description", {
                    required: "Description is required",
                  })}
                  className={`min-h-[200px] bg-slate-50/50 border-slate-200 rounded-2xl resize-none p-5 text-base ${errors.description ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                  placeholder="Describe the product features..."
                />
                {errors.description && (
                  <p className="text-red-500 text-xs font-bold mt-1 ml-1">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Pricing & Stock Card */}
          <Card className="border-none shadow-sm rounded-lg overflow-hidden ">
            <CardHeader className="px-8 pt-8 pb-4">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 bg-emerald-50 rounded-lg">
                  <TbCoinTakaFilled className="h-5 w-5 text-emerald-600" />
                </div>
                Pricing & Stock
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Base Price */}
                <div className="space-y-2">
                  <Label className="text-slate-500 font-bold text-xs uppercase ml-1">
                    Price
                  </Label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">
                      ৳
                    </span>
                    <Input
                      type="number"
                      {...register("price", {
                        required: "Price is required",
                        min: { value: 1, message: "Price must be > 0" },
                      })}
                      className={`h-14 pl-10 bg-slate-50/50 border-slate-200 rounded-2xl font-black text-lg ${errors.price ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                    />
                  </div>
                  {errors.price && (
                    <p className="text-red-500 text-xs font-bold mt-1 ml-1">
                      {errors.price.message}
                    </p>
                  )}
                </div>

                {/* Discount */}
                <div className="space-y-2">
                  <Label className="text-slate-500 font-bold text-xs uppercase ml-1">
                    Discount %
                  </Label>
                  <div className="relative">
                    <Percent className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                    <Input
                      type="number"
                      {...register("discount", { min: 0, max: 100 })}
                      className="h-14 pl-12 bg-slate-50/50 border-slate-200 rounded-2xl font-black text-orange-500 text-lg focus-visible:ring-orange-500"
                    />
                  </div>
                </div>

                {/* Final Price (Calculated) */}
                <div className="space-y-2">
                  <Label className="text-slate-500 font-bold text-xs uppercase ml-1">
                    Final Total
                  </Label>
                  <div className="h-14 flex items-center px-5 bg-[#21C45D] text-white rounded-2xl font-black text-lg shadow-inner">
                    ৳ {finalPrice.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Stock Logic */}
              <div className="flex flex-wrap items-end gap-8 pt-8 border-t border-slate-50">
                <div className="flex-1 min-w-[200px] space-y-2">
                  <Label className="text-slate-500 font-bold text-xs uppercase ml-1">
                    Inventory Count
                  </Label>
                  <Input
                    type="number"
                    {...register("stock", {
                      required: !isUnlimited
                        ? "Stock count is required"
                        : false,
                    })}
                    disabled={isUnlimited}
                    className={`h-14 bg-slate-50/50 border-slate-200 rounded-2xl font-bold text-lg disabled:opacity-20 ${errors.stock ? "border-red-500" : ""}`}
                    placeholder="0"
                  />
                  {errors.stock && (
                    <p className="text-red-500 text-xs font-bold mt-1 ml-1">
                      {errors.stock.message}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-3 h-14 bg-slate-50/50 px-6 rounded-2xl border border-slate-200 shadow-sm">
                  <Checkbox
                    id="unlimited"
                    onCheckedChange={(val) => {
                      setValue("unlimited", !!val);
                      if (val) setValue("stock", 0); // Reset stock if unlimited
                    }}
                  />
                  <Label
                    htmlFor="unlimited"
                    className="text-sm font-bold text-slate-600 cursor-pointer select-none uppercase tracking-tight"
                  >
                    Unlimited Stock
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Media & Selectors */}
        <div className="space-y-8">
          <Card className="border-none shadow-sm rounded-lg overflow-hidden ">
            <CardHeader className="px-6 py-5 border-b border-slate-50 flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Camera className="h-5 w-5 text-indigo-500" /> Media
              </CardTitle>
              {images.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  type="button"
                  onClick={() => setImages([])}
                  className="text-xs text-red-500 hover:bg-red-50 h-8"
                >
                  <Trash2 className="w-3 h-3 mr-1" /> Clear
                </Button>
              )}
            </CardHeader>
            <CardContent className="p-6 space-y-8">
              <div className="space-y-4">
                <div className="relative border-2 border-dashed border-slate-200 rounded-3xl p-4 flex flex-col items-center justify-center min-h-[260px] bg-slate-50/50 group transition-all hover:border-green-300">
                  {images.length > 0 ? (
                    <div className="relative w-full aspect-square">
                      <Image
                        src={images[mainPreviewIndex]}
                        alt="Main Preview"
                        fill
                        className="object-contain rounded-2xl"
                      />
                      <div className="absolute bottom-2 inset-x-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          type="button"
                          size="sm"
                          variant="secondary"
                          onClick={() => removeImage(mainPreviewIndex)}
                          className="h-9 px-4 rounded-xl  shadow-xl text-red-500 border-none hover:bg-red-50"
                        >
                          <RotateCcw className="w-3 h-3 mr-1" /> Remove
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer py-10">
                      <div className="p-4  rounded-2xl shadow-sm mb-4 group-hover:scale-110 transition-transform border border-slate-100">
                        <Upload className="h-6 w-6 text-green-500" />
                      </div>
                      <span className="text-sm font-bold text-slate-400">
                        Upload Product Images
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </label>
                  )}
                </div>

                {/* Thumbnails */}
                <div className="flex flex-wrap gap-3">
                  {images.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setMainPreviewIndex(idx)}
                      className={`relative w-14 h-14 rounded-xl cursor-pointer overflow-hidden transition-all ${mainPreviewIndex === idx ? "ring-2 ring-green-500 ring-offset-2" : "opacity-60 hover:opacity-100 hover:scale-105"}`}
                    >
                      <Image
                        src={img}
                        alt={`thumb-${idx}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                  <label className="w-14 h-14 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors">
                    <Plus className="w-5 h-5 text-slate-400" />
                    <input
                      type="file"
                      className="hidden"
                      multiple
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
              </div>

              {/* Category Selection */}
              <div className="space-y-6 pt-4 border-t border-slate-50">
                <div className="space-y-2">
                  <Label className="text-slate-400 font-bold text-[10px] uppercase tracking-widest ml-1">
                    Main Category
                  </Label>

                  {/* Register Hidden Field for Select Validation */}
                  <input
                    type="hidden"
                    {...register("category", {
                      required: "Please select a category",
                    })}
                  />

                  <Select
                    onValueChange={(v) =>
                      setValue("category", v, { shouldValidate: true })
                    }
                  >
                    <SelectTrigger
                      className={`w-full  border-none rounded-2xl h-14 font-semibold px-5 transition-all ${errors.category ? "ring-1 ring-red-500 bg-red-50/50" : "hover:bg-slate-100"}`}
                    >
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>

                    <SelectContent
                      position="popper"
                      side="bottom"
                      sideOffset={10}
                      className="rounded-xl  z-50 border-slate-100 bg-white shadow-sm w-[var(--radix-select-trigger-width)]"
                    >
                      <SelectGroup>
                        <SelectLabel className="text-[10px] font-black uppercase text-slate-300 px-4 py-2">
                          Tech
                        </SelectLabel>
                        <SelectItem
                          value="mobiles"
                          className="py-3 focus:bg-[#21C45D] focus:text-white rounded-md cursor-pointer transition-colors"
                        >
                          Smartphones
                        </SelectItem>
                        <SelectItem
                          value="laptops"
                          className="py-3 focus:bg-[#21C45D] focus:text-white rounded-md cursor-pointer transition-colors"
                        >
                          Laptops
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel className="text-[10px] font-black uppercase text-slate-300 px-4 py-2">
                          Lifestyle
                        </SelectLabel>
                        <SelectItem
                          value="men"
                          className="py-3 focus:bg-[#21C45D] focus:text-white rounded-md cursor-pointer transition-colors"
                        >
                          Men's Fashion
                        </SelectItem>
                        <SelectItem
                          value="women"
                          className="py-3 focus:bg-[#21C45D] focus:text-white rounded-md cursor-pointer transition-colors"
                        >
                          Women's Fashion
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.category && (
                    <p className="text-red-500 text-xs font-bold mt-1 ml-1">
                      {errors.category.message}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;
