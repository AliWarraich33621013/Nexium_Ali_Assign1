"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const allQuotes = [
  { topic: "success", quote: "Success is not final, failure is not fatal: It is the courage to continue that counts." },
  { topic: "success", quote: "Don’t watch the clock; do what it does. Keep going." },
  { topic: "success", quote: "Success usually comes to those who are too busy to be looking for it." },
  { topic: "motivation", quote: "The secret of getting ahead is getting started." },
  { topic: "motivation", quote: "Push yourself, because no one else is going to do it for you." },
  { topic: "motivation", quote: "Great things never come from comfort zones." },
  { topic: "focus", quote: "Focus on being productive instead of busy." },
  { topic: "focus", quote: "You get what you focus on, so focus on what you want." },
  { topic: "focus", quote: "Starve your distractions, feed your focus." }
];

export default function Home() {
  const [topic, setTopic] = useState("");
  const [quotes, setQuotes] = useState<string[]>([]);

  const handleGenerate = () => {
    const filtered = allQuotes
      .filter((q) => q.topic.toLowerCase() === topic.toLowerCase())
      .slice(0, 3)
      .map((q) => q.quote);
    setQuotes(filtered.length ? filtered : ["No quotes found for this topic."]);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-4">
      <h1 className="text-2xl font-bold">Motivational Quote Generator</h1>
      <div className="flex gap-2 w-full max-w-md">
        <Input
          placeholder="Enter a topic (e.g. success, motivation, focus)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <Button onClick={handleGenerate}>Generate</Button>
      </div>
      <div className="mt-4 space-y-3 max-w-xl text-center">
        {quotes.map((q, idx) => (
          <p key={idx} className="text-muted-foreground">{q}</p>
        ))}
      </div>
    </main>
  );
}
