"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { NewAgentDialogue } from "./new-agent-dialogue";
import { useState } from "react";

export const AgentsListHeader = () => {
  const [isDialogueOpen, setIsDialogueOpen] = useState(false);

  return (
    <>
      <NewAgentDialogue
        open={isDialogueOpen}
        onOpenChange={setIsDialogueOpen}
      />
      <div className="py-4 px-4 md:px-8 flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <h5 className="font-medium text-xl">My Agents</h5>
          <Button onClick={() => setIsDialogueOpen(true)}>
            <PlusIcon />
            New Agent
          </Button>
        </div>
      </div>
    </>
  );
};
