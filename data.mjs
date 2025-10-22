/**
 * Expanded Travel Data for API practice.
 * Use this data to test filters on:
 * - /travel/continent/{name}
 * - /travel/country/{name}
 * - New custom filters like /travel/category/historical or /travel/rating/4.5
 */
export const travelData = [
    // 1. ASIA - Historical
    {
        name: "Great Wall of China",
        location: "Huairou District",
        country: "China",
        continent: "Asia",
        category: "Historical",
        is_open_to_public: true,
        average_rating: 4.8,
        best_time_to_visit: "Spring or Autumn",
        description: "A series of fortifications built across the historical northern borders of ancient Chinese states and Imperial China.",
        uuid: "550e8400-e29b-41d4-a716-446655441001"
    },
    // 2. ASIA - Natural
    {
        name: "Mount Fuji",
        location: "Honshu",
        country: "Japan",
        continent: "Asia",
        category: "Natural",
        is_open_to_public: true,
        average_rating: 4.5,
        best_time_to_visit: "July to September",
        description: "Japan’s tallest mountain and an active stratovolcano, known for its symmetrical cone, often snow-capped.",
        uuid: "550e8400-e29b-41d4-a716-446655441002"
    },
    // 3. EUROPE - Architectural
    {
        name: "Eiffel Tower",
        location: "Paris",
        country: "France",
        continent: "Europe",
        category: "Architectural",
        is_open_to_public: true,
        average_rating: 4.7,
        best_time_to_visit: "Spring or Early Summer",
        description: "A wrought-iron lattice tower on the Champ de Mars, a global cultural icon of France.",
        uuid: "550e8400-e29b-41d4-a716-446655441003"
    },
    // 4. EUROPE - Natural
    {
        name: "Blue Lagoon",
        location: "Grindavík",
        country: "Iceland",
        continent: "Europe",
        category: "Natural",
        is_open_to_public: true,
        average_rating: 4.4,
        best_time_to_visit: "Year-round",
        description: "A geothermal spa famous for its milky-blue waters rich in silica and sulfur.",
        uuid: "550e8400-e29b-41d4-a716-446655441004"
    },
    // 5. NORTH AMERICA - Natural
    {
        name: "Grand Canyon",
        location: "Arizona",
        country: "USA",
        continent: "North America",
        category: "Natural",
        is_open_to_public: true,
        average_rating: 4.9,
        best_time_to_visit: "March to May and September to November",
        description: "A steep-sided canyon carved by the Colorado River in Arizona, famous for its geological significance.",
        uuid: "550e8400-e29b-41d4-a716-446655441005"
    },
    // 6. NORTH AMERICA - Man-made (Special Case: Not Public)
    {
        name: "Area 51",
        location: "Nevada",
        country: "USA",
        continent: "North America",
        category: "Restricted",
        is_open_to_public: false,
        average_rating: 3.5,
        best_time_to_visit: "Never",
        description: "A highly classified remote detachment of Edwards Air Force Base.",
        uuid: "550e8400-e29b-41d4-a716-446655441006"
    },
    // 7. SOUTH AMERICA - Historical
    {
        name: "Machu Picchu",
        location: "Cusco Region",
        country: "Peru",
        continent: "South America",
        category: "Historical",
        is_open_to_public: true,
        average_rating: 4.9,
        best_time_to_visit: "May to October (Dry Season)",
        description: "A 15th-century Inca citadel set high in the Andes Mountains, famous for its sophisticated dry-stone walls.",
        uuid: "550e8400-e29b-41d4-a716-446655441007"
    },
    // 8. SOUTH AMERICA - Natural
    {
        name: "Iguazu Falls",
        location: "Paraná/Misiones",
        country: "Brazil",
        continent: "South America",
        category: "Natural",
        is_open_to_public: true,
        average_rating: 4.8,
        best_time_to_visit: "March to May or September to November",
        description: "A system of 275 waterfalls on the Iguazu River, dividing the river into the upper and lower Iguazu.",
        uuid: "550e8400-e29b-41d4-a716-446655441008"
    },
    // 9. AFRICA - Historical
    {
        name: "Pyramids of Giza",
        location: "Giza Plateau",
        country: "Egypt",
        continent: "Africa",
        category: "Historical",
        is_open_to_public: true,
        average_rating: 4.6,
        best_time_to_visit: "October to April",
        description: "Ancient stone structures built as tombs for pharaohs, among the largest structures ever built.",
        uuid: "550e8400-e29b-41d4-a716-446655441009"
    },
    // 10. AFRICA - Natural
    {
        name: "Serengeti National Park",
        location: "Mara Region",
        country: "Tanzania",
        continent: "Africa",
        category: "Natural",
        is_open_to_public: true,
        average_rating: 4.7,
        best_time_to_visit: "June to October (Dry Season)",
        description: "Vast treeless plains housing millions of animals, known for the annual Great Migration.",
        uuid: "550e8400-e29b-41d4-a716-446655441010"
    },
    // 11. OCEANIA - Architectural
    {
        name: "Sydney Opera House",
        location: "Sydney",
        country: "Australia",
        continent: "Oceania",
        category: "Architectural",
        is_open_to_public: true,
        average_rating: 4.6,
        best_time_to_visit: "September to November or March to May",
        description: "A multi-venue performing arts centre famous for its distinctive shell-like roofs.",
        uuid: "550e8400-e29b-41d4-a716-446655441011"
    },
    // 12. OCEANIA - Natural
    {
        name: "Waitomo Glowworm Caves",
        location: "Waitomo",
        country: "New Zealand",
        continent: "Oceania",
        category: "Natural",
        is_open_to_public: true,
        average_rating: 4.5,
        description: "A subterranean network famous for its boat ride under a ceiling lit by millions of glowworms.",
        best_time_to_visit: "Year-round",
        uuid: "550e8400-e29b-41d4-a716-446655441012"
    }
];
export default travelData;