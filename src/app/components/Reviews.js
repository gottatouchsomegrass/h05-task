"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    name: "Samantha D.",
    date: "August 14, 2023",
    rating: 4.5,
    review:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
  },
  {
    name: "Alex M.",
    date: "August 15, 2023",
    rating: 5,
    review:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
  },
  {
    name: "Ethan R.",
    date: "August 16, 2023",
    rating: 4.5,
    review:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
  },
  {
    name: "Olivia P.",
    date: "August 17, 2023",
    rating: 5,
    review:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
  },
  {
    name: "Liam K.",
    date: "August 18, 2023",
    rating: 5,
    review:
      "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
  },
  {
    name: "Ava H.",
    date: "August 19, 2023",
    rating: 4.5,
    review:
      "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  return (
    <div className="flex items-center text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} size={16} fill="currentColor" stroke="none" />
      ))}
      {hasHalfStar && <StarHalf size={16} fill="currentColor" stroke="none" />}
    </div>
  );
};

export default function ReviewsSection() {
  const [sort, setSort] = useState("Latest");

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4 max-w-[1350px] mx-auto">
        <h2 className="md:text-2xl text-lg font-semibold">All Reviews ({reviews.length})</h2>
        <div className="flex items-center space-x-2">
          <button className="rounded-full bg-[#F0F0F0] scale-80"><img src="/Product Page/Frame 19.png" alt="sys logo"></img></button>
          <Button variant="outline" className="text-sm hidden md:flex rounded-full bg-[#F0F0F0]">
            {sort}
          </Button>
          <Button height={48} width={148} className="text-sm rounded-full font-light">Write a Review</Button>
        </div>
      </div>

      <div className="max-w-[1350px] grid md:grid-cols-2 gap-4 mx-auto">
        {reviews.map((review, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="mb-2">
                <StarRating rating={review.rating} />
              </div>
              <h3 className="font-semibold text-sm mb-1 flex flex-row">{review.name}<span><Image width={19.5} height={19.5} src={`/Product Page/Vector.png`} className="md:w-[19.5] md:h-[19.5] w-[15.44] h-[15.44] ml-2"/></span></h3>
              <p className="text-sm mb-2">{review.review}</p>
              <p className="text-xs text-gray-500">Posted on {review.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
