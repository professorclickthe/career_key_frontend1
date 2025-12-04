import React from "react";

const ResultSection = ({ result }) => (
    <section id="result" className="max-w-4xl mx-auto mb-16 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">Verification Result</h3>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center min-h-[250px]">
            {result ? (
                <>
                    <p className={`text-lg font-semibold mb-2 ${result.status === "success" ? "text-green-600" : "text-red-600"}`}>{result.message}</p>
                    {result.status === "success" && (
                        <div className="text-sm text-green-700 mt-2">
                            Document: example.pdf <br />
                            <span className="text-xs">IPFS Hash: QmHashExample</span>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <p className="text-gray-500 mb-2">Result will appear here...</p>
                    <p className="text-sm text-gray-400">(Success / Error message and document preview)</p>
                </>
            )}
        </div>
    </section>
);

export default ResultSection;
