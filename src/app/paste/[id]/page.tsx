// app/paste/[id]/page.tsx
import { kv } from '@vercel/kv';

interface PasteProps {
  params: { id: string };
}

export default async function Paste({ params }: PasteProps) {
  const content = await kv.get<string>(params.id);

  if (!content) {
    return <div>Content not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Saved Content</h1>
      <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded">{content}</pre>
    </div>
  );
}