import { useState, useMemo, useEffect, useCallback } from "preact/hooks";
import { Layout } from "../components/layout";
import { PORTFOLIO, PORTFOLIO_CATEGORIES } from "../data/portfolio";
import {
  Play,
  Mic,
  Volume2,
  Tv,
  Building2,
  Radio,
  Theater,
  Volume1,
  Music,
  Headphones,
  User,
} from "lucide-react";
import { FilterBar } from "../components/portfolio/filter-bar";
import { Card } from "../components/portfolio/card";
import { ResponsiveImage } from "../components/common/responsive-image";
import { getResponsiveImage } from "../utils/image.utils";

const CATEGORY_ICONS = {
  [PORTFOLIO_CATEGORIES.PROJECT_TYPES.AUDIOBOOK]: Headphones,
  [PORTFOLIO_CATEGORIES.PROJECT_TYPES.DOUBLAGE]: Theater,
  [PORTFOLIO_CATEGORIES.PROJECT_TYPES.COMMERCIAL]: Tv,
  [PORTFOLIO_CATEGORIES.PROJECT_TYPES.INSTITUTIONNEL]: Building2,
  [PORTFOLIO_CATEGORIES.PROJECT_TYPES.VOIXOFF]: Radio,
  [PORTFOLIO_CATEGORIES.PROJECT_TYPES.PERSO]: User,
  [PORTFOLIO_CATEGORIES.PROJECT_TYPES.DEMO]: Play,
  [PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE]: Theater,
  [PORTFOLIO_CATEGORIES.VOCAL_STYLES.NEUTRE]: Volume1,
  [PORTFOLIO_CATEGORIES.VOCAL_STYLES.CHANTEE]: Music,
};

export function Portfolio() {
  const [selectedProjectTypes, setSelectedProjectTypes] = useState([]);
  const [selectedVocalStyles, setSelectedVocalStyles] = useState([]);

  const toggleProjectType = (category) => {
    setSelectedProjectTypes((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleVocalStyle = (category) => {
    setSelectedVocalStyles((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedProjectTypes([]);
    setSelectedVocalStyles([]);
  };

  const filteredPortfolio = useMemo(() => {
    return PORTFOLIO.filter((item) => {
      // If no filters, display all
      if (
        selectedProjectTypes.length === 0 &&
        selectedVocalStyles.length === 0
      ) {
        return true;
      }

      //  Check project type
      const matchesProjectType =
        selectedProjectTypes.length === 0 ||
        selectedProjectTypes.some((type) => item.categories.includes(type));

      // Check vocal style
      const matchesVocalStyle =
        selectedVocalStyles.length === 0 ||
        selectedVocalStyles.some((style) => item.categories.includes(style));

      // AND between 2 categories
      return matchesProjectType && matchesVocalStyle;
    });
  }, [selectedProjectTypes, selectedVocalStyles]);

  const getCategoryIcon = (category) => {
    const IconComponent = CATEGORY_ICONS[category];
    return IconComponent ? (
      <IconComponent className="w-4 h-4" />
    ) : (
      <Volume2 className="w-4 h-4" />
    );
  };

  const getYouTubeEmbedUrl = useCallback((url) => {
    if (!url) return null;
    const videoId = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([^&\n?#]+)/
    );
    return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : null;
  }, []);

  const getYouTubeThumbnailUrl = useCallback(
    (url) => {
      const embedUrl = getYouTubeEmbedUrl(url);
      const videoId = embedUrl?.split("/embed/")[1];
      return videoId
        ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
        : null;
    },
    [getYouTubeEmbedUrl]
  );

  const isYouTubeUrl = (url) => {
    return url && (url.includes("youtube.com") || url.includes("youtu.be"));
  };

  const isAudioFile = (url) => {
    if (!url) return false;
    const audioExtensions = [".mp3", ".wav", ".ogg", ".m4a", ".aac"];
    return audioExtensions.some((ext) => url.toLowerCase().includes(ext));
  };

  const isImage = (url) => {
    if (!url) return false;
    return url.startsWith("img/");
  };

  // Preload YouTube thumbnails on filter change
  useEffect(() => {
    filteredPortfolio.forEach((item) => {
      const media = item.media;
      if (isYouTubeUrl(media)) {
        const thumb = getYouTubeThumbnailUrl(media);
        if (thumb) {
          const img = new Image();
          img.src = thumb;
        }
      }
    });
  }, [filteredPortfolio, getYouTubeThumbnailUrl]);

  function MediaPreview({ media }) {
    const [showIframe, setShowIframe] = useState(false);

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
      const embedUrl = getYouTubeEmbedUrl(media);
      const thumbnailUrl = getYouTubeThumbnailUrl(media);

      return showIframe ? (
        <div className="aspect-video" key={embedUrl}>
          <iframe
            src={`${embedUrl}?autoplay=1`} // autoplay added here
            title="YouTube video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      ) : (
        <div
          className="aspect-video relative cursor-pointer group"
          onClick={() => setShowIframe(true)}
          key={`thumb-${embedUrl}`}
        >
          <img
            src={thumbnailUrl}
            alt="YouTube thumbnail"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
            <Play className="w-12 h-12 text-white" />
          </div>
        </div>
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

    if (isImage(media)) {
      return (
        <div className="aspect-video bg-gradient-to-br from-custom-white to-gray-100 flex flex-col justify-center">
          <ResponsiveImage
            images={getResponsiveImage(media.replace("img/", ""))}
            alt="Illustration de l'expérience"
          />
        </div>
      );
    }

    return (
      <div className="aspect-video bg-gradient-to-br from-custom-white to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <Play className="w-12 h-12 text-gray-400 mx-auto mb-2" />
          <span className="text-sm text-gray-500">Média disponible</span>
        </div>
      </div>
    );
  }

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
            selectedProjectTypes={selectedProjectTypes}
            selectedVocalStyles={selectedVocalStyles}
            toggleProjectType={toggleProjectType}
            toggleVocalStyle={toggleVocalStyle}
            clearFilters={clearFilters}
            filteredPortfolio={filteredPortfolio}
            getCategoryIcon={getCategoryIcon}
          />

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPortfolio.map((item, index) => (
              <Card
                key={`${item.title}-${index}`}
                getCategoryIcon={getCategoryIcon}
                renderMediaPreview={(media) => <MediaPreview media={media} />}
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
