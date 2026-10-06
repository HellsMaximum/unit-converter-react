import { converters } from "@/data/converters";
const Footer = () => {
  return (
    <footer className="border-t border-slate-200 mt-16">
      <div
        className="max-w-5xl mx-auto px-6 py-6 flex items-center
justify-between"
      >
        <p className="text-sm text-slate-500">
          {converters.length} converters, one component.
        </p>
        <p className="text-sm text-slate-400">CPRG 306 · Week 4</p>
      </div>
    </footer>
  );
};
export default Footer;
