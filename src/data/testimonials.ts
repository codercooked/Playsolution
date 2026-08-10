export interface Testimonial {
  id: number;
  schoolName: string;
  city: string;
  rating: number;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    schoolName: "Sunshine Montessori",
    city: "Pune",
    rating: 5,
    quote: "The quality of the indoor play equipment is outstanding. The colors are vibrant, and most importantly, the safety standards exceed our expectations. Delivery was prompt and installation was seamless."
  },
  {
    id: 2,
    schoolName: "Little Stars Preschool",
    city: "Hyderabad",
    rating: 5,
    quote: "We ordered several outdoor play sets and they have been a massive hit with the children! The durability against weather is impressive. We highly recommend Play Solution to other schools."
  },
  {
    id: 3,
    schoolName: "Rainbow Kids Academy",
    city: "Mumbai",
    rating: 5,
    quote: "Their classroom furniture completely transformed our learning spaces. The tables and chairs are ergonomic and perfectly sized for young children. Exceptional service from start to finish."
  },
  {
    id: 4,
    schoolName: "Tiny Tots International",
    city: "Bangalore",
    rating: 5,
    quote: "Safety was our top priority when selecting slides and swings. Play Solution delivered incredibly sturdy structures that our kids love. Fantastic build quality and great customer support."
  },
  {
    id: 5,
    schoolName: "Happy Hearts Kindergarten",
    city: "Chennai",
    rating: 5,
    quote: "The educational toys we purchased are incredibly engaging and robust enough to handle daily use by dozens of children. The wooden blocks and puzzles are absolute favorites in our classrooms."
  },
  {
    id: 6,
    schoolName: "Bright Minds School",
    city: "Delhi",
    rating: 5,
    quote: "From the initial consultation to the final setup of our new playground, the team was highly professional. The multi-play station is top-notch and the kids simply can't get enough of it!"
  }
];
