import { ResponsiveDialog } from "@/components/responsive-dialog";
import { useRouter } from "next/navigation";
import { MeetingForm } from "./meetings-form";

interface NewMeetingDialogueProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NewMeetingDialogue = ({
  open,
  onOpenChange,
}: NewMeetingDialogueProps) => {
  const router = useRouter();

  return (
    <ResponsiveDialog
      title="New Meeting"
      description="Create a new meeting"
      open={open}
      onOpenChange={onOpenChange}
    >
      <MeetingForm
        onSuccess={(id) => {
          onOpenChange(false);
          router.push(`/meetings/${id}`);
        }}
        onCancel={() => onOpenChange}
      />
    </ResponsiveDialog>
  );
};
