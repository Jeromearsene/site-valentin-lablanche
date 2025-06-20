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
      <div className="bg-white border border-gray-200 rounded-full shadow-sm p-2 inline-flex items-center gap-2">
        {Object.values(PORTFOLIO_CATEGORIES).map((category) => (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
              selectedCategories.includes(category)
                ? "bg-primary text-white shadow-sm"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {getCategoryIcon(category)}
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}

        {selectedCategories.length > 0 && (
          <button
            onClick={clearFilters}
            className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Effacer
          </button>
        )}
      </div>

      <div className="mt-4 text-sm text-gray-500">
        {filteredPortfolio.length} expérience
        {filteredPortfolio.length > 1 ? "s" : ""} trouvée
        {filteredPortfolio.length > 1 ? "s" : ""}
      </div>
    </div>
  );
}
