import Image from "next/image"

const Brand = ({ ...props }) => (
    <Image
        src="/images/logo.png"
        alt="HolyGyaan logo"
        {...props}
        width={110}
        height={50}
        priority
    />
)
export default Brand