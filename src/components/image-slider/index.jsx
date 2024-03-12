import { useEffect, useState } from "react";

export default function ImageSlider({ url, limit , page }) {
  const [image, setImage] = useState([]);
  const [currentSlider, setCurrentSlider] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data){
        setImage(data)
        setLoading(false)
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(
    () => {
      if (url !== "") fetchImages(url);
    },{ url });

    console.log(image)

  if (loading){
    return <div>Loading data. Please wait...</div>
  }

  if (errorMsg !== null){
    return <div>Error occured | {errorMsg}</div>
  }

  return <div className="container"></div>;
}
