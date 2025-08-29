import { Button } from "@/components/ui/button";
import { ChevronDown } from "@untitled-ui/icons-react";

export default function SplitButton() {
  return (
    <div className="flex -space-x-px">
      <Button variant="outline" className="rounded-r-none">
        Send Now
      </Button>
      <Button variant="outline" className="rounded-l-none">
        <ChevronDown className="size-4" />
      </Button>
    </div>
  );
}