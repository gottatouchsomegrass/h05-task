"use client"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import Image from "next/image";
import ProductSection from "@/app/components/ProductsSection";
import { Star, StarHalf } from 'lucide-react';
import { React,useState } from "react";
import ReviewsSection from "@/app/components/Reviews";
import ProductPageDetails from "@/app/components/Productdetails";

export default function ProductPage() {

  return (
    <>
      <Navbar />
      <ProductPageDetails/>
      <ReviewsSection/>
      <ProductSection/>
      <Footer />
    </>
  );
}


