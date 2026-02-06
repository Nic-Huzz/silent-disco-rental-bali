export default function DirectAnswer({ question, answer }: { question: string; answer: string }) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#5e17eb]/5 border border-[#5e17eb]/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            {question}
          </h2>
          <p className="speakable-answer text-gray-700 text-lg leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </section>
  );
}
