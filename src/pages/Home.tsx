import {Services} from "@/sections/Services.tsx";
import {Showcase} from "@/sections/Showcase.tsx";
import {Paragraph} from "@/sections/Paragraph.tsx";
import {Hero} from "@/sections/Hero.tsx";
import {Contact} from "@/sections/Contact.tsx";

export function Home() {

    return (
        <>
            <div className={"text-white"}>
                <Hero/>
                <div className={"my-32 md:my-72"}></div>
                <Paragraph/>
                <div className={"my-32 md:my-72"}></div>
                <Services/>
                <div className={"my-32 md:my-72"}></div>
                <Showcase/>
                <div className={"my-32 md:my-72"}></div>
                <Contact/>
                <div className={"my-32 md:my-72"}></div>
            </div>
        </>
    )
}