export async function getServerSideProps() {
    return {
        props: {
            message: "Rendered on the server side!",
        },
    };
}

export default function SSRPage({ message }) {
    return (
        <div>
            <h1>{message}</h1>
            <p>This page uses Server-Side Rendering (SSR).</p>
        </div>
    );
}