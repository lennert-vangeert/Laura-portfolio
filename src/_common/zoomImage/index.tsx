import React from "react";
import { HoverCard, Image } from "@mantine/core";

// A reusable component for an image with zoom popover effect
interface ZoomImageProps {
  imageUrl: string;
  alt: string;
  thumbnailSize?: number;
  zoomSize?: number;
}

const ZoomImage: React.FC<ZoomImageProps> = ({
  imageUrl,
  alt,
  thumbnailSize = 300,
  zoomSize = 600,
}) => {
  return (
    <HoverCard openDelay={200} closeDelay={200}>
      <HoverCard.Target>
        <Image
          src={imageUrl}
          alt={alt}
          width={thumbnailSize}
          height={thumbnailSize}
          style={{ objectFit: "cover", cursor: "pointer" }}
        />
      </HoverCard.Target>
      <HoverCard.Dropdown>
        {/* Display a larger image version */}
        <Image
          src={imageUrl}
          alt={alt}
          width={zoomSize}
          height={zoomSize}
          style={{ objectFit: "cover" }}
        />
      </HoverCard.Dropdown>
    </HoverCard>
  );
};

export default ZoomImage;
