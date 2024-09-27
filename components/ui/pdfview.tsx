import { useEffect, useRef } from 'react';

const PdfViewer = ({ pdfUrl }: { pdfUrl: string }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src = pdfUrl;
    }
  }, [pdfUrl]);

  return (
    <div className="flex flex-col items-center">
      <iframe ref={iframeRef} className="w-full h-screen" />
      <a href={pdfUrl} download className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
        Download Resume
      </a>
    </div>
  );
};

export default PdfViewer;
