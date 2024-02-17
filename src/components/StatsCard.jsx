import React from "react";
import { Card, Typography } from "@material-tailwind/react";



export function StatsCard({icons}) {
    const { Icon, count, title } = icons
  return (
    <Card color="transparent" shadow={false} className="items-center flex flex-col">
      <Icon className="h-7 w-7 text-gray-900" />
      <Typography variant="h1" color="blue-gray" className="mb-2 mt-4 text-5xl">
        {count}
      </Typography>
      <Typography variant="h6" className="mb-2 font-normal text-blue-gray-500">
        {title}
      </Typography>
    </Card>
  );
}

export default StatsCard;