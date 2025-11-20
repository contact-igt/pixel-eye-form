import Header from "@/common/Header";
import ImageSlider from "@/component/Imageslider";
import OverlayForm from "@/component/Overlayform";

const HomePageComponent = () => {
  return (<>
    <Header />
    <div className="position-relative">
      <ImageSlider />
      <OverlayForm />
    </div>
  </>
  );
};

export default HomePageComponent;
