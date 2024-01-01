export default function Layout (
    { children } : { children: React.ReactNode } // Export a default functions, and the we put the type of the return, because this is typescript
)
{
    return (
        <section>
            Esto es el layout del dashboard:
            {children}
        </section>
    )
}