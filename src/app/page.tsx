import { mockDataWithDelay } from "./client";
import RevalidateButton from "./revalidateButton";

export default async function Home() {
  const data = await mockDataWithDelay();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data[0].data
      }
      <RevalidateButton />
    </div>
  );
}
