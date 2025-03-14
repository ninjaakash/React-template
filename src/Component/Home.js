export default function Home() {
    return (
        <div className="max-w-2xl mx-auto p-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to DUH's member(Pranil's) website</h1>
            <p className="text-lg text-gray-700">
                This is Pranil's portfolio. Explore our features and learn more about what we(DUH) offer as team as well as each individual.
            </p>
            <img
                src={`${process.env.PUBLIC_URL}/pranil.jpg`}
                alt="Pranil"
                className="mx-auto rounded-lg shadow-lg img-responsive"
            />


        </div>
    );
}
