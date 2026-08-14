import { useState, useMemo } from "preact/hooks";
import { Layout } from "../components/layout";
import { PORTFOLIO, PORTFOLIO_CATEGORIES } from "../data/portfolio";
import { Play, Mic, Volume2, Tv } from "lucide-react";
import { FilterBar } from "../components/portfolio/filter-bar";
import { Card } from "../components/portfolio/card";

const CATEGORY_ICONS = {
  [PORTFOLIO_CATEGORIES.AUDIOBOOK]: Mic,
  [PORTFOLIO_CATEGORIES.COMMERCIAL]: Tv,
};

export function Portfolio() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  // YouTube iframe cache
  const [youtubeCache, setYoutubeCache] = useState(new Map());

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
  };

  const filteredPortfolio =
    selectedCategories.length === 0
      ? PORTFOLIO
      : PORTFOLIO.filter((item) =>
          item.categories.some((cat) => selectedCategories.includes(cat))
        );

  const formatDate = (date) => {
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
    });
  };

  const getCategoryIcon = (category) => {
    const IconComponent = CATEGORY_ICONS[category];
    return IconComponent ? (
      <IconComponent className="w-4 h-4" />
    ) : (
      <Volume2 className="w-4 h-4" />
    );
  };

  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;
    const videoId = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/
    );
    return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : null;
  };

  const isYouTubeUrl = (url) => {
    return url && (url.includes("youtube.com") || url.includes("youtu.be"));
  };

  const isAudioFile = (url) => {
    if (!url) return false;
    const audioExtensions = [".mp3", ".wav", ".ogg", ".m4a", ".aac"];
    return audioExtensions.some((ext) => url.toLowerCase().includes(ext));
  };

  const createCachedYouTubeEmbed = (url) => {
    const embedUrl = getYouTubeEmbedUrl(url);
    if (!embedUrl) return null;

    if (youtubeCache.has(embedUrl)) {
      return youtubeCache.get(embedUrl);
    }

    const iframe = (
      <div className="aspect-video" key={embedUrl}>
        <iframe
          src={embedUrl}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );

    setYoutubeCache((prev) => new Map(prev.set(embedUrl, iframe)));

    return iframe;
  };

  const renderMediaPreview = (media) => {
    if (!media) {
      return (
        <div className="aspect-video bg-gradient-to-br from-custom-white to-gray-100 flex items-center justify-center">
          <div className="text-center">
            <Volume2 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <span className="text-sm text-gray-500">Pas de média</span>
          </div>
        </div>
      );
    }

    if (isYouTubeUrl(media)) {
      const cachedEmbed = createCachedYouTubeEmbed(media);
      return (
        cachedEmbed || (
          <div className="aspect-video bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
            <div className="text-center">
              <Play className="w-12 h-12 text-red-400 mx-auto mb-2" />
              <span className="text-sm text-red-500">Vidéo YouTube</span>
            </div>
          </div>
        )
      );
    }

    if (isAudioFile(media)) {
      return (
        <div className="aspect-video bg-gradient-to-br from-custom-white to-gray-100 flex flex-col items-center justify-center p-4">
          <Volume2 className="w-12 h-12 text-gray-600 mb-4" />
          <audio controls className="w-full max-w-xs">
            <source src={media} type="audio/mpeg" />
            Votre navigateur ne supporte pas l'élément audio.
          </audio>
        </div>
      );
    }

    // Pour les autres types de médias
    return (
      <div className="aspect-video bg-gradient-to-br from-custom-white to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <Play className="w-12 h-12 text-gray-400 mx-auto mb-2" />
          <span className="text-sm text-gray-500">Média disponible</span>
        </div>
      </div>
    );
  };

  // Save portfolio to skip new calcul
  const sortedPortfolio = useMemo(() => {
    return filteredPortfolio.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [filteredPortfolio]);

  return (
    <Layout>
      <div className="min-h-screen bg-custom-white font-articulat">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4 font-louvette">
              Portfolio
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez mes dernières réalisations en doublage et narration
            </p>
          </div>

          {/* Filter Bar */}
          <FilterBar
            selectedCategories={selectedCategories}
            toggleCategory={toggleCategory}
            clearFilters={clearFilters}
            filteredPortfolio={filteredPortfolio}
            getCategoryIcon={getCategoryIcon}
          />

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPortfolio.map((item, index) => (
              <Card
                key={`${item.title}-${index}`} /* Clé plus stable */
                formatDate={formatDate}
                getCategoryIcon={getCategoryIcon}
                renderMediaPreview={renderMediaPreview}
                item={item}
              />
            ))}
          </div>

          {/* Empty state */}
          {filteredPortfolio.length === 0 && (
            <div className="text-center py-12">
              <Mic className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-primary mb-2">
                Aucune expérience trouvée
              </h3>
              <p className="text-gray-500 mb-4">
                Essayez de modifier vos filtres
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-2 bg-primary text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                Voir toutes les expériences
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
