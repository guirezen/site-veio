import { ObrasProvider } from "../Context/Obras";

export default function ContextComponent({ children }) {

    return (
        <ObrasProvider>
            {children}
        </ObrasProvider>
    )
}