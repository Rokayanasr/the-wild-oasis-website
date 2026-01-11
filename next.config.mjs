/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    images: {
        qualities: [50, 75, 80, 90, 100],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "jcgdunudbtrtceadjwsc.supabase.co",
                pathname: "/storage/v1/object/public/**",
            },
        ],
    },
    // output: "export"
};

export default nextConfig;
