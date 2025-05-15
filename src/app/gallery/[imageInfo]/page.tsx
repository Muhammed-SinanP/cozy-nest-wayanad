import { gallery } from "@/data/gallery";
import Image from "next/image";

const ImagePreview = async ({
  params,
}: {
  params: Promise<{ imageInfo: string }>;
}) => {
  const { imageInfo } = await params;
  const imageIndex = parseInt(imageInfo);

  const imageObj = gallery.find((image) => image.index === imageIndex);

  if (!imageObj) {
    return (
      <div className="min-h-screen p-4 text-center text-red-500">
        Image not found
      </div>
    );
  }
  return (
    <div className="min-h-screen relative">
      <Image
        src={imageObj?.src}
        alt={`Image ${imageInfo} in gallery`}
        fill
        className="object-contain"
        priority
      />
    </div>
  );
};

export default ImagePreview;
