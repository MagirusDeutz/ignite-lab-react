import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    const [ showClasses, setShowClasses ] = useState(false)
    const { slug } = useParams<{ slug: string }>()

    return (
        <div className="flex flex-col min-h-screen">
            <Header setShowClasses={setShowClasses} />
                <main className="flex flex-1">
                { slug 
                    ? <Video showClasses={showClasses} lessonSlug={slug} /> 
                    : <div className="flex-1" />
                }
                <Sidebar />
                </main>         
        </div>
    )
}