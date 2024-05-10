"use client";
import Image from "next/image";

import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";

const DocumentsPage = () => {
  const { user } = useUser();

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src={"/images/1.Newspaper.png"}
        width={300}
        height={300}
        alt="Newspaper"
        className="dark:hidden"
      />
      <Image
        src={"/images/1.Newspaper.png"}
        width={300}
        height={300}
        alt="Newspaper"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s MarkBlock
      </h2>
      <Button>
        <PlusCircleIcon className="h-4 w-4 mr-2" />
        Create a Note
      </Button>
    </div>
  );
};

export default DocumentsPage;
