import React from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center text-pink-800">
      <h1 className="text-4xl font-bold mb-4">Your Pink Canvas</h1>
      <p className="text-lg mb-6">Chat with the agent to start making edits.</p>
      <Button className="bg-pink-500 hover:bg-pink-600 text-white">
        Get Started
      </Button>
    </div>
  );
};

export default Index;