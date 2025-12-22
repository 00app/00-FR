import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    const apiKey = process.env.ELEVEN_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing ELEVEN_API_KEY" },
        { status: 500 }
      );
    }

    // First, get available voices to find a valid one
    let voiceId: string | null = null;
    
    try {
      const voicesResponse = await fetch(
        "https://api.elevenlabs.io/v1/voices",
        {
          method: "GET",
          headers: {
            "xi-api-key": apiKey
          }
        }
      );

      if (voicesResponse.ok) {
        const voicesData = await voicesResponse.json();
        console.log("Available voices count:", voicesData.voices?.length || 0);
        
        if (voicesData.voices && voicesData.voices.length > 0) {
          // Try to find a French voice, or use the first available
          const frenchVoice = voicesData.voices.find((v: any) => 
            v.name?.toLowerCase().includes("french") || 
            v.name?.toLowerCase().includes("camille") ||
            v.labels?.language === "fr" ||
            v.labels?.accent === "french"
          );
          
          if (frenchVoice) {
            voiceId = frenchVoice.voice_id;
            console.log("Using French voice:", frenchVoice.name, voiceId);
          } else {
            // Use first available voice
            voiceId = voicesData.voices[0].voice_id;
            console.log("Using first available voice:", voicesData.voices[0].name, voiceId);
          }
          
          // Log all available voices for debugging
          console.log("All available voices:", voicesData.voices.map((v: any) => ({
            id: v.voice_id,
            name: v.name,
            labels: v.labels
          })));
        }
      } else {
        const errorText = await voicesResponse.text();
        console.error("Failed to fetch voices:", errorText);
      }
    } catch (error) {
      console.error("Error fetching voices:", error);
    }

    // Fallback to a known working voice ID if we couldn't fetch voices
    if (!voiceId) {
      voiceId = "21m00Tcm4TlvDq8ikWAM"; // Rachel - known working voice
      console.log("Using fallback voice ID:", voiceId);
    }

    console.log("Generating speech with voice ID:", voiceId);

    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        method: "POST",
        headers: {
          "xi-api-key": apiKey,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          text,
          model_id: "eleven_multilingual_v2", // Multilingual model supports French
          voice_settings: {
            stability: 0.4,
            similarity_boost: 0.9
          }
        })
      }
    );

    if (!response.ok) {
      const details = await response.text();
      console.error("ElevenLabs TTS error:", details);
      console.error("Status:", response.status);
      console.error("Voice ID used:", voiceId);
      
      return NextResponse.json(
        { error: "ElevenLabs TTS error", details, voiceId },
        { status: response.status }
      );
    }

    const audio = await response.arrayBuffer();
    console.log("Audio generated successfully, size:", audio.byteLength, "bytes");

    return new NextResponse(audio, {
      headers: {
        "Content-Type": "audio/mpeg"
      }
    });

  } catch (err: any) {
    console.error("TTS error:", err);
    return NextResponse.json(
      { error: err.message || "Unexpected TTS Error" },
      { status: 500 }
    );
  }
}
