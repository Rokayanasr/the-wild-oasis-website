import { getCabins } from "@/lib/data-service";
import CabinCard from "@/components/CabinCard";
import { unstable_noStore as noStore } from "next/cache";
async function CabinList({ filter }) {
    // revalidation in the component level
    // noStore();

    const cabins = await getCabins();

    let displayedCabins;
    if (filter === "all") {
        displayedCabins = cabins;
    }
    if (filter === "medium") {
        displayedCabins = cabins.filter((cabin) => cabin.maxCapacity === 7);
    }
    if (filter === "small") {
        displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 7);
    }
    if (filter === "large") {
        displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 7);
    }

    console.log(filter, displayedCabins);
    if (!cabins.length) return null;

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
            {displayedCabins.map((cabin) => (
                <CabinCard cabin={cabin} key={cabin.id} />
            ))}
        </div>
    );
}

export default CabinList;
