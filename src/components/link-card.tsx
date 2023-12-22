"use client";

import Link from "next/link";
// import type { Link } from "~/server/db/schema";
import { toast } from "sonner";

import { getBaseUrl } from "~/lib/utils";
import { Card, CardContent } from "~/components/ui/card";
import { Icons, iconVariants } from "~/components/ui/icon";

export const LinkCard = ({ slug, url, viewCount }: Link) => {
  const decodedURL = decodeURIComponent(url);
  const shortenedURL = `${getBaseUrl()}/${slug}`;
  const numberFormatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
  });

  const handleOnCopyLink = async () => {
    await navigator.clipboard.writeText(shortenedURL);
    toast("Copied to clipboard");
  };

  const iconProps = iconVariants({ size: "sm" });

  return (
    <Card className="relative font-mono hover:bg-neutral-900 transition-colors">
      <CardContent className="flex flex-col gap-1 p-3">
        <div className="flex items-center gap-2">
          <Link
            href={shortenedURL}
            className="font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            {shortenedURL.split("://")[1]}
          </Link>
          <div className="flex items-center gap-2 text-neutral-500">
            <div className="cursor-pointer transition-colors hover:text-foreground">
              <Icons.Copy className={iconProps} onClick={handleOnCopyLink} />
            </div>
            <div className="flex cursor-pointer items-center gap-1 transition-colors hover:text-foreground">
              <Icons.Eye className={iconProps} />
              <span className="text-xs">
                {numberFormatter.format(viewCount)}
              </span>
            </div>
          </div>
        </div>
        <div className="truncate pr-4 text-xs text-neutral-500">
          <Link href={decodedURL} target="_blank" rel="noopener noreferrer">
            {decodedURL}
          </Link>
        </div>
      </CardContent>
      <Icons.MoreVertical
        className={iconVariants({
          className:
            "absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer text-neutral-500 transition-colors hover:text-foreground",
        })}
      />
    </Card>
  );
};
