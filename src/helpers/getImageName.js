const getImageName = (type) => {
  const images = {
    bungalow: "bungalow.jpg",
    cottage: "cottage.jpg",
    detached: "detached.jpg",
    endTerrace: "end-terrace.jpg",
    flat: "flat.jpg",
    semiDetached: "semi-detached.jpg",
    terrace: "terrace.jpg",
    default: "example.jpg",
  };

  if (type === "Bungalow") return images.bungalow;
  if (type === "Cottage") return images.cottage;
  if (type === "Detached") return images.detached;
  if (type === "End Terrace") return images.endTerrace;
  if (type === "Flat") return images.flat;
  if (type === "Semi-Detached") return images.semiDetached;
  if (type === "Terrace") return images.terrace;
  return images.example;
};

export default getImageName;
