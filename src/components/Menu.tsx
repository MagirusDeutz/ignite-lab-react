import { Popover, Transition } from "@headlessui/react";
import { List } from "phosphor-react";
import { Classes } from "./Classes";
import { Sidebar } from "./Sidebar";
import { useGetLessonsQuery } from "../graphql/generated"
import { Lesson } from "./Lesson"
import { Video } from "./Video";
import { useEffect, useState } from "react";

interface MenuProps {
    setShowClasses: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

export function Menu( { setShowClasses } : MenuProps) {
    const { data } = useGetLessonsQuery()

    return(            

        <Popover>
            {({ open }) => {
                useEffect(() => {setShowClasses(open)}, [ open ])

                return(
                <div className="lg:hidden">
                    <Popover.Button className= "text-blue-500 flex items-center ">
                    <span className="text-white px-[7px]">Aulas</span>
                        <List size={32}
                        className={`${open ? 'rotate-90 transform' : ''}`}
                        />
                    
                    </Popover.Button>


                    <Popover.Panel className="absolute left-1/2 z-10 mt-4 w-full -translate-x-1/2 transform" >
                        <aside className="bg-gray-700 p-6 border-gray-600 border-t h-screen">
                            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                                Cronograma de aulas
                            </span>

                            <div className="flex flex-col gap-8">
                                {data?.lessons.map((lesson => (
                                    <Lesson
                                        key={lesson.id}
                                        title={lesson.title}
                                        slug={lesson.slug}
                                        availableAt={new Date(lesson.availableAt)}
                                        type={lesson.lessonType}
                                    />
                                )
                            ))}
                    
                            </div>
                        </aside>
                    </Popover.Panel>
                </div>
                
                )}}
        </Popover>
        


        //<div className="lg:hidden">   
            //<button 
                //onClick={() => setShowClasses((v) => !v)}
                //className="text-blue-500 flex items-center" >
                //<span className="text-white px-[7px]">Aulas</span>
                //<List size={32} />
            //</button>
                
           // </div>

        
    )
}