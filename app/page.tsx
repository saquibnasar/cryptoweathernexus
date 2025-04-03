import Sidebar from "@/components/sideNav";

export default function Home() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <Sidebar />
        <div className="px-4 lg:px-6">{/* <ChartAreaInteractive /> */}</div>
      </div>
    </div>
  );
}
