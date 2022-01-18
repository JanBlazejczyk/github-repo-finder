import "../styles/Pagination.scss";

export default function Pagination({ reposPerPage, totalRepos, handlePagination }) {
   // create the array with page numbers
   const pageNumbers = [];
   const numberOfPages = Math.ceil(totalRepos / reposPerPage);

   for (let page = 1; page <= numberOfPages; page++) {
      pageNumbers.push(page);
   }

   return (
      <div className="pagination">
         {pageNumbers.map(number => (
            <li
               key={number}
               className="pagination--button"
               onClick={() => handlePagination(number)}
            >
               {number}
            </li>
         ))}
      </div>
   )
}