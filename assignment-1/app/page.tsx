"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

const topics = ["success", "motivation", "focus"];

export default function Home() {
  const [topic, setTopic] = useState("");
  const [quotes, setQuotes] = useState<string[]>([]);

  const handleGenerate = () => {
    const filtered = allQuotes
      .filter((q) => topic && q.topic === topic)
      .map((q) => q.quote)
      .slice(0, 3);
    setQuotes(filtered);
  };

  const handleSurprise = () => {
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    setTopic(randomTopic);
    const filtered = allQuotes
      .filter((q) => q.topic === randomTopic)
      .map((q) => q.quote)
      .slice(0, 3);
    setQuotes(filtered);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-6">Motivational Quote Generator</h1>
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <Select
          onValueChange={(value) => setTopic(value === "none" ? "" : value)}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select topic" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">None</SelectItem>
            <SelectItem value="success">Success</SelectItem>
            <SelectItem value="motivation">Motivation</SelectItem>
            <SelectItem value="focus">Focus</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={handleGenerate}>Generate</Button>
        <Button onClick={handleSurprise} variant="outline">Surprise Me</Button>
      </div>
      <div className="text-center space-y-2">
        {quotes.map((quote, idx) => (
          <p key={idx} className="text-gray-700">{quote}</p>
        ))}
      </div>
    </main>
  );
}
