import { revalidateTag } from "next/cache";

export default function RevalidateButton() {
    async function handleRevalidate() {
        "use server";

        revalidateTag("items", "max");
    }

    return (
        <button className="bg-red-500 px-4 py-4 mx-4" onClick={handleRevalidate}>Revalidate Items</button>
    )
}