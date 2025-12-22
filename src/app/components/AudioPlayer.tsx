"use client";

import { useState } from "react";
import { PrimaryButton } from "./PrimaryButton";

export default function AudioPlayer({ text }: { text: string }) {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateAudio = async () => {
    setLoading(true);
    setError(null);
    setAudioUrl(null);

    // Clean up previous URL
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }

    try {
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ error: "TTS failed" }));
        console.error("TTS failed:", errorData);
        console.error("Full error data:", JSON.stringify(errorData, null, 2));
        
        // Show detailed error message
        let errorMessage = errorData.error || "Failed to generate audio";
        if (errorData.body) {
          errorMessage += ` - ${errorData.body}`;
        } else if (errorData.details) {
          errorMessage += ` - ${errorData.details}`;
        }
        if (errorData.status) {
          errorMessage += ` (Status: ${errorData.status})`;
        }
        
        setError(errorMessage);
        setLoading(false);
        return;
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
      setLoading(false);
    } catch (error) {
      console.error("Failed to generate audio:", error);
      setError(error instanceof Error ? error.message : "Failed to generate audio");
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <PrimaryButton
        onClick={generateAudio}
        disabled={loading || !text}
        className="w-full md:w-auto"
      >
        {loading ? "loading audio..." : "play lesson"}
      </PrimaryButton>

      {error && (
        <p 
          className="text-red-400"
          style={{ 
            fontFamily: 'var(--font-body)', 
            fontWeight: 'var(--font-weight-bold)', 
            fontSize: 'var(--text-body)', 
            lineHeight: 'var(--line-height-tight)'
          }}
        >
          Error: {error}
        </p>
      )}

      {audioUrl && (
        <audio 
          controls 
          src={audioUrl} 
          className="w-full"
          onError={(e) => {
            console.error("Audio playback error:", e);
            setError("Failed to play audio");
          }}
        />
      )}
    </div>
  );
}
