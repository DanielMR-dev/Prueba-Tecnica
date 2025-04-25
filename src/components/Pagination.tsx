interface PaginationProps {
    currentPage: number;
    totalPages: number;
    setPage: (page: number) => void;
};

export default function Pagination({ currentPage, totalPages, setPage }: PaginationProps) {
    if (totalPages <= 1) return null;
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    return (
        <div className="flex justify-center items-center space-x-2 mt-6">
            <button
                onClick={() => setPage(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-full shadow-lg transform transition-all hover:-translate-y-1 active:scale-95 bg-indigo-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >Anterior</button>
            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => setPage(page)}
                    className={`px-4 py-2 rounded-full shadow transition-all ${
                        currentPage === page
                            ? 'bg-indigo-700 text-white'
                            : 'bg-white text-indigo-600 hover:bg-indigo-100'
                    }`}
                >{page}</button>
            ))}
            <button
                onClick={() => setPage(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-full shadow-lg transform transition-all hover:-translate-y-1 active:scale-95 bg-indigo-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >Siguiente</button>
        </div>
    );
};
