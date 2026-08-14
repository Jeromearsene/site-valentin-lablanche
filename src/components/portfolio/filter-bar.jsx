import { PORTFOLIO_CATEGORIES } from "../../data/portfolio";

export function FilterBar({
  selectedProjectTypes,
  selectedVocalStyles,
  toggleProjectType,
  toggleVocalStyle,
  clearFilters,
  filteredPortfolio,
  getCategoryIcon,
}) {
  const projectTypes = Object.values(PORTFOLIO_CATEGORIES.PROJECT_TYPES);
  const vocalStyles = Object.values(PORTFOLIO_CATEGORIES.VOCAL_STYLES);

  const renderFilterBar = (
    categories,
    title,
    selectedCategories,
    toggleFunction
  ) => (
    <div className="mb-4">
      <h3 className="text-sm font-medium text-gray-600 mb-2 text-center">
        {title}
      </h3>
      <div className="overflow-x-auto pb-2">
        <div className="bg-white border border-gray-200 rounded-full shadow-sm p-2 inline-flex items-center gap-2 min-w-max">
          {categories.map((category) => (
            <button
              key={category}
              data-rybbit-event="portfolio-filter-click"
              data-rybbit-prop-category={category}
              onClick={() => toggleFunction(category)}
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
    </div>
  );

  return (
    <div className="mb-8">
      {renderFilterBar(
        projectTypes,
        "Types de projets",
        selectedProjectTypes,
        toggleProjectType
      )}
      {renderFilterBar(
        vocalStyles,
        "Styles vocaux",
        selectedVocalStyles,
        toggleVocalStyle
      )}

      {(selectedProjectTypes.length > 0 || selectedVocalStyles.length > 0) && (
        <div className="mt-3 flex justify-center">
          <button
            onClick={clearFilters}
            className="px-4 py-2 text-sm font-medium text-primary border border-primary bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
          >
            Effacer les filtres
          </button>
        </div>
      )}

      <div className="mt-4 text-sm text-gray-500 text-center">
        {filteredPortfolio.length} expérience
        {filteredPortfolio.length > 1 ? "s" : ""} trouvée
        {filteredPortfolio.length > 1 ? "s" : ""}
      </div>
    </div>
  );
}
