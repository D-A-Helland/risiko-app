'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function DocumentViewer({ file }: { file: string }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/docs/${file}`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [file]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
