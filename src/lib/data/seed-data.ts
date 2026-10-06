import { StateOrUT, CulturalItem, LivingHeritageItem, StoryItem } from "@/types/cultural";

export const STATES_AND_UTS: StateOrUT[] = [
  // Western India
  {
    id: "state-mh",
    name: "Maharashtra",
    slug: "maharashtra",
    code: "MH",
    capital: "Mumbai",
    region: "Western India",
    officialLanguages: ["Marathi"],
    summary: "A cradle of the Maratha Empire, ancient rock-cut cave architecture at Ajanta & Ellora, the egalitarian Warkari Bhakti movement, and legendary Sahyadri hill forts.",
    heroImageUrl: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    isSeedState: true,
    geographicContext: "Sahyadri range (Western Ghats), Deccan plateau, and Konkan Arabian Sea coastline.",
    historicalEpochs: ["Satavahana Empire", "Yadavas of Devagiri", "Chhatrapati Shivaji Maharaj & Maratha Swarajya", "Peshwa Era"],
    livingTraditionCount: 14
  },
  {
    id: "state-rj",
    name: "Rajasthan",
    slug: "rajasthan",
    code: "RJ",
    capital: "Jaipur",
    region: "Western India",
    officialLanguages: ["Hindi", "Rajasthani"],
    summary: "The land of Rajput chivalry, the Thar desert, vibrant folk bards (Manganiyars and Langas), Phad visual epics, and formidable desert fortresses.",
    heroImageUrl: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
    isSeedState: true,
    geographicContext: "Aravalli Range—one of the world's oldest mountain systems—and the Great Indian Thar Desert.",
    historicalEpochs: ["Indus-Sarasvati Civilization (Kalibangan)", "Pratihara Dynasty", "Rajput Clans of Mewar, Marwar, and Dhundhar"],
    livingTraditionCount: 18
  },
  {
    id: "state-gj",
    name: "Gujarat",
    slug: "gujarat",
    code: "GJ",
    capital: "Gandhinagar",
    region: "Western India",
    officialLanguages: ["Gujarati"],
    summary: "Ancient maritime trade hubs like Lothal, intricate stepwell architecture (Rani ki Vav), Kathiawar textile arts, and the Rann of Kutch artisanal communities.",
    heroImageUrl: "https://images.unsplash.com/photo-1596405344148-2dd675d496e5?auto=format&fit=crop&w=1200&q=80",
    isSeedState: false,
    geographicContext: "Longest coastline in peninsular India, Gulf of Khambhat, and salt marshes of Rann of Kutch.",
    historicalEpochs: ["Harappan Maritime Port Lothal", "Solanki Chaulukya Dynasty", "Sultanate of Gujarat"],
    livingTraditionCount: 11
  },
  {
    id: "state-ga",
    name: "Goa",
    slug: "goa",
    code: "GA",
    capital: "Panaji",
    region: "Western India",
    officialLanguages: ["Konkani"],
    summary: "Konkan coastal heritage, sacred Shanta Durga groves, Portuguese baroque monuments alongside ancient Kadamba dynasty temple epigraphy.",
    heroImageUrl: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    isSeedState: false,
    geographicContext: "Konkan coastal belt bounded by the Western Ghats escarpments and Zuari/Mandovi rivers.",
    historicalEpochs: ["Bhojas of Goa", "Kadamba Dynasty", "Vijayanagara Empire", "Portuguese Goa"],
    livingTraditionCount: 8
  },

  // North East India
  {
    id: "state-as",
    name: "Assam",
    slug: "assam",
    code: "AS",
    capital: "Dispur",
    region: "North East India",
    officialLanguages: ["Assamese", "Bodo", "Bengali"],
    summary: "Mighty Brahmaputra riverine civilization, the 600-year unconquered Ahom dynasty, Sattriya neo-Vaishnavite monasteries on Majuli Island, and golden Muga silk.",
    heroImageUrl: "https://images.unsplash.com/photo-1622396636133-ba43f812dd33?auto=format&fit=crop&w=1200&q=80",
    isSeedState: true,
    geographicContext: "Brahmaputra and Barak river valleys flanked by Patkai and Karbi Anglong hill ranges.",
    historicalEpochs: ["Varman Dynasty of Kamarupa", "Ahom Monarchy (1228–1826)", "Koch Kingdom", "Srimanta Sankaradeva Bhakti Reformation"],
    livingTraditionCount: 16
  },
  {
    id: "state-ml",
    name: "Meghalaya",
    slug: "meghalaya",
    code: "ML",
    capital: "Shillong",
    region: "North East India",
    officialLanguages: ["Khasi", "Garo", "English"],
    summary: "Sacred groves, indigenous matrilineal societies, and world-renowned living root bridges (Jingkieng Jri) nurtured across centuries by the Khasi and Jaintia peoples.",
    heroImageUrl: "https://images.unsplash.com/photo-1606820260383-7474b1742055?auto=format&fit=crop&w=1200&q=80",
    isSeedState: false,
    geographicContext: "High cloud-covered Meghalaya plateau with deep limestone gorges and rainforests.",
    historicalEpochs: ["Khasi & Jaintia Indigenous Chiefdoms (Hima)", "Garo Nokma System"],
    livingTraditionCount: 9
  },
  {
    id: "state-mn",
    name: "Manipur",
    slug: "manipur",
    code: "MN",
    capital: "Imphal",
    region: "North East India",
    officialLanguages: ["Meitei (Manipuri)"],
    summary: "Ancient Meitei civilization, classical Manipuri Raas Leela, Thang-Ta martial arts, floating phumdis on Loktak Lake, and Kangla Fort's royal chronicles.",
    heroImageUrl: "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80",
    isSeedState: false,
    geographicContext: "Oval-shaped valley surrounded by nine mountain ranges with Loktak Lake at its heart.",
    historicalEpochs: ["Ningthouja Dynasty", "Kangla Royal Seat", "Meitei Sanamahism and Vaishnavism"],
    livingTraditionCount: 8
  },
  {
    id: "state-nl",
    name: "Nagaland",
    slug: "nagaland",
    code: "NL",
    capital: "Kohima",
    region: "North East India",
    officialLanguages: ["English", "Nagamese"],
    summary: "Sixteen major Naga tribes with elaborate morung institutional oral education, vibrant ceremonial shawls, log-drum communication, and Hornbill cultural gatherings.",
    heroImageUrl: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=80",
    isSeedState: false,
    geographicContext: "Rugged mountainous terrain spanning the Indo-Myanmar border ridge.",
    historicalEpochs: ["Sovereign Naga Village Republics", "Angami, Ao, Sema, Konyak Chiefdoms"],
    livingTraditionCount: 10
  },

  // Southern India
  {
    id: "state-kl",
    name: "Kerala",
    slug: "kerala",
    code: "KL",
    capital: "Thiruvananthapuram",
    region: "Southern India",
    officialLanguages: ["Malayalam"],
    summary: "Ancient Spice Coast of Muziris, sacred Theyyam shamanic ritual trance, Koodiyattam (UNESCO-recognized Sanskrit theatre), Kalaripayattu martial science, and temple murals.",
    heroImageUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    isSeedState: true,
    geographicContext: "Malabar coast between the Arabian Sea and the rainforest-clad Anamudi mountains.",
    historicalEpochs: ["Chera Dynasty", "Zamorins of Calicut", "Kingdom of Travancore", "Muziris Maritime Global Emporium"],
    livingTraditionCount: 15
  },
  {
    id: "state-tn",
    name: "Tamil Nadu",
    slug: "tamil-nadu",
    code: "TN",
    capital: "Chennai",
    region: "Southern India",
    officialLanguages: ["Tamil"],
    summary: "Oldest living classical language (Sangam literature), towering Dravidian granite gopurams of the Cholas, Pandyas, and Pallavas, and the sacred grammar of Bharatanatyam.",
    heroImageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    isSeedState: true,
    geographicContext: "Coromandel Coast, fertile Kaveri delta, and Eastern/Western Ghats convergence.",
    historicalEpochs: ["Sangam Era (3rd BCE–3rd CE)", "Great Living Chola Temples", "Pallavas of Kanchipuram", "Pandya Kingdom"],
    livingTraditionCount: 19
  },
  {
    id: "state-ka",
    name: "Karnataka",
    slug: "karnataka",
    code: "KA",
    capital: "Bengaluru",
    region: "Southern India",
    officialLanguages: ["Kannada"],
    summary: "The majestic granite ruins of Vijayanagara at Hampi, Hoysala star-shaped temple filigree, Yakshagana all-night dance-drama, and the Vachana reform poetry of Basaveshwara.",
    heroImageUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    isSeedState: false,
    geographicContext: "Deccan Plateau, Western Ghats biodiversity hotspot (Malenadu), and Karavali coastline.",
    historicalEpochs: ["Badami Chalukyas", "Rashtrakutas", "Hoysala Empire", "Vijayanagara Empire"],
    livingTraditionCount: 13
  },
  {
    id: "state-ap",
    name: "Andhra Pradesh",
    slug: "andhra-pradesh",
    code: "AP",
    capital: "Amaravati",
    region: "Southern India",
    officialLanguages: ["Telugu"],
    summary: "Amaravati Buddhist stupa art, Kuchipudi classical dance, Kalahasti pen-and-dye Kalamkari, Lepakshi hanging pillars, and Annamacharya’s devotional musical corpus.",
    heroImageUrl: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80",
    isSeedState: false,
    geographicContext: "Krishna and Godavari river deltas, Bay of Bengal coastal plain, and Eastern Ghats.",
    historicalEpochs: ["Satavahanas", "Ikshvakus of Nagarjunakonda", "Eastern Chalukyas", "Kakatiyas"],
    livingTraditionCount: 11
  },
  {
    id: "state-tg",
    name: "Telangana",
    slug: "telangana",
    code: "TG",
    capital: "Hyderabad",
    region: "Southern India",
    officialLanguages: ["Telugu", "Urdu"],
    summary: "The floating-brick wonder of Ramappa Temple (UNESCO), Golconda diamond fortresses, Deccani miniature painting, and the monumental Oggu Katha oral narrative tradition.",
    heroImageUrl: "https://images.unsplash.com/photo-1572435555646-7ad1f19c351c?auto=format&fit=crop&w=1200&q=80",
    isSeedState: false,
    geographicContext: "Semi-arid Deccan plateau drained by the Godavari and Krishna river basins.",
    historicalEpochs: ["Kakatiya Dynasty of Warangal", "Qutb Shahi Dynasty", "Asaf Jahi Nizams"],
    livingTraditionCount: 10
  },

  // Northern India
  {
    id: "state-up",
    name: "Uttar Pradesh",
    slug: "uttar-pradesh",
    code: "UP",
    capital: "Lucknow",
    region: "Northern India",
    officialLanguages: ["Hindi", "Urdu"],
    summary: "Sacred confluence of Ganga and Yamuna at Prayag, eternal antiquity of Kashi (Varanasi), Sarnath where the Buddha first turned the Wheel of Dhamma, and Awadhi refined arts.",
    heroImageUrl: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
    isSeedState: true,
    geographicContext: "Vast alluvial Indo-Gangetic plain, Doab, and Tarai foothills.",
    historicalEpochs: ["Vedic Aryavarta & Epics", "Kashi Mahajanapada", "Mauryan Pillars (Ashoka Lion Capital)", "Gupta Golden Era", "Mughal and Awadh Renaissance"],
    livingTraditionCount: 17
  },
  {
    id: "state-pb",
    name: "Punjab",
    slug: "punjab",
    code: "PB",
    capital: "Chandigarh",
    region: "Northern India",
    officialLanguages: ["Punjabi"],
    summary: "Land of the Five Rivers, the spiritual sanctuary of Sri Harmandir Sahib, Guru Granth Sahib's syncretic poetic ragas, Heer-Ranjha qissas, and Bhangra agrarian vitality.",
    heroImageUrl: "https://images.unsplash.com/photo-1588096344356-9a4f4e7d4d8a?auto=format&fit=crop&w=1200&q=80",
    isSeedState: false,
    geographicContext: "Fertile alluvial plains fed by the Sutlej, Beas, and Ravi river systems.",
    historicalEpochs: ["Indus Valley (Ropar)", "Ten Sikh Gurus Era", "Sikh Confederacy (Misls)", "Maharaja Ranjit Singh’s Empire"],
    livingTraditionCount: 12
  },
  {
    id: "state-ut",
    name: "Uttarakhand",
    slug: "uttarakhand",
    code: "UT",
    capital: "Dehradun",
    region: "Northern India",
    officialLanguages: ["Hindi", "Sanskrit", "Garhwali", "Kumaoni"],
    summary: "Devbhoomi (Land of the Gods), Char Dham Himalayan pilgrimage, ancient stone temples of Jageshwar and Kedarnath, Chipko community environmental conservation, and Pandav Leela dances.",
    heroImageUrl: "https://images.unsplash.com/photo-1592659762303-90081d14b077?auto=format&fit=crop&w=1200&q=80",
    isSeedState: false,
    geographicContext: "Greater, Middle, and Sub-Himalayan (Shivalik) mountain ranges, glacial origins of Ganga and Yamuna.",
    historicalEpochs: ["Katyuri Dynasty", "Chand Kings of Kumaon", "Garhwal Parmar Kingdom"],
    livingTraditionCount: 9
  },
  {
    id: "state-hp",
    name: "Himachal Pradesh",
    slug: "himachal-pradesh",
    code: "HP",
    capital: "Shimla",
    region: "Northern India",
    officialLanguages: ["Hindi"],
    summary: "Wood-and-stone Kathkuni earthquake-resilient architecture, Tabo monastery (1,000+ years old), Kangra miniature paintings, and vibrant community Devta village parliaments.",
    heroImageUrl: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1200&q=80",
    isSeedState: false,
    geographicContext: "Trans-Himalayan Spiti valley to the pine-clad Dhauladhar and Pir Panjal ranges.",
    historicalEpochs: ["Kullu & Trigarta Kingdoms", "Western Tibetan Monastic Foundations", "Chamba Royal Dynasty"],
    livingTraditionCount: 10
  },
  {
    id: "state-hr",
    name: "Haryana",
    slug: "haryana",
    code: "HR",
    capital: "Chandigarh",
    region: "Northern India",
    officialLanguages: ["Hindi", "Haryanvi"],
    summary: "Rakhigarhi (largest known Indus-Sarasvati metropolis), Kurukshetra battlefield where the Bhagavad Gita was expounded, and vibrant Saang folk theater.",
    heroImageUrl: "https://images.unsplash.com/photo-1609137144822-441695420138?auto=format&fit=crop&w=1200&q=80",
    isSeedState: false,
    geographicContext: "Ghaggar-Hakra river basin and north-western edge of the Indo-Gangetic plains.",
    historicalEpochs: ["Harappan Rakhigarhi Era", "Kuru Kingdom", "Harsha of Kannauj (Thanesar)", "Battles of Panipat"],
    livingTraditionCount: 7
  },

  // Eastern India
  {
    id: "state-od",
    name: "Odisha",
    slug: "odisha",
    code: "OD",
    capital: "Bhubaneswar",
    region: "Eastern India",
    officialLanguages: ["Odia"],
    summary: "Kalinga naval trade with Southeast Asia (Bali Yatra), sun-monument Konark, Jagannatha Mahaprasada rituals, Pattachitra palm-leaf paintings, and Gotipua/Odissi dance.",
    heroImageUrl: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80",
    isSeedState: true,
    geographicContext: "Eastern Ghats, Mahanadi delta, Chilika brackish water lagoon, and Bay of Bengal coast.",
    historicalEpochs: ["Kalinga War & Ashoka Edicts at Dhauli", "Somavamshi & Eastern Ganga Dynasties", "Gajapati Empire"],
    livingTraditionCount: 14
  },
  {
    id: "state-wb",
    name: "West Bengal",
    slug: "west-bengal",
    code: "WB",
    capital: "Kolkata",
    region: "Eastern India",
    officialLanguages: ["Bengali"],
    summary: "Terracotta temples of Bishnupur, the mystical Baul wandering minstrels, Durga Puja community craftsmanship (UNESCO Intangible), and the intellectual Bengal Renaissance.",
    heroImageUrl: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80",
    isSeedState: false,
    geographicContext: "Himalayan Darjeeling hills down through the Ganges-Brahmaputra delta to the Sundarbans mangrove forest.",
    historicalEpochs: ["Pala Dynasty (Buddhist Monastic Universities)", "Sena Dynasty", "Gauda Kingdom", "Bengal Renaissance"],
    livingTraditionCount: 15
  },
  {
    id: "state-br",
    name: "Bihar",
    slug: "bihar",
    code: "BR",
    capital: "Patna",
    region: "Eastern India",
    officialLanguages: ["Hindi", "Bhojpuri", "Maithili", "Magahi"],
    summary: "Birthplace of Buddhism and Jainism, Nalanda and Vikramashila ancient world universities, Ashokan pillars at Vaishali, and vibrant Maithili Madhubani wall paintings.",
    heroImageUrl: "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80",
    isSeedState: false,
    geographicContext: "Fertile Gangetic plains bisected by the Ganga river.",
    historicalEpochs: ["Magadha Empire", "Maurya and Gupta Dynasties", "Nalanda Mahavihara Era"],
    livingTraditionCount: 12
  },
  {
    id: "state-jh",
    name: "Jharkhand",
    slug: "jharkhand",
    code: "JH",
    capital: "Ranchi",
    region: "Eastern India",
    officialLanguages: ["Hindi", "Santhali", "Mundari", "Ho"],
    summary: "Ancient tribal forest sanctuaries, megalithic astronomy sites at Pankri Barwadih, Sohrai and Khovar ritual wall art, and the legendary Birsa Munda Ulgulan movement.",
    heroImageUrl: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=80",
    isSeedState: false,
    geographicContext: "Chota Nagpur Plateau, mineral-rich hills, and sal forests.",
    historicalEpochs: ["Nagvanshi Dynasty", "Santhal and Munda Forest Confederacies", "Birsa Munda Ulgulan"],
    livingTraditionCount: 9
  },

  // Central India
  {
    id: "state-mp",
    name: "Madhya Pradesh",
    slug: "madhya-pradesh",
    code: "MP",
    capital: "Bhopal",
    region: "Central India",
    officialLanguages: ["Hindi"],
    summary: "Heart of India: Bhimbetka Paleolithic rock shelters (100,000 years of human art), Great Stupa at Sanchi, Khajuraho temple sculptures, and Gond tribal paintings.",
    heroImageUrl: "https://images.unsplash.com/photo-1600100397608-f010f44390be?auto=format&fit=crop&w=1200&q=80",
    isSeedState: false,
    geographicContext: "Vindhya and Satpura ranges, Narmada river valley, and Malwa plateau.",
    historicalEpochs: ["Avanti Mahajanapada (Ujjain)", "Paramara Dynasty (Raja Bhoj)", "Chandela Dynasty of Jejakabhukti", "Bundelkhand Kingdoms"],
    livingTraditionCount: 13
  },
  {
    id: "state-cg",
    name: "Chhattisgarh",
    slug: "chhattisgarh",
    code: "CG",
    capital: "Raipur",
    region: "Central India",
    officialLanguages: ["Chhattisgarhi", "Hindi"],
    summary: "Bastar lost-wax Dhokra bronze casting, ancient brick temples of Sirpur, tribal bell-metal craft, Raut Nacha folk dances, and dense Dandakaranya forest heritage.",
    heroImageUrl: "https://images.unsplash.com/photo-1600100397608-f010f44390be?auto=format&fit=crop&w=1200&q=80",
    isSeedState: false,
    geographicContext: "Mahanadi basin bounded by the Maikal Hills and Bastar plateau.",
    historicalEpochs: ["Dakshina Kosala", "Sharabhapuriya and Panduvamshi Dynasties", "Nagavanshi Kings of Bastar"],
    livingTraditionCount: 10
  },

  // Union Territories
  {
    id: "ut-la",
    name: "Ladakh",
    slug: "ladakh",
    code: "LA",
    capital: "Leh",
    region: "Northern India",
    officialLanguages: ["Ladakhi", "Tibetan", "Urdu"],
    summary: "The Roof of the World: ancient Silk Road high-altitude monasteries (Hemis, Thiksey, Alchi), living Buddhist oral chanting (UNESCO), and Changpa nomadic pashmina herders.",
    heroImageUrl: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1200&q=80",
    isSeedState: true,
    geographicContext: "Trans-Himalayan high-altitude cold desert plateau between Karakoram and Zanskar ranges.",
    historicalEpochs: ["Namgyal Dynasty of Ladakh", "Great Western Tibetan Buddhist Renaissance (Lotsawa Rinchen Zangpo)", "Silk Route Caravans"],
    livingTraditionCount: 11
  },
  {
    id: "ut-jk",
    name: "Jammu & Kashmir",
    slug: "jammu-and-kashmir",
    code: "JK",
    capital: "Srinagar (Summer) / Jammu (Winter)",
    region: "Northern India",
    officialLanguages: ["Kashmiri", "Dogri", "Urdu", "Hindi"],
    summary: "Sufi Rishi syncretic tradition of Lal Ded and Nund Rishi, Pashmina and Kani shawl craftsmanship, papier-mâché, and Martand Sun Temple epigraphy.",
    heroImageUrl: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    isSeedState: false,
    geographicContext: "Vale of Kashmir surrounded by Pir Panjal and Great Himalayas, Chenab and Jhelum basins.",
    historicalEpochs: ["Karkota Dynasty (Lalitaditya Muktapida)", "Utpala Dynasty (Kalhana’s Rajatarangini)", "Sufi Rishi Order"],
    livingTraditionCount: 11
  },
  {
    id: "ut-dl",
    name: "Delhi (NCT)",
    slug: "delhi",
    code: "DL",
    capital: "New Delhi",
    region: "Northern India",
    officialLanguages: ["Hindi", "English", "Punjabi", "Urdu"],
    summary: "Seven historical cities across millennia: Iron Pillar of Mehrauli with rustless metallurgy, Red Fort, Humayun’s Tomb, Amir Khusrau’s Qawwali origin, and Purana Qila.",
    heroImageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
    isSeedState: false,
    geographicContext: "Yamuna floodplains and the terminal northern ridge of the ancient Aravalli mountains.",
    historicalEpochs: ["Tomara Rajputs (Anangpal)", "Delhi Sultanate", "Mughal Shahjahanabad", "Modern Capital"],
    livingTraditionCount: 12
  }
];

export const CULTURAL_ITEMS: CulturalItem[] = [
  // 1. MAHARASHTRA - HISTORICAL
  {
    id: "item-mh-01",
    stateId: "state-mh",
    stateSlug: "maharashtra",
    stateName: "Maharashtra",
    title: "Sindhudurg Fort & Maratha Marine Epigraphy",
    slug: "sindhudurg-fort-maratha-marine-epigraphy",
    nativeTitle: "सिंधुदुर्ग किल्ला व मराठा आरमार शिलालेख",
    nativeScript: "Devanagari",
    category: "HISTORICAL",
    verificationStatus: "ARCHIVAL_SOURCE",
    summary: "A 17th-century island sea fortress commissioned by Chhatrapati Shivaji Maharaj in 1664 CE, featuring foundation stones mixed with over 73,000 kg of lead, defensive curved bastions, and documented Maratha naval battle manuals.",
    body: "Constructed on the Kurte Island rock reef off Malvan, Sindhudurg Fort represents a masterwork of pre-modern maritime defense architecture. Chhatrapati Shivaji Maharaj recognized the sea as a sovereign frontier against Portuguese, British, and Siddis of Janjira. The fort stretches across 48 acres with a fortified perimeter wall of over 3 kilometers, engineered with undulating zigzag bastions to deflect cannon shot and incoming ocean currents.\n\nHistorical records, notably the Sabhasad Bakhar (1697) and Portuguese Goa archival correspondences, confirm that Shivaji personally supervised the foundation laying in November 1664. Unlike contemporary coastal garrisons, Sindhudurg contains subterranean freshwater wells (known as Dudh Baori, Sakhar Baori, and Dahi Baori) that remain sweet despite surrounding open ocean surf.\n\nThe fort preserves the only surviving temple built during the lifetime of Chhatrapati Shivaji Maharaj by his son Chhatrapati Rajaram (1695 CE), featuring an epigraphic panel and foot-and-hand lime impressions of the founder embedded in masonry towers.",
    periodOrOrigin: "1664–1667 CE (Maratha Empire)",
    communitiesInvolved: ["Bhandari mariners", "Maratha naval architects (Hiroji Indulkar)", "Konkani stonemasons"],
    primaryLanguageCode: "mr",
    tags: ["Marine Forts", "Naval History", "Shivaji Maharaj", "Epigraphy", "Architecture", "Konkan"],
    heroImageUrl: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    sources: [
      {
        id: "src-mh-01a",
        culturalItemId: "item-mh-01",
        title: "Life of Siva Chhatrapati (Sabhasad Bakhar)",
        citationType: "ARCHIVAL_DOCUMENT",
        authorOrInstitution: "Krishnaji Anant Sabhasad; Translated by Surendra Nath Sen, University of Calcutta",
        publicationYear: 1920,
        urlOrArchiveRef: "Calcutta Univ. Press, Section: Foundation of Sindhudurg (1664)",
        excerpt: "The Raja then resolved that the sea was an empire in itself... selecting the rocky island of Kurte, 4000 maunds of molten lead were poured into the foundation stones.",
        verifiedBy: "State Archives of Maharashtra, Elphinstone College Record Room"
      },
      {
        id: "src-mh-01b",
        culturalItemId: "item-mh-01",
        title: "Archaeological Survey of India: List of Monuments of National Importance - Maharashtra",
        citationType: "ASI_RECORD",
        authorOrInstitution: "Archaeological Survey of India (ASI)",
        publicationYear: 2018,
        urlOrArchiveRef: "ASI Monument ID: N-MH-M35",
        excerpt: "Fortification walls comprising 42 bastions, built using laterite and crystalline rock blocks anchored with lead joints.",
        verifiedBy: "Superintending Archaeologist, Mumbai Circle"
      }
    ],
    createdAt: "2026-01-10T08:00:00Z",
    updatedAt: "2026-03-01T12:00:00Z"
  },

  // 2. MAHARASHTRA - BELIEF
  {
    id: "item-mh-02",
    stateId: "state-mh",
    stateSlug: "maharashtra",
    stateName: "Maharashtra",
    title: "Warkari Pandharpur Wari & The Sacred Abhang Tradition",
    slug: "warkari-pandharpur-wari-sacred-abhang-tradition",
    nativeTitle: "वारकरी पंढरपूर वारी व अभंग परंपरा",
    nativeScript: "Devanagari",
    category: "BELIEF",
    verificationStatus: "VERIFIED",
    summary: "An 800-year-old unbroken egalitarian pilgrimage where over a million devotees walk 250 kilometers on foot to the Vitthala shrine at Pandharpur, singing the sacred poetry (abhangs) of Sant Dnyaneshwar, Tukaram, and Janabai.",
    body: "The Pandharpur Wari is one of the world's most enduring and socially radical spiritual traditions. Arising from the 13th-century Bhakti awakening in the Deccan, the Warkari tradition fundamentally rejected ritual caste hierarchies, untouchability, and clerical intermediaries in favor of direct, loving devotion (Bhakti) to Lord Vitthala (Vithoba).\n\nDevotees form 'dindis' (organized pilgrim collectives), traveling on foot for 21 days from the samadhi shrines of Sant Dnyaneshwar in Alandi and Sant Tukaram in Dehu to Pandharpur on Ashadhi Ekadashi. Every pilgrim carries only a Chipli and Taal (cymbals), wearing tulsi beads and greeting all humans as divine sparks regardless of caste, gender, or wealth.\n\nThe philosophy is codified in thousands of meter-precise 'abhangs' (unbreakable hymns) written in vernacular Marathi, which established vernacular literature and common humanity as the supreme sanctum.",
    periodOrOrigin: "13th Century CE to Present (Continuous)",
    communitiesInvolved: ["Warkari Panth", "All Maharashtrian castes", "Peasants and artisans across Deccan"],
    primaryLanguageCode: "mr",
    tags: ["Bhakti Movement", "Pilgrimage", "Abhang", "Egalitarianism", "Dnyaneshwar", "Tukaram"],
    heroImageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    sources: [
      {
        id: "src-mh-02a",
        culturalItemId: "item-mh-02",
        title: "Tukaram: The Poet for a Barbarian Age",
        citationType: "ACADEMIC_PAPER",
        authorOrInstitution: "Richard M. Eaton, Oxford University Press",
        publicationYear: 2005,
        urlOrArchiveRef: "A Social History of the Deccan, 1300-1761, pp. 129-155",
        excerpt: "The Warkari movement democratized spiritual expression in Western India, creating an egalitarian public sphere centuries before European enlightenment.",
        verifiedBy: "Prof. R. M. Eaton / Sahitya Akademi Studies"
      }
    ],
    createdAt: "2026-01-12T09:00:00Z",
    updatedAt: "2026-03-02T10:00:00Z"
  },

  // 3. MAHARASHTRA - ORAL TRADITION
  {
    id: "item-mh-03",
    stateId: "state-mh",
    stateSlug: "maharashtra",
    stateName: "Maharashtra",
    title: "The Shahiri Powada: Heroic Bardic Ballads of the Deccan",
    slug: "shahiri-powada-heroic-bardic-ballads-deccan",
    nativeTitle: "शाहिरी पोवाडा: दख्खनची वीररस गाथा",
    nativeScript: "Devanagari",
    category: "ORAL_TRADITION",
    verificationStatus: "DOCUMENTED_ORAL",
    summary: "Rhythmic oral epic narratives composed by traditional bards (Shahirs), performed using the daf (tambourine) and tuntune (one-string lute) to chronicle battles, moral governance, and peasant struggle across 350 years.",
    body: "The Powada is an indigenous dramatic oral ballad unique to Maharashtra. Originating in the mid-17th century, the earliest recorded Powada was composed in 1659 by Shahir Agnidas to memorialize the historic encounter between Shivaji Maharaj and Afzal Khan at Pratapgad.\n\nShahirs (bardic troubadours) perform standing with vibrant physical gesticulations, a high-pitch vocal register, and syncopated drumming on the handheld daf. The structure comprises the 'Naman' (invocation), followed by the fast-tempo narrative stanzas ('Chowk'), interspersed with spoken commentary and crowd participation.\n\nDuring the anti-colonial freedom movement and the Samyukta Maharashtra Movement (1950s), legendary Shahirs such as Annabhau Sathe and Amar Sheikh transformed the Powada from medieval chivalric ballads into revolutionary anthems for workers, farmers, and social justice.",
    periodOrOrigin: "1659 CE to Present",
    communitiesInvolved: ["Gondhali bards", "Matang community bardic lineages", "Shahir singer-poets"],
    primaryLanguageCode: "mr",
    tags: ["Powada", "Oral History", "Shahiri", "Folk Music", "Annabhau Sathe", "Resistance"],
    heroImageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
    sources: [
      {
        id: "src-mh-03a",
        culturalItemId: "item-mh-03",
        title: "Historical Ballads of Maharashtra",
        citationType: "ACADEMIC_PAPER",
        authorOrInstitution: "H. A. Acworth & S. T. Shaligram; Longmans Green & Co.",
        publicationYear: 1894,
        urlOrArchiveRef: "British Library India Office Records MSS Eur D.398",
        excerpt: "The Powada is the living memory of the common Marathi peasantry, preserving details of tactics and dialogue unrecorded in state charters.",
        verifiedBy: "Maharastra Rajya Sahitya Ani Sanskriti Mandal"
      }
    ],
    createdAt: "2026-01-15T11:00:00Z",
    updatedAt: "2026-02-28T16:00:00Z"
  },

  // 4. RAJASTHAN - FOLKLORE
  {
    id: "item-rj-01",
    stateId: "state-rj",
    stateSlug: "rajasthan",
    stateName: "Rajasthan",
    title: "Phad Visual Scroll Painting & The Epics of Pabuji and Devnarayan",
    slug: "phad-visual-scroll-painting-epics-pabuji-devnarayan",
    nativeTitle: "पड़ चित्रकला व पाबूजी-देवनारायण लोकगाथा",
    nativeScript: "Devanagari",
    category: "FOLKLORE",
    verificationStatus: "VERIFIED",
    summary: "A 700-year-old scroll painting and musical storytelling tradition where Bhopa-Bhopi priest-singers travel between desert villages, unrolling a 30-foot painted canvas at night and singing the epic with the Ravanahatha violin.",
    body: "Phad is an extraordinary synthesis of folk painting, performance art, and sacred myth found in the Bhilwara and Shahpura regions of Rajasthan. Painted entirely by hereditary Joshi master artisans using natural vegetable and mineral pigments on handwoven khadi cloth, a single Phad scroll measures up to 30 feet in length and contains hundreds of densely interwoven figures.\n\nThe scroll acts as a mobile temple. At sundown, the Bhopa (priest-performer of the Rabari or Nayak community) and his wife the Bhopi erect the scroll beneath the stars. While the Bhopi holds an oil lamp to illuminate the specific painted section, the Bhopa plays the bowed Ravanahatha, singing the heroic deeds, cattle-protecting sacrifices, and magical deeds of folk deities Pabuji and Devnarayan.\n\nNo character in a Phad scroll faces the viewer directly; all figures gaze at one another, creating an endless internal web of dramatic action that guides the village audience through nightlong vigils.",
    periodOrOrigin: "14th Century CE to Present",
    communitiesInvolved: ["Joshi artisan lineage of Shahpura", "Bhopa and Bhopi singer-priests", "Rabari pastoralists"],
    primaryLanguageCode: "raj",
    tags: ["Phad Painting", "Visual Storytelling", "Ravanahatha", "Bhopa", "Desert Lore", "Pabuji"],
    heroImageUrl: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
    sources: [
      {
        id: "src-rj-01a",
        culturalItemId: "item-rj-01",
        title: "The Epic of Pabuji: A Study, Transcription and Translation",
        citationType: "ACADEMIC_PAPER",
        authorOrInstitution: "John D. Smith, Cambridge University Press",
        publicationYear: 1991,
        urlOrArchiveRef: "Cambridge Oriental Publications, ISBN 978-0521395366",
        excerpt: "The performance is a total community ritual, preserving archaic Rajasthani dialects and heroic chivalric ethics that predate written court historiography.",
        verifiedBy: "Indira Gandhi National Centre for the Arts (IGNCA)"
      }
    ],
    createdAt: "2026-01-16T14:00:00Z",
    updatedAt: "2026-03-05T09:00:00Z"
  },

  // 5. RAJASTHAN - ORAL TRADITION
  {
    id: "item-rj-02",
    stateId: "state-rj",
    stateSlug: "rajasthan",
    stateName: "Rajasthan",
    title: "Langa and Manganiyar Hereditary Desert Oral Genealogies",
    slug: "langa-manganiyar-hereditary-desert-oral-genealogies",
    nativeTitle: "लांगा व मांगणियार मौखिक वंशावली परंपरा",
    nativeScript: "Devanagari",
    category: "ORAL_TRADITION",
    verificationStatus: "DOCUMENTED_ORAL",
    summary: "Generational Muslim musician communities of the Thar Desert who serve as the oral living archives and geneologists (Jajmani system) for Hindu patrons, playing the Kamaicha and Sindhi Sarangi.",
    body: "In the hyper-arid expanse of Barmer, Jaisalmer, and Jodhpur, the Manganiyar and Langa communities have served for centuries as oral librarians, astronomers, and chroniclers. Belonging to Muslim lineages while serving predominantly Hindu Rajput and Charan patrons, they maintain complex hereditary genealogies spanning up to twenty generations completely from memory.\n\nTheir instruments are wonders of sonic design: the Kamaicha, carved from a single piece of mango wood with a goat-skin belly and seventeen strings (including three gut strings from sheep intestine), and the Khartal, rhythm castanets played with astonishing micro-second speed.\n\nTheir oral repertoire includes songs for every passage of human life: 'Badila' for rain invocation, 'Jangra' for desert survival, and 'Gorbandh' celebrating camel adornment. Because they never committed their music to paper, their vast melodic ragas ('Sorath', 'Maand', 'Khamaich') are transmitted mouth-to-ear from father to son across dynasties.",
    periodOrOrigin: "12th Century CE to Present",
    communitiesInvolved: ["Manganiyar community", "Langa community", "Thar Desert pastoralists"],
    primaryLanguageCode: "raj",
    tags: ["Oral Genealogies", "Kamaicha", "Folk Music", "Syncretism", "Thar Desert", "UNESCO Heritage"],
    heroImageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    sources: [
      {
        id: "src-rj-02a",
        culturalItemId: "item-rj-02",
        title: "Rupayan Sansthan Oral Archives of Borunda",
        citationType: "ORAL_TESTIMONY",
        authorOrInstitution: "Komal Kothari & Vijaydan Detha, Rupayan Sansthan",
        publicationYear: 1978,
        urlOrArchiveRef: "Borunda Folk Archives Catalogue No. RS-RAJ-AUDIO-441",
        excerpt: "The Manganiyars preserve an oral encyclopaedia of botany, hydrology, and clan lineages disguised within melodic ragas.",
        verifiedBy: "Sangeet Natak Akademi & Rupayan Sansthan"
      }
    ],
    createdAt: "2026-01-18T10:00:00Z",
    updatedAt: "2026-03-03T11:00:00Z"
  },

  // 6. ASSAM - HISTORICAL
  {
    id: "item-as-01",
    stateId: "state-as",
    stateSlug: "assam",
    stateName: "Assam",
    title: "Rang Ghar & The Amphitheater Architecture of the Ahom Dynasty",
    slug: "rang-ghar-amphitheater-architecture-ahom-dynasty",
    nativeTitle: "ৰংঘৰ আৰু আহোম ৰাজবংশৰ স্থাপত্য",
    nativeScript: "Bengali-Assamese",
    category: "HISTORICAL",
    verificationStatus: "ARCHIVAL_SOURCE",
    summary: "Built by Swargadeo Pramatta Singha in 1744 CE at Rongpur, this two-storied oval royal amphitheater is one of Asia's earliest sports and cultural pavilions, constructed using indigenous mortar made of sticky rice and duck eggs.",
    body: "The Rang Ghar (literally 'House of Entertainment') stands as a testament to the sophisticated civic architecture and statecraft of the Ahom Dynasty, which ruled the Brahmaputra Valley for 598 years (1228–1826 CE) and famously repelled seventeen Mughal invasions.\n\nCommissioned by Ahom monarch Swargadeo Pramatta Singha in 1744 CE, the two-storied structure has an inverted boat-shaped roof crowned with a royal crocodile-motif stucco finial. Royal dignitaries sat on the upper gallery to witness indigenous sports below: elephant fights, bull wrestling, and community Rongali Bihu performances.\n\nThe engineering brilliance of Rang Ghar lies in its organic binder mortar—'Karhal'—a proprietary blend of Bora rice (glutinous sticky rice), duck eggs, pulses (mati-mah), and fish bones mixed with slaked lime. This mortar formulation has withstood catastrophic tectonic earthquakes across the Assam seismic zone for nearly three centuries without structural collapse.",
    periodOrOrigin: "1744–1751 CE (Ahom Kingdom)",
    communitiesInvolved: ["Ahom royalty (Tai-Ahom)", "Assamese guild artisans (Khanikar)", "Indigenous builders"],
    primaryLanguageCode: "as",
    tags: ["Ahom Dynasty", "Rongpur", "Ancient Architecture", "Brahmaputra", "Sports Pavilion", "ASI Monument"],
    heroImageUrl: "https://images.unsplash.com/photo-1622396636133-ba43f812dd33?auto=format&fit=crop&w=1200&q=80",
    sources: [
      {
        id: "src-as-01a",
        culturalItemId: "item-as-01",
        title: "Tungkhungia Buranji: Or A History of Assam, 1681-1826 A.D.",
        citationType: "ARCHIVAL_DOCUMENT",
        authorOrInstitution: "Srinath Duara Barbarua; Edited by S. K. Bhuyan, Oxford University Press",
        publicationYear: 1933,
        urlOrArchiveRef: "Department of Historical and Antiquarian Studies, Guwahati",
        excerpt: "Swargadeo Pramatta Singha caused the Rang Ghar to be constructed with burnt brick and mortar in the capital Rongpur for viewing wrestling matches and Bihu dances.",
        verifiedBy: "Archaeological Survey of India, Guwahati Circle (Mon. ID: N-AS-24)"
      }
    ],
    createdAt: "2026-01-20T12:00:00Z",
    updatedAt: "2026-03-04T15:00:00Z"
  },

  // 7. ASSAM - BELIEF
  {
    id: "item-as-02",
    stateId: "state-as",
    stateSlug: "assam",
    stateName: "Assam",
    title: "Majuli Island Sattriya Monastic Heritage & Ekasarana Dharma",
    slug: "majuli-island-sattriya-monastic-heritage",
    nativeTitle: "মাজুলীৰ সত্ৰীয়া সংস্কৃতি আৰু একশৰণ ধৰ্ম",
    nativeScript: "Bengali-Assamese",
    category: "BELIEF",
    verificationStatus: "VERIFIED",
    summary: "The sacred island ecosystem of Majuli on the Brahmaputra, housing 15th-century monastic communes (Satras) initiated by polymath Saint Srimanta Sankaradeva, preserving mask-making, Borgeet hymns, and classical Sattriya dance.",
    body: "Majuli is the cultural heartland of Assamese spiritual identity. Founded in the late 15th century by Srimanta Sankaradeva and his foremost disciple Madhavadeva, the Satras are self-governing monastic communes centered around 'Namghars' (prayer halls with an open sacred altar, without anthropomorphic idols).\n\nIn Sankaradeva’s Ekasarana Dharma, caste barriers were dismantled; Brahmins, tribal Misings, and artisans sat side by side on handwoven mats chanting the name of the Supreme. Each Satra specializes in specific cultural disciplines: Samaguri Satra preserves the 500-year-old art of crafting dynamic bamboo-and-clay theatrical masks (Mukha) representing deities and demons from the Bhagavata Purana.\n\nSattriya, recognized as one of India's eight classical dance forms, was nurtured for 500 years exclusively inside these prayer halls before being shared on contemporary stages.",
    periodOrOrigin: "15th Century CE to Present",
    communitiesInvolved: ["Bhakats (celibate and householder monks)", "Mising tribe of Majuli", "Assamese Vaishnava society"],
    primaryLanguageCode: "as",
    tags: ["Majuli", "Sankaradeva", "Sattriya", "Namghar", "Mask Making", "Bhakti"],
    heroImageUrl: "https://images.unsplash.com/photo-1606820260383-7474b1742055?auto=format&fit=crop&w=1200&q=80",
    sources: [
      {
        id: "src-as-02a",
        culturalItemId: "item-as-02",
        title: "Sankaradeva and His Times: Early History of the Vaisnava Faith and Movement in Assam",
        citationType: "ACADEMIC_PAPER",
        authorOrInstitution: "Dr. Maheswar Neog, Gauhati University Press",
        publicationYear: 1965,
        urlOrArchiveRef: "Gauhati Univ. Research Monograph Series",
        excerpt: "The Satra was not merely a monastery; it was an agricultural commune, court of dispute resolution, art atelier, and library of handwritten Sanchi-bark manuscripts.",
        verifiedBy: "Sahitya Akademi & Sangeet Natak Akademi"
      }
    ],
    createdAt: "2026-01-22T08:30:00Z",
    updatedAt: "2026-03-01T17:00:00Z"
  },

  // 8. TAMIL NADU - HISTORICAL
  {
    id: "item-tn-01",
    stateId: "state-tn",
    stateSlug: "tamil-nadu",
    stateName: "Tamil Nadu",
    title: "Brihadisvara Temple & The Chola Epigraphic Archive at Thanjavur",
    slug: "brihadisvara-temple-chola-epigraphic-archive-thanjavur",
    nativeTitle: "தஞ்சைப் பெருவுடையார் கோயில் மற்றும் சோழர் கல்வெட்டுகள்",
    nativeScript: "Tamil",
    category: "HISTORICAL",
    verificationStatus: "VERIFIED",
    summary: "Consecrated in 1010 CE by Emperor Rajaraja Chola I, this granite engineering marvel is carved with 107 epigraphic inscriptions recording administrative budgets, salaries of 400 temple dancers, international maritime embassies, and land grants.",
    body: "The Brihadisvara Temple (Peruvudaiyar Kovil) in Thanjavur is the pinnacle of Dravidian architectural and epigraphic genius. Completed in precisely six years and dedicated in 1010 CE, its 66-meter Vimana tower was the tallest structure in South Asia for centuries, crowned by an 80-tonne monolithic granite cupola positioned without modern cranes.\n\nWhat elevates Brihadisvara from a holy site into a world historical archive are its outer plinth inscriptions. Rajaraja Chola ordered the names, home villages, and exact daily grain remuneration of 400 female classical dancers ('Talicheri Pendugal') to be engraved permanently in stone alongside accountants, drummers, goldsmiths, and parasol-bearers.\n\nFurther inscriptions document international trade delegations sent to the Song Dynasty of China and naval fleets deployed to the Srivijaya Empire in Sumatra and the Malacca Strait, providing verifiable archaeological corroboration for classical maritime Tamil commerce.",
    periodOrOrigin: "1004–1010 CE (Imperial Chola Empire)",
    communitiesInvolved: ["Chola master architects (Kunjara Mallan Raja Rama Perunthachan)", "Temple dancers and musicians", "Granite quarrymen of Pudukkottai"],
    primaryLanguageCode: "ta",
    tags: ["Chola Dynasty", "Dravidian Architecture", "Epigraphy", "Thanjavur", "UNESCO World Heritage", "Maritime History"],
    heroImageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    sources: [
      {
        id: "src-tn-01a",
        culturalItemId: "item-tn-01",
        title: "South Indian Inscriptions (Vol. II): Inscriptions in the Great Temple of Tanjore",
        citationType: "ARCHIVAL_DOCUMENT",
        authorOrInstitution: "E. Hultzsch & V. Venkayya, Archaeological Survey of India",
        publicationYear: 1891,
        urlOrArchiveRef: "Archaeological Survey of India Epigraphical Series Vol. II, Part I",
        excerpt: "Rajaraja commanded: 'Let the gifts made by us, our elder sister, our queens, and other donors be engraved upon the stone walls of this sacred vimana.'",
        verifiedBy: "Chief Epigraphist, Archaeological Survey of India, Mysore"
      }
    ],
    createdAt: "2026-01-25T11:00:00Z",
    updatedAt: "2026-03-02T13:00:00Z"
  },

  // 9. KERALA - BELIEF & PERFORMANCE
  {
    id: "item-kl-01",
    stateId: "state-kl",
    stateSlug: "kerala",
    stateName: "Kerala",
    title: "Theyyam: Living Deity Invocation & Shamanic Trance of North Malabar",
    slug: "theyyam-living-deity-invocation-shamanic-trance-malabar",
    nativeTitle: "തെയ്യം: വടക്കേ മലബാറിലെ അനുഷ്ഠാന കലാരൂപം",
    nativeScript: "Malayalam",
    category: "BELIEF",
    verificationStatus: "VERIFIED",
    summary: "An ancient sacred ritual practice where marginalized agrarian performers undergo fasting, intricate face painting, and elaborate headgear adornment to become living embodiments of ancestor deities, dispensing justice to community members.",
    body: "Theyyam (derived from 'Daivam', meaning God) is an indigenous liturgical performance tradition practiced in the sacred groves (Kavus) of Kannur, Kasaragod, and Wayanad. Predating Brahmanical temple hierarchies, Theyyam represents a living subversion of social privilege: for the duration of the performance, high-caste landholders bow before subaltern performers from the Malayan, Vannan, and Pulayan communities.\n\nThe transformation begins hours before nightfall with 'Mukhamezhuthu' (ritual facial painting using powdered volcanic stone, turmeric, and vermilion). Donning colossal crowns ('Mudi') woven from areca nut palm fronds and red silk, the performer steps into fire pits ('Theechamundi') in an ecstatic trance, dancing to the thunderous beats of Chenda and Ilathalam.\n\nOnce the deity manifests, villagers present disputes regarding land boundaries, sickness, and village welfare. The Theyyam speaks with prophetic authority, offering blessings and binding ethical decrees that hold greater moral weight than formal local litigation.",
    periodOrOrigin: "Pre-Sangam Era (Over 1,500 years continuous)",
    communitiesInvolved: ["Vannan community", "Malayan community", "Pulayan community", "Rural village collectives of Malabar"],
    primaryLanguageCode: "ml",
    tags: ["Theyyam", "Sacred Groves", "Shamanic Ritual", "Subaltern Culture", "North Malabar", "Living Faith"],
    heroImageUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    sources: [
      {
        id: "src-kl-01a",
        culturalItemId: "item-kl-01",
        title: "Theyyam: The Sacred Dance of Kerala",
        citationType: "ACADEMIC_PAPER",
        authorOrInstitution: "Dr. K. K. N. Kurup, Department of History, University of Calicut",
        publicationYear: 1986,
        urlOrArchiveRef: "Calicut Univ. Historical Monograph Series No. 4",
        excerpt: "Theyyam reflects the agrarian discontent, heroic cults, and religious syncretism of feudal Kerala, where the oppressed became the sacred arbitrator.",
        verifiedBy: "Kerala Folklore Academy, Chirakkal"
      }
    ],
    createdAt: "2026-01-28T15:00:00Z",
    updatedAt: "2026-03-05T12:00:00Z"
  },

  // 10. LADAKH - ORAL TRADITION
  {
    id: "item-la-01",
    stateId: "ut-la",
    stateSlug: "ladakh",
    stateName: "Ladakh",
    title: "The Oral Gesar Bardic Chanting of the Trans-Himalayas",
    slug: "oral-gesar-bardic-chanting-trans-himalayas",
    nativeTitle: "གེ་སར་རྒྱལ་པོའི་སྒྲུང་། (Gesar Gyalpo'i Srung)",
    nativeScript: "Tibetan",
    category: "ORAL_TRADITION",
    verificationStatus: "DOCUMENTED_ORAL",
    summary: "Recognized as the world's longest oral epic, performed by village bards without written manuscripts, recounting the supernatural journey of King Gesar of Ling across snow mountains to restore cosmic balance.",
    body: "The Epic of King Gesar is the crown jewel of high-altitude Central and Trans-Himalayan oral literature. In the remote villages of Sham, Nubra, and Zanskar in Ladakh, hereditary bards known as 'Sgrung-mkhan' (storytellers) possess the astonishing ability to recite hundreds of poetic chapters entirely by heart.\n\nAccording to Ladakhi tradition, Gesar bards do not simply learn the text through academic memorization; many experience 'Bab-sgrung' (visionary epiphanies), where the narrative is revealed to them during high-fever dreams in childhood or solitary meditation on glacial passes.\n\nAccompanying their chanting with the Da-mnyan (Ladakhi lute) and Pi-wang (two-stringed fiddle), the bards use diverse vocal timbres for over 80 characters. The epic functions as a living encyclopedia of mountain geography, medicinal flora, camel caravan routes, and Bon animistic spiritual principles that guided Silk Road travelers through harsh winters.",
    periodOrOrigin: "11th Century CE to Present",
    communitiesInvolved: ["Ladakhi bards (Sgrung-pa)", "Changpa nomads", "Zanskari mountain communities"],
    primaryLanguageCode: "bod",
    tags: ["Gesar Epic", "Trans-Himalayas", "UNESCO Oral Heritage", "Bardic Chanting", "Ladakh", "Nomadic Lore"],
    heroImageUrl: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1200&q=80",
    sources: [
      {
        id: "src-la-01a",
        culturalItemId: "item-la-01",
        title: "A Study of the Gesar Epic in Ladakh",
        citationType: "ACADEMIC_PAPER",
        authorOrInstitution: "A. H. Francke & Siddiq Wahid, Asiatic Society of Bengal",
        publicationYear: 1905,
        urlOrArchiveRef: "Memoirs of the Asiatic Society of Bengal Vol. I",
        excerpt: "The Ladakhi recension contains pre-Buddhist animistic motifs that offer vital linguistic clues to early Tibeto-Burman speech communities.",
        verifiedBy: "Ladakh Academy of Art, Culture and Languages, Leh"
      }
    ],
    createdAt: "2026-02-01T10:00:00Z",
    updatedAt: "2026-03-06T14:00:00Z"
  },

  // 11. ODISHA - FOLKLORE & CRAFT
  {
    id: "item-od-01",
    stateId: "state-od",
    stateSlug: "odisha",
    stateName: "Odisha",
    title: "Raghurajpur Pattachitra & The Tala Pata Chitra Palm-Leaf Inscriptions",
    slug: "raghurajpur-pattachitra-tala-pata-palm-leaf-inscriptions",
    nativeTitle: "ପଟ୍ଟଚିତ୍ର ଓ ତାଳପତ୍ର ଚିତ୍ର ପରମ୍ପରା",
    nativeScript: "Odia",
    category: "FOLKLORE",
    verificationStatus: "VERIFIED",
    summary: "A thousand-year-old heritage craft from Raghurajpur heritage village near Puri, where Chitrakar artisans etch visual narratives on dried palm leaves (talapatra) using iron styluses and soot, illustrating the Gita Govinda and Jagannath folklore.",
    body: "Raghurajpur, situated on the southern bank of the Bhargavi river, is India’s foremost living crafts village, inhabited entirely by Chitrakar (painter) artisans. The origins of Pattachitra are intimately tied to the Jagannath Temple at Puri: during the annual 15-day ritual 'Anavasara' period when the main temple deities are secluded due to ceremonial bath, substitute cloth paintings ('Anavasara Patti') created by these artisans are worshipped in the sanctum.\n\nIn Tala Pata Chitra (palm-leaf carving), leaves of the Palmyra palm are treated with turmeric water, dried in salt air for months, and stitched together into accordion scrolls. The artisan uses an iron stylus ('Lekhani') to engrave hair-thin mythological vignettes with microscopic precision. Carbon soot from oil lamps is rubbed into the incisions, followed by vegetable washes.\n\nThe folklore etched into these leaves preserves verses of Jayadeva's 12th-century lyrical classic Gita Govinda, village riddles, and astronomical star charts that maritime voyagers used while sailing to Bali and Java.",
    periodOrOrigin: "12th Century CE to Present",
    communitiesInvolved: ["Chitrakar artisan caste of Puri", "Puri Jagannatha Sevayats", "Gotipua dance troupes"],
    primaryLanguageCode: "or",
    tags: ["Pattachitra", "Palm Leaf Etching", "Raghurajpur", "Jagannath Lore", "Gita Govinda", "GI Craft"],
    heroImageUrl: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80",
    sources: [
      {
        id: "src-od-01a",
        culturalItemId: "item-od-01",
        title: "Palm-Leaf Miniatures: The Art of Raghunath Prusti of Mundamarai",
        citationType: "ACADEMIC_PAPER",
        authorOrInstitution: "Eberhard Fischer & Dinanath Pathy, Artibus Asiae",
        publicationYear: 1991,
        urlOrArchiveRef: "Museum Rietberg Zurich / IGNCA Publication",
        excerpt: "The Odishan palm-leaf artist combined the calligraphic discipline of epigraphists with the fluid dramatic narrative of village shadow puppeteers.",
        verifiedBy: "State Institute of Handicrafts Training, Bhubaneswar"
      }
    ],
    createdAt: "2026-02-05T09:00:00Z",
    updatedAt: "2026-03-04T11:00:00Z"
  },

  // 12. UTTAR PRADESH - HISTORICAL
  {
    id: "item-up-01",
    stateId: "state-up",
    stateSlug: "uttar-pradesh",
    stateName: "Uttar Pradesh",
    title: "Sarnath Lion Capital & Ashoka's Epigraphic Edicts of Non-Violence",
    slug: "sarnath-lion-capital-ashoka-epigraphic-edicts",
    nativeTitle: "सारनाथ सिंह शीर्ष एवं सम्राट अशोक के धर्मलेख",
    nativeScript: "Devanagari",
    category: "HISTORICAL",
    verificationStatus: "ARCHIVAL_SOURCE",
    summary: "Erected in approximately 250 BCE by Emperor Ashoka at the Deer Park where Gautama Buddha delivered his first discourse, this polished sandstone monument bearing the Dharmachakra serves as modern India's National Emblem.",
    body: "The Lion Capital of Ashoka at Sarnath, near Varanasi, is one of the greatest sculptural achievements of ancient antiquity. Carved out of a single monolithic block of yellow-speckled Chunar sandstone, it was buffed to a mirror-like sheen using the legendary Mauryan polishing technique that has resisted corrosion for over 2,250 years.\n\nThe capital features four Asiatic lions back-to-back, symbolizing sovereignty proclaiming truth in all four directions. The circular abacus beneath them contains four high-relief animals in dynamic motion—an Elephant (representing conception), a Bull (birth), a Galloping Horse (renunciation), and a Lion (attainment)—separated by twenty-four-spoke wheels of moral order ('Dharmachakra').\n\nThe accompanying pillar inscription, incised in pristine Brahmi script, records Ashoka's imperial edict warning against sectarian schisms in the monastic order, marking one of the earliest codified legal charters for religious harmony and institutional integrity in world history.",
    periodOrOrigin: "circa 250 BCE (Mauryan Empire)",
    communitiesInvolved: ["Mauryan imperial stone ateliers", "Chunar quarry guilds", "Buddhist Sangha of Varanasi"],
    primaryLanguageCode: "hi",
    tags: ["Mauryan Empire", "Ashoka", "Sarnath", "National Emblem", "Brahmi Script", "Epigraphy"],
    heroImageUrl: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
    sources: [
      {
        id: "src-up-01a",
        culturalItemId: "item-up-01",
        title: "Excavations at Sarnath: Archaeological Survey of India Annual Report 1904-1905",
        citationType: "ASI_RECORD",
        authorOrInstitution: "F. O. Oertel, Archaeological Survey of India",
        publicationYear: 1908,
        urlOrArchiveRef: "Superintendent of Government Printing, Calcutta, pp. 59-104",
        excerpt: "The discovery of the Ashoka capital intact with its superb polish marks the most significant archaeological uncovering of early Indian art.",
        verifiedBy: "Archaeological Survey of India, Sarnath Museum"
      }
    ],
    createdAt: "2026-02-08T14:00:00Z",
    updatedAt: "2026-03-05T16:00:00Z"
  },

  // 13. JAMMU & KASHMIR - HISTORICAL
  {
    id: "item-jk-01",
    stateId: "ut-jk",
    stateSlug: "jammu-and-kashmir",
    stateName: "Jammu & Kashmir",
    title: "Martand Sun Temple & Karkota Dynasty Epigraphy",
    slug: "martand-sun-temple-karkota-dynasty-epigraphy",
    nativeTitle: "मार्तण्ड सूर्य मन्दिर (مارتنڈ سورج مندر)",
    nativeScript: "Sharada / Devanagari",
    category: "HISTORICAL",
    verificationStatus: "ARCHIVAL_SOURCE",
    summary: "Commissioned in the 8th century CE by Emperor Lalitaditya Muktapida of the Karkota Dynasty, this colossal colonnaded limestone sanctuary synthesized Kashmiri, Gandharan, Gupta, and Hellenistic architectural motifs atop the Mattan plateau.",
    body: "Perched atop a plateau overlooking the Kashmir Valley, the Martand Sun Temple represents the zenith of early medieval Kashmiri stone engineering. Commissioned by Emperor Lalitaditya Muktapida (reigned circa 724–760 CE) of the Karkota Dynasty, the complex comprises a central shrine surrounded by a quadrangle peristyle with 84 fluted columns and trefoil-arched niches.\n\nHistorical documentation is verified in Kalhana's 12th-century Sanskrit chronicle Rajatarangini (Book IV, verses 192–193), which records the construction of the monumental stone temple dedicated to the Sun deity Surya at the holy springs of Mattan. The architectural plan synthesized indigenous Kashmiri stone-cutting with Gandharan and Classical Mediterranean peristyle colonnades, utilizing massive interlocking grey limestone ashlars without cement.\n\nEpigraphical and archaeological surveys conducted by the Archaeological Survey of India (ASI Monument ID: N-JK-M1) document intricate relief carvings depicting Surya riding his seven-horse celestial chariot, flanked by river goddesses Ganga and Yamuna.",
    periodOrOrigin: "circa 725–756 CE (Karkota Empire)",
    communitiesInvolved: ["Karkota court stone ateliers", "Kashmiri master masons", "Surya worshippers of Mattan"],
    primaryLanguageCode: "ks",
    tags: ["Martand", "Kashmir", "Karkota Dynasty", "Rajatarangini", "Sun Temple", "Gandhara Influence", "ASI Monument"],
    heroImageUrl: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    sources: [
      {
        id: "src-jk-01a",
        culturalItemId: "item-jk-01",
        title: "Rajatarangini: The Saga of the Kings of Kashmir",
        citationType: "ARCHIVAL_DOCUMENT",
        authorOrInstitution: "Kalhana; Translated by M. A. Stein, Archibald Constable & Co.",
        publicationYear: 1900,
        urlOrArchiveRef: "Stein Rajatarangini Translation, Book IV: 192-193",
        excerpt: "That liberal king built the wonderful temple of Martanda with massive stone walls, providing it with villages and endowments.",
        verifiedBy: "Archaeological Survey of India, Srinagar Circle"
      },
      {
        id: "src-jk-01b",
        culturalItemId: "item-jk-01",
        title: "Ancient Monuments of Kashmir",
        citationType: "ASI_RECORD",
        authorOrInstitution: "Ram Chandra Kak, Director of Archaeology, Kashmir State",
        publicationYear: 1933,
        urlOrArchiveRef: "India Society London, pp. 118-125 (ASI Monument ID: N-JK-M1)",
        excerpt: "Martand possesses the most striking situation of all ancient Kashmiri monuments, exhibiting classical architectural orders adapted to Himalayan topography.",
        verifiedBy: "Superintending Archaeologist, Jammu & Kashmir"
      }
    ],
    createdAt: "2026-02-12T10:00:00Z",
    updatedAt: "2026-03-07T12:00:00Z"
  },

  // 14. ODISHA - HISTORICAL
  {
    id: "item-od-02",
    stateId: "state-od",
    stateSlug: "odisha",
    stateName: "Odisha",
    title: "Konark Sun Temple Architectural Epigraphy & Kalinga Astronomy",
    slug: "konark-sun-temple-architectural-epigraphy-kalinga-astronomy",
    nativeTitle: "କୋଣାର୍କ ସୂର୍ଯ୍ୟ ମନ୍ଦିର ଓ କଳିଙ୍ଗ ଜ୍ୟୋତିର୍ବିଜ୍ଞାନ",
    nativeScript: "Odia",
    category: "HISTORICAL",
    verificationStatus: "ARCHIVAL_SOURCE",
    summary: "Constructed in 1250 CE by King Narasimhadeva I of the Eastern Ganga Dynasty, this 229-foot stone chariot monument features 24 scientifically calibrated sundial wheels that calculate time accurate to within minutes through shadow azimuths.",
    body: "The Sun Temple of Konark (Arka Tirtha), built on the shores of the Bay of Bengal, is the crowning achievement of Kalinga temple architecture. Designed in the form of a colossal cosmic chariot of the Sun God Surya, the stone platform is flanked by seven galloping horses representing the days of the week and twenty-four monumental wheels representing the fortnights of the solar year.\n\nThe twenty-four wheels, carved out of Khondalite stone, are not mere decorative reliefs; each 9.9-foot wheel functions as a precision sundial. The eight major spokes and eight minor spokes divide the day into eight 'prahars' (3-hour periods). By measuring the exact shadow cast by the central axle pin on the spoke bead carvings, ancient astronomers and navigators calculated civil and astronomical time to within two minutes of modern solar time.\n\nPrimary epigraphical evidence, including the copper plate charters of the Eastern Ganga Dynasty and the 13th-century palm-leaf engineering chronicle 'Baya Chakada', documents the names of the chief architect Bishu Maharana and the daily logistics of 1,200 artisans who labored for twelve years.",
    periodOrOrigin: "circa 1250 CE (Eastern Ganga Dynasty)",
    communitiesInvolved: ["Kalinga guild masons (Pathuria)", "Eastern Ganga royal court", "Odisha sea navigators (Sadhabas)"],
    primaryLanguageCode: "or",
    tags: ["Konark", "Sun Temple", "Kalinga Architecture", "Sundial Astronomy", "Eastern Ganga", "UNESCO World Heritage"],
    heroImageUrl: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80",
    sources: [
      {
        id: "src-od-02a",
        culturalItemId: "item-od-02",
        title: "Baya Chakada: The Palm-Leaf Architecture Chronicle of Konark",
        citationType: "ARCHIVAL_DOCUMENT",
        authorOrInstitution: "Alice Boner, Sadasiva Rath Sarma; E. J. Brill Leiden",
        publicationYear: 1972,
        urlOrArchiveRef: "New Light on the Sun Temple of Konarka, Manuscripts 1-4",
        excerpt: "The palm leaf chronicle details day-by-day stone deliveries, iron clamp weights, and astronomical alignments overseen by master builder Bishu Maharana.",
        verifiedBy: "State Museum of Odisha, Bhubaneswar"
      },
      {
        id: "src-od-02b",
        culturalItemId: "item-od-02",
        title: "Archaeological Survey of India: World Heritage Site Konark Dossier",
        citationType: "ASI_RECORD",
        authorOrInstitution: "Archaeological Survey of India (ASI)",
        publicationYear: 2012,
        urlOrArchiveRef: "ASI Monument ID: N-OR-37 (UNESCO Ref 246)",
        excerpt: "The wheels of Konark constitute astronomical instruments of extreme precision, registering the sun's passage through seasonal solstices.",
        verifiedBy: "Superintending Archaeologist, Bhubaneswar Circle"
      }
    ],
    createdAt: "2026-02-14T11:00:00Z",
    updatedAt: "2026-03-08T14:00:00Z"
  },

  // 15. MADHYA PRADESH - HISTORICAL
  {
    id: "item-mp-01",
    stateId: "state-mp",
    stateSlug: "madhya-pradesh",
    stateName: "Madhya Pradesh",
    title: "Bhimbetka Prehistoric Rock Art & Paleolithic Pigments",
    slug: "bhimbetka-prehistoric-rock-art-paleolithic-pigments",
    nativeTitle: "भीमबेटका शैलचित्र एवं प्रागैतिहासिक गुफाएं",
    nativeScript: "Devanagari",
    category: "HISTORICAL",
    verificationStatus: "ARCHIVAL_SOURCE",
    summary: "Spanning over 100,000 years of continuous human habitation in the Vindhya sandstone crags, Bhimbetka preserves over 750 rock shelters with 10,000-year-old ochre paintings depicting Mesolithic hunting, community dances, and proto-ritual assemblies.",
    body: "Located in the Raisen district in the foothills of the Vindhya Range, the Bhimbetka Rock Shelters represent the earliest evidence of human cognitive and artistic expression on the Indian subcontinent. Discovered in 1957 by eminent archaeologist Dr. V. S. Wakankar, the site encompasses 760 sandstone rock shelters stretching over 10 square kilometers within dense teak forests.\n\nThe rock art is classified into seven cultural epochs, ranging from the Upper Paleolithic through the Mesolithic to the Medieval period. The earliest Mesolithic paintings, executed in mineral pigments of haematite (iron oxide for red), copper compounds (green), and animal fat emulsions, depict communal bison hunts, animal riding, childbirth, and synchronized circle dancing accompanied by percussion instruments.\n\nThe chemical durability of the paintings is due to natural mineral calcification: rainwater washing down the sandstone shelters deposited calcium oxalate over the pigments, creating a transparent, natural glass veneer that protected the artwork from weathering across ten millennia.",
    periodOrOrigin: "circa 8,000 BCE to 1,000 CE (Mesolithic to Historic)",
    communitiesInvolved: ["Indigenous hunter-gatherer ancestors", "Gond and Korku forest communities"],
    primaryLanguageCode: "hi",
    tags: ["Bhimbetka", "Rock Art", "Prehistory", "Mesolithic", "V. S. Wakankar", "UNESCO World Heritage", "ASI Monument"],
    heroImageUrl: "https://images.unsplash.com/photo-1600100397608-f010f44390be?auto=format&fit=crop&w=1200&q=80",
    sources: [
      {
        id: "src-mp-01a",
        culturalItemId: "item-mp-01",
        title: "Dawn of Indian Art: Bhimbetka Rock Paintings",
        citationType: "ACADEMIC_PAPER",
        authorOrInstitution: "Dr. Vishnu Shridhar Wakankar, Vikram University Ujjain",
        publicationYear: 1976,
        urlOrArchiveRef: "Vikram Univ. Research Monograph on Prehistoric Archaeology",
        excerpt: "Bhimbetka demonstrates that the aesthetic traditions and choreographic formations of central Indian tribal life trace back to the Mesolithic epoch.",
        verifiedBy: "Indira Gandhi Rashtriya Manav Sangrahalaya (IGRMS), Bhopal"
      },
      {
        id: "src-mp-01b",
        culturalItemId: "item-mp-01",
        title: "Archaeological Survey of India: Rock Shelters of Bhimbetka",
        citationType: "ASI_RECORD",
        authorOrInstitution: "Archaeological Survey of India (ASI Bhopal Circle)",
        publicationYear: 2003,
        urlOrArchiveRef: "ASI Monument ID: N-MP-B1 (UNESCO Ref 925)",
        excerpt: "The shelters demonstrate an extraordinary unbroken link between prehistoric rock art and the surviving hunting traditions of local tribal populations.",
        verifiedBy: "Superintending Archaeologist, Bhopal Circle"
      }
    ],
    createdAt: "2026-02-16T09:00:00Z",
    updatedAt: "2026-03-08T15:00:00Z"
  },

  // 16. KARNATAKA - HISTORICAL
  {
    id: "item-ka-01",
    stateId: "state-ka",
    stateSlug: "karnataka",
    stateName: "Karnataka",
    title: "Hampi Vijayanagara Hydraulic Architecture & The Vitthala Complex",
    slug: "hampi-vijayanagara-hydraulic-architecture-vitthala-complex",
    nativeTitle: "ಹಂಪಿ ವಿಜಯನಗರ ಜಲ ವಾಸ್ತುಶಿಲ್ಪ ಮತ್ತು ವಿಠ್ಠಲ ದೇಗುಲ",
    nativeScript: "Kannada",
    category: "HISTORICAL",
    verificationStatus: "ARCHIVAL_SOURCE",
    summary: "Capital of the Vijayanagara Empire from 1336 to 1565 CE on the banks of the Tungabhadra, showcasing stone-cut hydraulic aqueducts, the monolithic stone chariot of Vitthala, and 56 musical granite pillars that resonate at precise musical frequencies.",
    body: "Spread across 4,100 hectares of boulder-strewn terrain on the south bank of the Tungabhadra River, Hampi was the imperial metropolis of the Vijayanagara Empire, described by Portuguese chroniclers Domingo Paes and Fernão Nunes as comparable in wealth and scale to Rome. At its height under Emperor Krishnadevaraya (1509–1529 CE), the city sustained an estimated population of over 500,000 people through sophisticated gravitational hydraulic engineering.\n\nWater was diverted from the Tungabhadra through stone check-dams and channeled via elevated stone aqueducts across miles to urban stepwells ('Pushkaranis'), royal baths (the Queen's Bath), and agricultural terraces without mechanical pumps.\n\nThe Vitthala Temple complex, consecrated in the 16th century, represents the zenith of Vijayanagara stone masonry. Its Ranga Mantapa features fifty-six monolithic granite pillars known as the 'SaReGaMa pillars', engineered with varying densities and hollow resonance cores that produce distinct musical notes and percussion timbres when struck.",
    periodOrOrigin: "1336–1565 CE (Vijayanagara Empire)",
    communitiesInvolved: ["Vijayanagara royal court", "Kannada and Telugu stonemason guilds", "Tungabhadra riparian agrarian communities"],
    primaryLanguageCode: "kn",
    tags: ["Hampi", "Vijayanagara", "Hydraulic Architecture", "Musical Pillars", "Stone Chariot", "UNESCO World Heritage"],
    heroImageUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    sources: [
      {
        id: "src-ka-01a",
        culturalItemId: "item-ka-01",
        title: "A Forgotten Empire (Vijayanagar): A Contribution to the History of India",
        citationType: "ARCHIVAL_DOCUMENT",
        authorOrInstitution: "Robert Sewell, Swan Sonnenschein & Co., London",
        publicationYear: 1900,
        urlOrArchiveRef: "Translation of the Chronicles of Domingo Paes and Fernao Nuniz",
        excerpt: "The city is so large that I desire not to write it... the water comes from forty miles away through pipes and masonry aqueducts of granitic stone.",
        verifiedBy: "Directorate of Archaeology and Museums, Karnataka"
      },
      {
        id: "src-ka-01b",
        culturalItemId: "item-ka-01",
        title: "Archaeological Survey of India: Hampi Ruins and Monuments",
        citationType: "ASI_RECORD",
        authorOrInstitution: "Archaeological Survey of India (ASI)",
        publicationYear: 2015,
        urlOrArchiveRef: "ASI Monument ID: N-KA-H1 (UNESCO World Heritage Site 241)",
        excerpt: "The Vitthala Temple stone chariot and acoustic pillars demonstrate unprecedented mathematical mastery over crystalline granite quarrying.",
        verifiedBy: "Superintending Archaeologist, Hampi Mini Circle"
      }
    ],
    createdAt: "2026-02-18T13:00:00Z",
    updatedAt: "2026-03-08T16:00:00Z"
  },

  // 17. GUJARAT - HISTORICAL
  {
    id: "item-gj-01",
    stateId: "state-gj",
    stateSlug: "gujarat",
    stateName: "Gujarat",
    title: "Rani ki Vav: Solanki Dynasty Subterranean Stepwell Epigraphy",
    slug: "rani-ki-vav-solanki-subterranean-stepwell-epigraphy",
    nativeTitle: "રાણકી વાવ: સોલંકી વંશનું જળ સ્થાપત્ય",
    nativeScript: "Gujarati",
    category: "HISTORICAL",
    verificationStatus: "ARCHIVAL_SOURCE",
    summary: "Commissioned in 1063 CE by Queen Udayamati in memory of King Bhima I of the Chaulukya (Solanki) Dynasty, this inverted temple stepwell plunges seven subterranean terraces beneath the Patan plains, adorned with over 800 high-relief sculptures.",
    body: "Located in Patan on the banks of the Saraswati river, Rani ki Vav ('The Queen’s Stepwell') is the most sophisticated subterranean hydraulic monument in South Asia. Constructed during the Chaulukya (Solanki) dynasty’s golden age, it was commissioned by Queen Udayamati in 1063 CE as an inverted subterranean temple honoring the sanctity of water.\n\nDesigned with seven stepped terraces descending thirty meters into the earth, the stepwell incorporates the distinctive Maru-Gurjara architectural style. Over 800 major sculptures and over 1,000 minor religious reliefs adorn the gallery walls, culminating in the lowest level where a reclining sculpture of Vishnu (Sheshashayi) rests directly above the water reservoir, linking the physical water table with sacred cosmology.\n\nThe historical charter of the stepwell is preserved in the 1304 CE Jain chronicle 'Prabandha Chintamani' by Merutunga Suri, which records that Queen Udayamati built this magnificent subterranean marvel at Anahilapataka (Patan) surpassing all contemporary works in architectural grandeur.",
    periodOrOrigin: "1063–1080 CE (Chaulukya / Solanki Dynasty)",
    communitiesInvolved: ["Solanki royal court", "Sompura master stonemason guild", "Patan well-diggers and hydraulic engineers"],
    primaryLanguageCode: "gu",
    tags: ["Rani ki Vav", "Stepwell", "Solanki Dynasty", "Subterranean Architecture", "Maru-Gurjara", "UNESCO World Heritage"],
    heroImageUrl: "https://images.unsplash.com/photo-1596405344148-2dd675d496e5?auto=format&fit=crop&w=1200&q=80",
    sources: [
      {
        id: "src-gj-01a",
        culturalItemId: "item-gj-01",
        title: "Prabandha Chintamani of Merutunga Suri",
        citationType: "ARCHIVAL_DOCUMENT",
        authorOrInstitution: "Merutunga Suri; Translated by C. H. Tawney, Asiatic Society of Bengal",
        publicationYear: 1901,
        urlOrArchiveRef: "Bibliotheca Indica Series, Calcutta, Chapter III",
        excerpt: "Queen Udayamati, the devoted consort of Bhima I, caused to be excavated and constructed at Anahillapattana this stepwell surpassing all others.",
        verifiedBy: "Gujarat State Department of Archaeology"
      },
      {
        id: "src-gj-01b",
        culturalItemId: "item-gj-01",
        title: "Archaeological Survey of India: Rani-ki-Vav at Patan",
        citationType: "ASI_RECORD",
        authorOrInstitution: "Archaeological Survey of India (ASI Vadodara Circle)",
        publicationYear: 2014,
        urlOrArchiveRef: "ASI Monument ID: N-GJ-21 (UNESCO World Heritage Site 922)",
        excerpt: "The seven-storeyed stepwell constitutes the pinnacle of subterranean water architecture, decorated with over eight hundred sculptures.",
        verifiedBy: "Superintending Archaeologist, Vadodara Circle"
      }
    ],
    createdAt: "2026-02-20T14:00:00Z",
    updatedAt: "2026-03-08T17:00:00Z"
  }
];

export const LIVING_HERITAGE: LivingHeritageItem[] = [
  {
    id: "lh-01",
    title: "Paithani Silk & Gold Zari Weaving",
    slug: "paithani-silk-gold-zari-weaving",
    stateName: "Maharashtra",
    stateSlug: "maharashtra",
    heritageType: "TEXTILE",
    description: "Handcrafted in the ancient royal town of Paithan (Pratishthana), this 2,000-year-old weaving tradition produces kaleidoscopic silk sarees with peacock (mor) and lotus (kamal) motifs woven with pure gold and silver wire.",
    culturalSignificance: "Mentioned in Greek maritime periplus texts as Pratishthana export; worn during Maharashtrian wedding sacraments as a sacred heirloom.",
    communitiesPracticing: ["Shali artisan weavers of Paithan and Yeola"],
    giStatus: "Registered GI Tag: GI-18",
    status: "REVIVED",
    heroImageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    sources: ["Development Commissioner for Handlooms, Ministry of Textiles, Govt. of India"]
  },
  {
    id: "lh-02",
    title: "Jaipur Blue Pottery",
    slug: "jaipur-blue-pottery",
    stateName: "Rajasthan",
    stateSlug: "rajasthan",
    heritageType: "CRAFT",
    description: "A distinctive glazed ceramic style made without clay, utilizing crushed quartz stone, glass, Fuller’s earth, and natural gum, fired once and painted with Persian cobalt blue and copper oxide green.",
    culturalSignificance: "Brought to Jaipur in the 19th century by Maharaja Sawai Ram Singh II from Delhi and Turko-Persian master potters; revitalized by artist Kripal Singh Shekhawat.",
    communitiesPracticing: ["Kumhar and artisan studios of Kot Jewar and Jaipur"],
    giStatus: "Registered GI Tag: GI-42",
    status: "THRIVING",
    heroImageUrl: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=80",
    sources: ["All India Handicrafts Board Monograph", "Kripal Kumbh Archives"]
  },
  {
    id: "lh-03",
    title: "Muga Golden Silk of the Brahmaputra Valley",
    slug: "muga-golden-silk-brahmaputra",
    stateName: "Assam",
    stateSlug: "assam",
    heritageType: "TEXTILE",
    description: "Sourced from the wild endemic silk worm Antheraea assamensis feeding on Som and Soalu tree leaves, producing a shimmering golden yarn whose luster increases with every single wash.",
    culturalSignificance: "Reserved exclusively for Ahom royal vestments (Cheleng and Mekhela Sador); an integral element of Bihu dance attire.",
    communitiesPracticing: ["Sualkuchi village master weavers and Bodo sericulturists"],
    giStatus: "Registered GI Tag: GI-55",
    status: "THRIVING",
    heroImageUrl: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=80",
    sources: ["Central Silk Board of India", "Assam Silk Institute, Sualkuchi"]
  },
  {
    id: "lh-04",
    title: "Koodiyattam Sanskrit Temple Theatre",
    slug: "koodiyattam-sanskrit-temple-theatre",
    stateName: "Kerala",
    stateSlug: "kerala",
    heritageType: "PERFORMING_ARTS",
    description: "Recognized by UNESCO as India's first Masterpiece of Oral and Intangible Heritage, Koodiyattam is an 1,800-year-old stylized dramatic ritual performed inside temple Koothambalams with intense micro-ocular eye expressions (Netrabhinaya).",
    culturalSignificance: "The only surviving unbroken performance link to ancient classical Sanskrit drama codified in Bharata Muni's Natyashastra.",
    communitiesPracticing: ["Chakyar actor community and Nambiar percussionists playing Mizhavu drums"],
    giStatus: "UNESCO Masterpiece of Oral & Intangible Heritage of Humanity",
    status: "REVIVED",
    heroImageUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    sources: ["UNESCO Intangible Cultural Heritage List (2008)", "Kerala Kalamandalam Deemed University"]
  },
  {
    id: "lh-05",
    title: "Bastar Dhokra Lost-Wax Bell Metal Casting",
    slug: "bastar-dhokra-bell-metal-casting",
    stateName: "Chhattisgarh",
    stateSlug: "chhattisgarh",
    heritageType: "CRAFT",
    description: "An ancient non-ferrous metal casting technique directly descended from the Indus Valley's 'Dancing Girl' of Mohenjo-daro (circa 2500 BCE), using beeswax wires over clay cores to craft tribal figurines.",
    culturalSignificance: "Used by forest communities to craft ritual lamps, clan animal totems, and bridal adornments, embodying ancient ecological balance.",
    communitiesPracticing: ["Ghadwa artisan clan of Bastar and Kondagaon"],
    giStatus: "Registered GI Tag: GI-83",
    status: "ENDANGERED",
    heroImageUrl: "https://images.unsplash.com/photo-1600100397608-f010f44390be?auto=format&fit=crop&w=1200&q=80",
    sources: ["Tribal Cooperative Marketing Development Federation of India (TRIFED)"]
  }
];

export const STORIES: StoryItem[] = [
  {
    id: "story-01",
    title: "The Battle of Sinhagad and Tanaji's Ghorpad: History vs Ballad",
    slug: "battle-of-sinhagad-tanaji-ghorpad-history-vs-ballad",
    stateName: "Maharashtra",
    stateSlug: "maharashtra",
    tellerOrCommunity: "Shahir Tulsidas & Shahir Dongre bardic lineage",
    traditionType: "BARDIC",
    summary: "How the historic 1670 CE recapture of Kondhana fort was transformed by 17th-century village ballads into the legendary tale of the scaled monitor lizard (Yeshwanti), illustrating the vital line between military chronicle and oral folklore.",
    fullNarrative: "In February 1670, Maratha subedar Tanaji Malusare led a daring night assault against the Rajput commander Udaybhan Rathore at Kondhana, a 4,300-foot fortress near Pune. The military chronicle recorded in the Sabhasad Bakhar (1697) describes how Tanaji and three hundred Mavale climbers scaled the sheer, near-vertical southern cliff using rope ladders in pitch darkness while a mountain gale masked their approach.\n\nHowever, in the oral Powada composed shortly after the battle by Shahir Tulsidas, the folk imagination introduced a magical partner: 'Yeshwanti', a domesticated giant Bengal monitor lizard (Ghorpad). According to the bard's chanted verses, Tanaji tied a silk rope to Yeshwanti’s waist, sending the reptile up the vertical basalt face to dig its claws into the stone crags so soldiers could climb. In the bard's emotional climax, when Yeshwanti hesitates on the sheer precipice, Tanaji admonishes the creature with soldierly affection, whereupon the loyal lizard secures the climb.\n\nWhile zoological and military historians recognize the monitor lizard legend as a metaphor for the climbers' supernatural grip, this story demonstrates how Indian oral traditions immortalize tactical sacrifice by weaving nature, devotion, and heroism into unshakeable folk memory.",
    culturalContext: "Performed during Shiv Jayanti celebrations across Western Maharashtra using the daf and tuntune to inspire community solidarity.",
    languageOrDialect: "Old Marathi (17th Century Sahyadri dialect)",
    audioDuration: "14 mins oral recitation recorded in Pune district",
    recordedBy: "H. A. Acworth, Civil Service Oral Archives",
    recordingYear: 1891,
    sources: [
      {
        id: "src-st-01",
        culturalItemId: "item-mh-01",
        title: "Ballad of the Capture of Sinhagad",
        citationType: "ARCHIVAL_DOCUMENT",
        authorOrInstitution: "Shahir Tulsidas; Edited by Acworth & Shaligram",
        publicationYear: 1894,
        urlOrArchiveRef: "Ballads of the Marathas, Bombay Government Central Press",
        excerpt: "Tanaji said: 'Rise up Yeshwanti, thou mother of the army, climb this cliff that the Swarajya may enter Kondhana.'",
        verifiedBy: "Bhandarkar Oriental Research Institute (BORI), Pune"
      }
    ]
  },
  {
    id: "story-02",
    title: "Burhi Aair Xadhu: The Grandmother’s Tales of the Red River",
    slug: "burhi-aair-xadhu-grandmothers-tales-red-river",
    stateName: "Assam",
    stateSlug: "assam",
    tellerOrCommunity: "Village matriarchs and Lakshminath Bezbaroa collection",
    traditionType: "FOLK_EPIC",
    summary: "Oral fireside fables passed down by Assamese grandmothers on chilly winter evenings along the Brahmaputra, anthropomorphizing birds, river spirits, and resilient village daughters.",
    fullNarrative: "Before Lakshminath Bezbaroa compiled 'Burhi Aair Xadhu' (Grandmother's Tales) in 1911, these stories lived solely in the spoken words of rural women sitting beside the household hearth ('Meji') during Magh Bihu. Unlike European courtly fairy tales of distant kings and queens, the Assamese oral cycle belongs entirely to the soil: speaking fish, foolish jackals, talking outenga (elephant apples), and orphaned girls who outwit wicked stepmothers with the aid of the gentle water spirits of the Brahmaputra.\n\nIn the beloved tale of 'Tejimola', a cruel stepmother crushes a gentle young girl under a wooden rice pounder ('Dheki') while her merchant father is away on river trade. Yet Tejimola's life cannot be extinguished: her spirit emerges first as an outenga plant by the pond, then transforms into a lotus on the river, and finally into a singing bird that perches on her returning father's boat, singing: 'Do not pluck me father, do not hurt me, for I am your beloved Tejimola.'\n\nThe story is an oral treatise on ecological renewal and the resilience of truth over violence, teaching generation after generation of Assamese children that life in the river valley is cyclical, sacred, and protected by nature herself.",
    culturalContext: "Recited across Assam during winter evenings to impart moral ethics, kinship duties, and environmental reverence.",
    languageOrDialect: "Colloquial Assamese (Brahmaputra Valley dialects)",
    audioDuration: "18 mins recorded oral storytelling",
    recordedBy: "Asam Sahitya Sabha Folklore Division",
    recordingYear: 1968,
    sources: [
      {
        id: "src-st-02",
        culturalItemId: "item-as-02",
        title: "Burhi Aair Xadhu (Grandmother's Tales)",
        citationType: "ACADEMIC_PAPER",
        authorOrInstitution: "Lakshminath Bezbaroa; Asam Sahitya Sabha",
        publicationYear: 1911,
        urlOrArchiveRef: "Original Edition, Calcutta, 1911",
        excerpt: "These stories are not authored by a single pen; they have flowed from millions of maternal lips over centuries like the perennial currents of the Brahmaputra.",
        verifiedBy: "Gauhati University Department of Folklore"
      }
    ]
  },
  {
    id: "story-03",
    title: "The Legend of Kuldhara: The Deserted Village of the Paliwals",
    slug: "legend-of-kuldhara-deserted-village-paliwals",
    stateName: "Rajasthan",
    stateSlug: "rajasthan",
    tellerOrCommunity: "Paliwal Brahmin oral descendants & Jaisalmer bards",
    traditionType: "COMMUNITY_MEMORY",
    summary: "In 1825 CE, all eighty-four villages of Paliwal Brahmins vanished overnight into the Thar desert rather than surrender their community honor to a tyrannical state prime minister.",
    fullNarrative: "Eighteen kilometers southwest of the golden sandstone fortress of Jaisalmer lies Kuldhara, an eerily preserved ghost village of carved sandstone houses, stepped streets, and silent temples. Established in 1291 CE by prosperous agricultural Paliwal Brahmins who pioneered indigenous desert water-harvesting systems ('Khadins'), the settlement was a thriving oasis for more than five centuries.\n\nAccording to unbroken oral accounts transmitted by desert elders, the crisis arrived in the winter of 1825. Salim Singh, the infamously cruel prime minister (Diwan) of Jaisalmer state, demanded exorbitant taxes and issued an ultimatum: the village headman's daughter must be handed over to him within twenty-four hours or the village would face destruction.\n\nRather than submit to dishonor or fight an armed garrison, the elders of all eighty-four surrounding Paliwal villages convened at the village temple. That very night, under cover of a howling dust storm, thousands of villagers packed their camel carts and abandoned their ancestral stone homes forever. Before disappearing into the desert night, the elders uttered a solemn oral curse upon the stones: that anyone who sought to settle inside the walls of Kuldhara would know only misfortune.\n\nTo this day, the houses stand open to the stars, empty yet intact, testifying to the unyielding commitment to community autonomy that characterizes the folklore of Rajasthan.",
    culturalContext: "Oral history preserved by the Paliwal diaspora across Western India and narrated by desert guides.",
    languageOrDialect: "Marwari / Dhatki dialect",
    audioDuration: "12 mins oral testimony",
    recordedBy: "Thar Heritage Museum, Jaisalmer",
    recordingYear: 1994,
    sources: [
      {
        id: "src-st-03",
        culturalItemId: "item-rj-02",
        title: "Annals and Antiquities of Rajasthan (Vol. II)",
        citationType: "GAZETTEER",
        authorOrInstitution: "Lt. Col. James Tod; Smith, Elder & Co., London",
        publicationYear: 1832,
        urlOrArchiveRef: "Chapter: The Desert Regions of Marwar and Jaisalmer",
        excerpt: "The Paliwals were cultivators and merchants of rare industry, but their sudden abandonment of their settlements leaves an indelible monument to the exactions of local despotism.",
        verifiedBy: "Thar Heritage Museum & Rajasthan Archaeological Department"
      }
    ]
  }
];
