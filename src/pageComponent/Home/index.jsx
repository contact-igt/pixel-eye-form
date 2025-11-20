import ImageSlider from "@/component/Imageslider";
import OverlayForm from "@/component/Overlayform";

const HomePageComponent = () => {
  return (
    <div className="position-relative overflow-hidden">
      <ImageSlider />
      <OverlayForm />
    </div>
  );
};

export default HomePageComponent;
