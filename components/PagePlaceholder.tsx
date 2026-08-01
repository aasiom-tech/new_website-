type PagePlaceholderProps = {
  title: string;
};

export function PagePlaceholder({ title }: PagePlaceholderProps) {
  return (
    <section className="container py-12 md:py-16" aria-labelledby="page-title">
      <div className="text-measure">
        <h1 id="page-title">{title}</h1>
        <p className="mt-4">Page structure pending approved implementation.</p>
      </div>
    </section>
  );
}
