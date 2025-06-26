import { Calendar, User, Quote } from "lucide-react";
import { ResponsiveImage } from "../common/responsive-image";
import { getResponsiveImage } from "../../utils/image.utils";

export function Card({
  item,
  renderMediaPreview,
  getCategoryIcon,
  formatDate,
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Media Preview */}
      {renderMediaPreview(item.media)}

      <div className="p-6">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-3">
          {item.categories.map((category, catIndex) => (
            <span
              key={catIndex}
              className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
            >
              {getCategoryIcon(category)}
              {category}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-gray-700 transition-colors">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {item.description}
        </p>

        {/* Date */}
        <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          {formatDate(item.date)}
        </div>

        {/* Customer Info */}
        {item.customer && (
          <div className="border-t border-gray-100 pt-4">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                {item.customer.logo ? (
                  <ResponsiveImage
                    images={getResponsiveImage(item.customer.logo)}
                    alt={`Logo de ${item.customer.name}`}
                  />
                ) : (
                  <User className="w-4 h-4 text-white" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-primary">
                    {item.customer.name}
                  </span>
                </div>
                {item.customer.comment && (
                  <div className="flex items-start gap-2 mt-2">
                    <Quote className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-gray-600 italic leading-relaxed">
                      "{item.customer.comment}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
