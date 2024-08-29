"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Creative Horizons: Showcasing Talent Through Magazines",
    children:
      "I plan to introduce magazines that will showcase the creative work of the LitSoc community and Chitrachaya's photography. This initiative will provide proper recognition for 1st and 2nd-year students, with hard copies available in the library and purchasable for those interested.",
  },
  {
    icon: FingerPrintIcon,
    title: "Proper Documentation",
    children:
      "I will implement thorough documentation for every event conducted by every club to ensure transparency and keep a comprehensive record of our activities. This will help in tracking our progress, sharing our achievements, and improving future events.",
  },
  {
    icon: SwatchIcon,
    title: "Bi-monthly Photowalks",
    children:
      "I propose to organize bi-monthly photowalks to explore and capture diverse environments. These walks will provide hands-on experience and creative inspiration for photographers while fostering a sense of community among participants.",
  },
  {
    icon: HashtagIcon,
    title: " Re-structuring of the club",
    children:
      "To ensure active participation, Trendles will focus on restructuring existing clubs to enhance their functionality. Dead clubs will be given a probation period to demonstrate their effectiveness; those that fail to show meaningful activity will face temporary deactivation.",
  },
  {
    icon: EyeIcon,
    title: "Certification and Proper recognizations for the 1st and 2nd years",
    children:
      "I will implement a system of certifications and proper recognition for 1st and 2nd-year students for their valuable contributions and achievements . This initiative will provide formal acknowledgment of their efforts,and help them build a strong foundation of accomplishment early in their academic journey.",
  },
  {
    icon: DocumentTextIcon,
    title: "Awards ceremony for Trendles",
    children:
      "I will organize an awards ceremony for Trendles Club, where the top two contributors from each club will be recognized and awarded a prize. This event will celebrate their exceptional efforts and achievements, providing a platform to honor their hard work and dedication.",
  },
  {
    icon: DocumentTextIcon,
    title: "New club for OPERATIONS AND DOCUMENTATION ",
    children:
      "I m establishing a new club focused on Operations and Documentation, where I collaborate with teams to create promotional materials, resolve operational challenges for optimized efficiency, and develop event proposals. Moreover organizing and maintaining a central repository of documentation, ensuring clarity, accuracy, and alignment with the club's mission.",
  },
  {
    icon: SwatchIcon,
    title: "Expanding Opportunities Beyond the Campus",
    children:
      "Our quizzing and debating club is dedicated in preparing members for external competitions. I ensure comprehensive guidance and support, helping participants enhance their skills and achieve excellence beyond the college and partcipate in competations from other colleges in both online and offline methods.",
  },
  {
    icon: EyeIcon,
    title: "Proper community for anime and manga lovers",
    children:
      "I propose active community for anime and manga enthusiasts, featuring active events such as online quizzes, competitions, and engaging activities like anime screenings. This initiative aims to create a lively and inclusive space where fans can connect, share their passion, and enjoy a range of fun, themed events.",
  },
];

export function Skills() {
  return (
    <section id="px-8" className="px-8">
      <div id="aa" className="container mx-auto mb-20 text-center">
        <Typography
          color="blue-gray"
          className="mb-2 font-bold uppercase text-lg"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          my vision
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          What I Want to do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          I am Srivathsa, eager to share my proven methodology to elevate our collective experience at the Trendles Club.
          As part of my commitment to fostering a vibrant community, I plan to enhance the Trendles Club by expanding its initiatives, ensuring ample resources for organizing impactful events that cater to the diverse interests of our student body.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
