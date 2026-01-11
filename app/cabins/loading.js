import React from "react";
import Spinner from "@/components/Spinner";

function Loading() {
    return (
        <div className="flex justify-center items-center gap-4">
            <Spinner />
            <p className="text-primary-200 text-lg font-medium">Loading cabins data...</p>
        </div>
    );
}

export default Loading;