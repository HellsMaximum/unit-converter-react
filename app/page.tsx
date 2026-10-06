import ConverterCard from "@/components/ConverterCard";
const Home = () => {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <ConverterCard title="Weight" fromUnit="Kilograms" toUnit="Pounds" factor={2.20462} />
    </main>
  );
};
export default Home;
