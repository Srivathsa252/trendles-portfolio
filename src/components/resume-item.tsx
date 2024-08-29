import { Card, Typography } from "@material-tailwind/react";

interface ResumeItemProps {
  icon: React.ElementType;
  child: string;
  description: string;
}

export function ResumeItem({ icon: Icon, child,description }: ResumeItemProps) {
  return (
    <div className="flex items-start gap-4">
      <Card
        color="gray"
        className="h-12 w-12 shrink-0 items-center justify-center !rounded-lg"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <Icon className="h-6 w-6" strokeWidth={2} />
      </Card>
      <Typography
        className="w-full font-normal !text-gray-500"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        {child}<br/>
        {description && <span> {description}</span>}
      </Typography>
    </div>
  );
}

export default ResumeItem;
