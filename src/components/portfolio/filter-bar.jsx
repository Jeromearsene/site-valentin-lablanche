import { PORTFOLIO_CATEGORIES } from "../../data/portfolio";

export function FilterBar({
  selectedCategories,
  toggleCategory,
  clearFilters,
  filteredPortfolio,
  getCategoryIcon,
}) {
  return (
    <div className="mb-8">
      <div className="overflow-x-auto pb-2">
        <div className="bg-white border border-gray-200 rounded-full shadow-sm p-2 inline-flex items-center gap-2 min-w-max">
          {Object.values(PORTFOLIO_CATEGORIES).map((category) => (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 whitespace-nowrap flex-shrink-0 ${
                selectedCategories.includes(category)
                  ? "bg-primary text-white shadow-sm"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {getCategoryIcon(category)}
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {selectedCategories.length > 0 && (
        <div className="mt-3 flex justify-center">
          <button
            onClick={clearFilters}
            className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Effacer les filtres
          </button>
        </div>
      )}

      <div className="mt-4 text-sm text-gray-500">
        {filteredPortfolio.length} expérience
        {filteredPortfolio.length > 1 ? "s" : ""} trouvée
        {filteredPortfolio.length > 1 ? "s" : ""}
      </div>
    </div>
  );
}
