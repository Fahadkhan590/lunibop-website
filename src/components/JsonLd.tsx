export function JsonLd({ data }: { data: Record<string, any> | Record<string, any>[] }) {
  const json = Array.isArray(data) ? data : [data];
  return (
    <>
      {json.map((item, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
