export default function UploadProgress({ progress }: { progress: number }) {
    return (
      <div className="mt-4">
        <p className="text-gray-600">Uploading: {progress}%</p>
        <div className="w-full bg-gray-200 h-2 rounded-lg overflow-hidden">
          <div className="h-full bg-blue-600 transition-all" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    );
  }
  