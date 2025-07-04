"use client";

import { DataTable } from "@/components/data-table";
import { ErrorStatePage } from "@/components/error-state";
import { LoadingStatePage } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { columns } from "../components/meetings-columns";
import { EmptyState } from "@/components/empty-state";
import { useRouter } from "next/navigation";
import { useMeetingFilters } from "../../hooks/use-meeting-filters";
import DataPagination from "@/components/data-pagination";

export const MeetingsViewPage = () => {
  const trpc = useTRPC();
  const router = useRouter();
  const [filters, setFilters] = useMeetingFilters();
  const { data } = useSuspenseQuery(
    trpc.meetings.getMany.queryOptions({
      ...filters,
    })
  );

  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
      <DataTable
        data={data.items}
        columns={columns}
        onRowClick={(row) => router.push(`/meetings/${row.id}`)}
      />
      <DataPagination
        page={filters.page}
        totalPages={data.totalPages}
        onPageChange={(page) => setFilters({ page })}
      />
      {data.items.length === 0 && (
        <EmptyState
          title="Create your first meeting"
          description="Schedule a meeting to connect wih others. Each meeting lets you collaborate, share ideas , and interact with participants in real time."
        />
      )}
    </div>
  );
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
