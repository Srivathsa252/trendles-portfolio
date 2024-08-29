"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    child: "Outreach Club Sub-Lead",
    description: "I actively spearheaded sponsorship drives for Apoorv, ensuring successful collaborations and contributing significantly to the events success."
  },
  {
    icon: PuzzlePieceIcon,
    child: "Marketing Strategy team Apoorv-2024 ",
    description: " I played a key role in driving outreach efforts and leading successful sponsorship campaigns "
  },
  {
    icon: CursorArrowRaysIcon,
    child: "Social media management for Apoorv 2024",
    description: "I managed social media for Apoorv 2024, achieving a reach of 1.5 lakh and maintaining daily engagement with 15k views."
  },
];

export function Resume() {
  return (
    <section id = "px-8-py-24" className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            Prevoius Positions in the club
          </Typography>
          <Typography
            className="mb-4 mt-3 w-9/12 font-normal !text-gray-500"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
          Previously, I served as a Social Outreach Sublead, where I played a major role in both digital marketing and social outreach initiatives. I managed the social media handle for Apoorv, the annual techno-cultural fest of IIIT Kottayam, effectively boosting its online presence and engagement. My past experience in these areas has equipped me with the skills and insights necessary to drive successful campaigns and foster strong community connections.
          </Typography>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
        {RESUME_ITEMS.map(({ icon: Icon, child, description }, idx) => (
  <ResumeItem key={idx} icon={Icon} child={child} description={description} />
))}

        </div>
      </div>
    </section>
  );
}

export default Resume;
