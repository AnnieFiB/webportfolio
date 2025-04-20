import React from "react";
import { getLatestSettings } from "@/lib/getSettings";

export function NavBar() {
  // getLatestSettings(); TODO: We'll need settings that alow for dynamic routing: in this first case it will be something like
  // data-analytics, project-management etc. We will need a slug and a label.

  return (
    <div className="min-w-full max-h-fit flex flex-row items-center justify-start gap-4 p-4">
      <div>
        {/* will be dynamically generated - div = slug, label here */}
        div 1
      </div>
      <div>
        {/* will be dynamically generated - div = slug, label here */}
        div 2
      </div>
      <div>
        {/* will be dynamically generated - div = slug, label here */}
        div 3
      </div>
    </div>
  );
}
