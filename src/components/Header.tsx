import { LogoHeader } from "./LogoHeader";
import { Menu } from "./Menu";

interface HeaderProps {
    //setShowClasses: (showClasses:boolean) => void
    setShowClasses: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

export function Header({ setShowClasses } : HeaderProps) {
    return (
        <header className="w-full py-4 lg:py-5 flex items-center lg:items-center justify-between lg:justify-center bg-gray-700 border-b border-gray-600 px-6 ">
            <LogoHeader />
            <Menu setShowClasses={setShowClasses} />
        </header>
        
    )
}