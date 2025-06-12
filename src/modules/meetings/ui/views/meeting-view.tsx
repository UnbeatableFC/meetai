"use client";

import { ErrorStatePage } from "@/components/error-state";
import { LoadingStatePage } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const MeetingsViewPage = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.meetings.getMany.queryOptions({})
  );

  return <div>{JSON.stringify(data)}</div>;
};

export const MeetingsViewLoading = () => {
  return (
    <LoadingStatePage
      title="Loading Meetings"
      description="This may take a few seconds"
    />
  );
};

export const MeetingsViewError = () => {
  return (
    <ErrorStatePage
      title="Error Loading Meetings"
      description="Please try again later"
    />
  );
};
