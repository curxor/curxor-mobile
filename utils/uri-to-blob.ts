export const uriToBlob = async (uri: string) => {
  const response = await fetch(uri);
  const blob = await response.blob();

  const filename = uri.split("/").pop() || "image.jpg";
  const type = blob.type || "image/jpeg";

  return new File([blob], filename, { type });
};
