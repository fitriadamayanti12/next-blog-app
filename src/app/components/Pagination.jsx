const Pagination = ({
  currentPage,
  totalPages,
  paginate,
  nextPage,
  prevPage,
}) => {
  const handleNextPage = () => {
    // Ensure not to go beyond the total number of pages
    if (currentPage < totalPages) {
      nextPage(currentPage + 1);
    }
  };
  return (
    <div className="mt-4">
      <ul className="flex justify-center items-center">
        <li>
          <button
            onClick={prevPage}
            className="bg-slate-800 text-slate-300 hover:bg-slate-300 hover:text-slate-950 font-semibold px-4 py-2 m-1 rounded-full"
          >
            Prev
          </button>
        </li>
        {Array.from({ length: totalPages }).map((_, index) => (
          <li key={index}>
            <button
              onClick={() => paginate(index + 1)}
              className={`${
                currentPage === index + 1
                  ? "bg-slate-300 text-slate-950"
                  : "bg-slate-800 text-slate-300"
              } hover:bg-slate-300 hover:text-slate-950 font-semibold px-4 py-2 m-1 rounded-full`}
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={handleNextPage}
            className="bg-slate-800 text-slate-300 hover:bg-slate-300 hover:text-slate-950 font-semibold px-4 py-2 m-1 rounded-full"
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
