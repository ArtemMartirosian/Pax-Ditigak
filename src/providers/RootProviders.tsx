import {ReactNode} from "react";
import {Navbar} from "@/features/navbar/components/Navbar";

interface  RootProvidersProps {
    children: ReactNode
}

export const RootProviders = ({children}: RootProvidersProps) => {
    return <>
        <Navbar/>
        {children}
    </>
}