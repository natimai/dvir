interface TestimonialCardProps {
  content: string;
  name: string;
}

const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

export function TestimonialCard({ content, name }: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl p-6 mx-2",
        "bg-white/80 backdrop-blur-sm hover:bg-white/95",
        "border border-white/20 shadow-lg",
        "transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1",
      )}
    >
      <div className="text-center">
        <blockquote className="mt-2 text-base leading-relaxed text-gray-800">
          <span className="text-4xl text-primary-600 opacity-10 block mb-2">"</span>
          {content}
        </blockquote>
        <figcaption className="mt-4 text-sm font-medium text-primary-700">
          - {name}
        </figcaption>
      </div>
    </figure>
  );
} 