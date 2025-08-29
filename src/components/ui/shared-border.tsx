import { Button } from "@/components/ui/button";
// Install MynaUI Icons from mynaui.com/icons
import {
  ChevronLeft,
  ChevronRight,
  AlignCenter,
  AlignLeft,
  AlignRight,
} from "@untitled-ui/icons-react";

export default function SharedBorder() {
  return (
    <>
      <div className="inline-flex flex-wrap gap-0.5 rounded border border-border p-1">
        {" "}
        <Button className="bg-sys-secondary text-sys-on-surface">
          <ChevronLeft className="size-5" />
        </Button>
        <Button variant="ghost">
          <ChevronRight className="size-5" />
        </Button>
      </div>
      <div className="inline-flex flex-wrap gap-0.5 rounded border border-border p-1">
        {" "}
        <Button className="bg-sys-secondary text-sys-on-surface">
          <AlignLeft className="size-5" />
        </Button>
        <Button variant="ghost">
          <AlignCenter className="size-5" />
        </Button>
        <Button variant="ghost">
          <AlignRight className="size-5" />
        </Button>
      </div>
    </>
  );
}
