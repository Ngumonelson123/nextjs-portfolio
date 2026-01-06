import Image from "next/image";

export default function Home() {
    return (
        <div>
            <h1>Hi, I'm Nelson</h1>
            <p>DevOps & Cloud Engineer</p>
            <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={200}
            height={200}
            />
        </div>
    );
}