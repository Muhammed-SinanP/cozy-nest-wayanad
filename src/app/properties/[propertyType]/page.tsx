import PropertyDetailsClient from "./PropertyDetailsClient";

const PropertyDetails = async ({
  params,
}: {
  params: Promise<{ propertyType: string }>;
}) => {
  const { propertyType } = await params;
  const title = propertyType.replaceAll("-", " ");

  return <PropertyDetailsClient title={title} />;
};

export default PropertyDetails;
