import Hero from "@/components/Home/Hero";
import Plans from "@/components/Home/Plans";

const HomePage = () => {
  return (
    <div className="flex-col items-center">
      <Hero />
      <Plans />
    </div>
  );
};

export default HomePage;
