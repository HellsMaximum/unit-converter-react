import ConverterCard from "@/components/ConverterCard";
import { converters } from "@/data/converters";
const Home = () => {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <section className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Convert anything, instantly
        </h2>
        <p className="text-base text-slate-600 mt-3 max-w-xl mx-auto">
          The same converters you built by hand in Week 2, this time from one
          component that remembers what you typed and converts both ways.
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {converters.map((converter) => (
          <ConverterCard
            key={converter.id}
            title={converter.title}
            fromUnit={converter.fromUnit}
            toUnit={converter.toUnit}
            factor={converter.factor}
          />
        ))}
      </div>
    </main>
  );
};
export default Home;
