export default function About() {
  return (
    <div className="p-6 max-w-2xl mx-auto ">
      <h1 className="text-2xl font-bold text-center">Über uns</h1>
      <p className="mt-2 text-center">
        Wir sind Bird Travel — Wir lieben Reisen und helfen dir, die besten
        Ziele zu finden.
      </p>

      {/* GIF Animation */}
      <div className="flex justify-center mt-6">
        <img
          src="../public/airplane.svg"
          alt="Bird Animation"
          className="w-96 object-contain "
        />
      </div>
    </div>
  );
}
