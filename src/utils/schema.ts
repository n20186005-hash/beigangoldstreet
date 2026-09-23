// 結構化資料（Schema.org）助手。
// 評分僅標註頁面可見且源自公開商家資料（Google 地圖）的數值，不作為本站評論。

export interface RatingInfo {
  value: number;
  count: number;
}

export interface AttractionSchemaInput {
  name: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  url: string;
  geo?: { lat: number; lng: number };
  mapsUrl?: string;
  rating?: RatingInfo;
}

export function attractionSchema(input: AttractionSchemaInput) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: input.name,
    description: input.description,
    url: input.url,
    isAccessibleForFree: true,
    publicAccess: true,
    address: {
      "@type": "PostalAddress",
      streetAddress: input.address.streetAddress,
      addressLocality: input.address.addressLocality,
      addressRegion: input.address.addressRegion,
      postalCode: input.address.postalCode,
      addressCountry: input.address.addressCountry,
    },
  };

  if (input.geo) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: input.geo.lat,
      longitude: input.geo.lng,
    };
  }
  if (input.mapsUrl) {
    schema.hasMap = input.mapsUrl;
  }
  if (input.rating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: input.rating.value,
      reviewCount: input.rating.count,
      bestRating: 5,
      worstRating: 1,
    };
  }

  return schema;
}

export function faqSchema(questions: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}
