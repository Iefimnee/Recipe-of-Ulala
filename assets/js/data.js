/* ==============================================
   Recipe of Ulala - Data File
   产品和成分数据
   注意：这是数据结构示例，需要填充真实数据
   ============================================== */

// ======================
// 1. Products Data (产品数据)
// ======================
const products = [
    {
        id: 'royal-canin-mini',
        brand: 'Royal Canin',
        brandJa: 'ロイヤルカナン',
        name: 'Mini Adult',
        nameJa: 'ミニ アダルト',
        
        // 价格和规格
        price: 4580,
        weight: '2kg',
        pricePerKg: 2290,
        
        // Amazon信息
        amazonUrl: 'https://amazon.co.jp/[待填充]',
        rating: 4.5,
        reviewCount: 1234,
        
        // 图片
        imageUrl: 'assets/images/products/royal-canin-800.jpg',
        imageThumbnail: 'assets/images/products/royal-canin-400.jpg',
        
        // 适用范围
        suitableFor: {
            sizes: ['small'],           // small, medium, large
            ages: ['adult'],             // puppy, adult, senior
            ageRange: '1-10歳',
            lifestyle: ['indoor'],       // indoor, outdoor, active
        },
        
        // 主要成分（前5个）
        mainIngredients: [
            '鶏肉粉',
            '米',
            'とうもろこし',
            '動物性脂肪',
            '魚油'
        ],
        
        // 过敏原
        allergens: ['chicken', 'corn', 'wheat'],
        
        // 营养成分
        nutrition: {
            protein: '27.0%以上',
            fat: '16.0%以上',
            fiber: '1.7%以下',
            ash: '5.7%以下',
            moisture: '9.5%以下',
            calories: '403kcal / 100g'
        },
        
        // 特点
        features: [
            '小型犬の健康維持に最適な栄養バランス',
            '皮膚・被毛の健康をサポート',
            '消化吸収性に配慮した独自処方',
            '歯の健康維持をサポート'
        ],
        
        // 标签
        tags: ['小型犬', '成犬（1-10歳）', '室内飼い'],
        
        // 推荐/注意
        recommended: [
            '小型犬（体重10kg以下）',
            '成犬（1-10歳）',
            '室内で過ごすことが多い',
            '皮膚や被毛のケアが必要',
            '歯の健康を維持したい'
        ],
        
        cautions: [
            '鶏肉アレルギーがある',
            '穀物アレルギーがある（とうもろこし・小麦）',
            'グレインフリーを希望する',
            '減量が必要（カロリー高め）',
            '中型犬・大型犬（粒が小さすぎる）'
        ],
        
        // FAQ
        faqs: [
            {
                question: '子犬にも与えられますか？',
                answer: 'このフードは成犬用（1-10歳）に設計されています。子犬には「Royal Canin ミニ パピー」など、子犬専用のフードをおすすめします。'
            },
            {
                question: '穀物が入っていますが大丈夫ですか？',
                answer: '米やとうもろこしなどの穀物は、消化吸収しやすい形で配合されています。ただし、穀物アレルギーがある犬には適していません。'
            },
            {
                question: '保存方法を教えてください',
                answer: '開封後は、密閉できる容器に移し替え、直射日光を避けて涼しい場所で保管してください。開封後は1ヶ月以内に使い切ることをおすすめします。'
            },
            {
                question: '1日の給餌量はどのくらいですか？',
                answer: '体重3kgの犬で1日50-60g、体重5kgの犬で1日75-85gが目安です。愛犬の体重や体調を見ながら調整してください。'
            },
            {
                question: '他のフードから切り替える方法は？',
                answer: '7-10日かけて徐々に切り替えることをおすすめします。最初の2-3日は25%混ぜ、徐々に割合を増やしていきます。'
            }
        ],
        
        // 相似产品（ID列表）
        similarProducts: ['nutro-natural', 'konoko-gohan'],
        
        // SEO
        metaTitle: 'Royal Canin ミニ アダルト 成分解析 | Recipe of Ulala',
        metaDescription: 'Royal Canin ミニ アダルトの全成分を詳しく解説。鶏肉粉、米、とうもろこしなど、一つ一つの原材料の意味がわかります。'
    },
    
    {
        id: 'acana-puppy',
        brand: 'Acana',
        brandJa: 'アカナ',
        name: 'Puppy Small Breed',
        nameJa: 'パピー スモールブリード',
        price: 6380,
        weight: '2kg',
        pricePerKg: 3190,
        rating: 4.7,
        reviewCount: 856,
        
        suitableFor: {
            sizes: ['small'],
            ages: ['puppy'],
            ageRange: '2ヶ月-1歳',
            lifestyle: ['all']
        },
        
        mainIngredients: [
            '新鮮鶏肉',
            '鶏肉ミール',
            '七面鳥肉ミール',
            'サーモンミール',
            'ニシンミール'
        ],
        
        allergens: ['chicken', 'fish'],
        
        tags: ['小型犬', '子犬', 'グレインフリー'],
        
        features: [
            '子犬の成長に必要な高タンパク質（33%）',
            'グレインフリー（穀物不使用）',
            '新鮮な肉を70%使用',
            'DHA配合で脳の発達をサポート'
        ],
        
        similarProducts: ['royal-canin-mini', 'umaka']
    },
    
    {
        id: 'umaka',
        brand: 'うまか',
        brandJa: 'うまか',
        name: 'Umaka Dog Food',
        nameJa: 'ドッグフード',
        price: 5478,
        weight: '1.5kg',
        pricePerKg: 3652,
        rating: 4.6,
        reviewCount: 923,
        
        suitableFor: {
            sizes: ['small', 'medium'],
            ages: ['all'],
            ageRange: '全年齢',
            lifestyle: ['all']
        },
        
        mainIngredients: [
            '鶏肉（九州産華味鳥）',
            '玄米',
            '大麦',
            'かつお節',
            '大豆'
        ],
        
        allergens: ['chicken', 'soy'],
        
        tags: ['国産', '全年齢', '無添加'],
        
        features: [
            '九州産華味鳥を100%使用',
            '小麦グルテンフリー',
            '人間が食べられる品質',
            'ノンオイルコーティング'
        ],
        
        similarProducts: ['konoko-gohan', 'royal-canin-mini']
    },
    
    {
        id: 'nutro-natural',
        brand: 'Nutro',
        brandJa: 'ニュートロ',
        name: 'Natural Choice Small Breed Adult',
        nameJa: 'ナチュラルチョイス 小型犬用',
        price: 3980,
        weight: '3kg',
        pricePerKg: 1327,
        rating: 4.3,
        reviewCount: 1567,
        
        suitableFor: {
            sizes: ['small'],
            ages: ['adult'],
            ageRange: '1-7歳',
            lifestyle: ['all']
        },
        
        mainIngredients: [
            'チキン（肉）',
            'チキンミール',
            '玄米',
            'オートミール',
            '粗挽き米'
        ],
        
        allergens: ['chicken'],
        
        tags: ['小型犬', '成犬', 'コスパ◎'],
        
        features: [
            'チキンを第一主原料に使用',
            '小型犬に最適な小粒タイプ',
            'オメガ6・オメガ3配合',
            'コストパフォーマンスが高い'
        ],
        
        similarProducts: ['royal-canin-mini', 'umaka']
    },
    
    {
        id: 'konoko-gohan',
        brand: 'このこのごはん',
        brandJa: 'このこのごはん',
        name: 'Konoko Gohan',
        nameJa: 'このこのごはん',
        price: 3850,
        weight: '1kg',
        pricePerKg: 3850,
        rating: 4.8,
        reviewCount: 645,
        
        suitableFor: {
            sizes: ['small'],
            ages: ['all'],
            ageRange: '全年齢',
            lifestyle: ['indoor']
        },
        
        mainIngredients: [
            '鶏肉（ささみ、レバー）',
            '玄米',
            '大麦',
            'ビール酵母',
            '鰹節'
        ],
        
        allergens: ['chicken'],
        
        tags: ['国産', '小型犬', '涙やけ対策'],
        
        features: [
            '涙やけ・におい対策に特化',
            '小麦グルテンフリー',
            '人工添加物不使用',
            'ノンオイルコーティング'
        ],
        
        similarProducts: ['umaka', 'royal-canin-mini']
    }
];

// ======================
// 2. Ingredients Data (成分数据)
// ======================
const ingredients = {
    '鶏肉粉': {
        nameJa: '鶏肉粉（チキンミール）',
        nameEn: 'Chicken Meal',
        category: 'meat',
        rating: 5,
        badge: '良質なタンパク源',
        badgeClass: 'good',
        
        description: '鶏肉を乾燥させて粉末にしたもの。水分と脂肪を取り除いているため、タンパク質含有率が約60-70%と非常に高く、犬の筋肉や被毛の健康維持に必要な必須アミノ酸を豊富に含みます。',
        
        benefits: [
            '高品質なタンパク質源（60-70%）',
            '必須アミノ酸が豊富',
            '消化吸収率が高い'
        ],
        
        cautions: [
            '鶏肉アレルギーの犬には不向き',
            '品質は製造元により差がある'
        ],
        
        usedIn: ['royal-canin-mini', 'nutro-natural', 'umaka']
    },
    
    '米': {
        nameJa: '米',
        nameEn: 'Rice',
        category: 'grain',
        rating: 4,
        badge: '消化に良い',
        badgeClass: 'good',
        
        description: '消化吸収しやすい炭水化物源。エネルギー源として優れており、小麦と比べてアレルギーのリスクが低いのが特徴です。',
        
        benefits: [
            '消化吸収が良い',
            'アレルギーリスクが低い',
            '安定したエネルギー源'
        ],
        
        cautions: [
            '穀物を避けたい場合は不向き',
            '過剰摂取は肥満の原因に'
        ],
        
        usedIn: ['royal-canin-mini', 'nutro-natural', 'konoko-gohan']
    },
    
    'とうもろこし': {
        nameJa: 'とうもろこし',
        nameEn: 'Corn',
        category: 'grain',
        rating: 3,
        badge: 'アレルギーに注意',
        badgeClass: 'caution',
        
        description: 'エネルギー源となる穀物。食物繊維も豊富に含みますが、一部の犬にはアレルギー反応を起こす可能性があります。',
        
        benefits: [
            'エネルギー源として有効',
            '食物繊維が豊富',
            'コストパフォーマンスが良い'
        ],
        
        cautions: [
            'アレルギーの可能性がある',
            '消化に個体差がある',
            'グレインフリーを好む場合は不向き'
        ],
        
        usedIn: ['royal-canin-mini']
    },
    
    '動物性脂肪': {
        nameJa: '動物性脂肪',
        nameEn: 'Animal Fat',
        category: 'fat',
        rating: 4,
        badge: 'エネルギー源',
        badgeClass: 'good',
        
        description: '犬に必要な脂肪酸を供給する重要な成分。皮膚や被毛の健康維持、エネルギー源として重要な役割を果たします。',
        
        benefits: [
            '必須脂肪酸を供給',
            '皮膚・被毛の健康維持',
            '嗜好性が高い'
        ],
        
        cautions: [
            '過剰摂取は肥満の原因',
            '酸化防止剤の確認が必要'
        ],
        
        usedIn: ['royal-canin-mini', 'nutro-natural']
    },
    
    '魚油': {
        nameJa: '魚油',
        nameEn: 'Fish Oil',
        category: 'fat',
        rating: 5,
        badge: 'オメガ3配合',
        badgeClass: 'excellent',
        
        description: 'EPA・DHAなどのオメガ3脂肪酸を豊富に含む優秀な成分。皮膚・被毛の健康、関節の健康、脳の発達に有益です。',
        
        benefits: [
            'オメガ3脂肪酸が豊富',
            '皮膚・被毛の健康維持',
            '関節・脳の健康サポート',
            '抗炎症作用'
        ],
        
        cautions: [
            '酸化しやすいため保存に注意'
        ],
        
        usedIn: ['royal-canin-mini', 'acana-puppy', 'konoko-gohan']
    },
    
    'サーモン': {
        nameJa: 'サーモン',
        nameEn: 'Salmon',
        category: 'meat',
        rating: 5,
        badge: '高品質タンパク質',
        badgeClass: 'excellent',
        
        description: '良質なタンパク質とオメガ3脂肪酸を含む魚肉。鶏肉アレルギーの犬にも適した代替タンパク源。',
        
        benefits: [
            '高品質なタンパク質',
            'オメガ3脂肪酸が豊富',
            '鶏肉アレルギー対応',
            '嗜好性が高い'
        ],
        
        cautions: [
            '魚アレルギーがある場合は注意'
        ],
        
        usedIn: ['acana-puppy']
    },
    
    'ラム肉': {
        nameJa: 'ラム肉',
        nameEn: 'Lamb',
        category: 'meat',
        rating: 5,
        badge: '低アレルギー',
        badgeClass: 'excellent',
        
        description: '羊の肉。低アレルギー性のタンパク源として知られており、鶏肉や牛肉にアレルギーがある犬に適しています。',
        
        benefits: [
            'アレルギーが少ない',
            '高品質なタンパク質',
            'L-カルニチンが豊富',
            '嗜好性が高い'
        ],
        
        cautions: [
            '価格が高めになる傾向'
        ],
        
        usedIn: []
    },
    
    'ビートパルプ': {
        nameJa: 'ビートパルプ',
        nameEn: 'Beet Pulp',
        category: 'fiber',
        rating: 3,
        badge: '食物繊維',
        badgeClass: 'good',
        
        description: 'テンサイ（砂糖大根）から糖分を抽出した後の絞りかす。食物繊維が豊富で、便通を整える効果があります。',
        
        benefits: [
            '食物繊維が豊富',
            '便通を整える',
            '腸内環境の改善'
        ],
        
        cautions: [
            '過剰摂取はガスの原因に',
            '一部の飼い主は避ける傾向'
        ],
        
        usedIn: ['royal-canin-mini']
    },
    
    'グルコサミン': {
        nameJa: 'グルコサミン',
        nameEn: 'Glucosamine',
        category: 'supplement',
        rating: 4,
        badge: '関節サポート',
        badgeClass: 'good',
        
        description: '軟骨の主成分の一つ。関節の健康維持に役立ち、特にシニア犬や大型犬に重要な成分です。',
        
        benefits: [
            '関節の健康維持',
            '軟骨の生成をサポート',
            'シニア犬に有益'
        ],
        
        cautions: [
            '甲殻類アレルギーがある場合は注意'
        ],
        
        usedIn: ['royal-canin-mini', 'acana-puppy']
    },
    
    'ビール酵母': {
        nameJa: 'ビール酵母',
        nameEn: 'Brewers Yeast',
        category: 'supplement',
        rating: 4,
        badge: 'ビタミンB群',
        badgeClass: 'good',
        
        description: 'ビタミンB群、タンパク質、ミネラルが豊富。皮膚・被毛の健康や消化をサポートします。',
        
        benefits: [
            'ビタミンB群が豊富',
            '皮膚・被毛の健康',
            '消化をサポート',
            '嗜好性向上'
        ],
        
        cautions: [
            'イースト菌アレルギーがある場合は注意'
        ],
        
        usedIn: ['konoko-gohan']
    }
};

// ======================
// 3. Helper Functions (辅助函数)
// ======================

// Get product by ID
function getProductById(id) {
    return products.find(p => p.id === id);
}

// Get ingredient data
function getIngredient(name) {
    return ingredients[name];
}

// Get similar products
function getSimilarProducts(productId) {
    const product = getProductById(productId);
    if (!product) return [];
    
    return product.similarProducts
        .map(id => getProductById(id))
        .filter(p => p !== undefined);
}

// Filter products by criteria
function filterProducts(criteria) {
    return products.filter(product => {
        // Filter by size
        if (criteria.size && !product.suitableFor.sizes.includes(criteria.size)) {
            return false;
        }
        
        // Filter by age
        if (criteria.age && !product.suitableFor.ages.includes(criteria.age)) {
            return false;
        }
        
        // Filter by allergens
        if (criteria.excludeAllergens) {
            const hasAllergen = criteria.excludeAllergens.some(allergen => 
                product.allergens.includes(allergen)
            );
            if (hasAllergen) return false;
        }
        
        // Filter by price range
        if (criteria.maxPricePerKg && product.pricePerKg > criteria.maxPricePerKg) {
            return false;
        }
        
        return true;
    });
}

// ======================
// 4. Export for use in HTML
// ======================
window.productsData = products;
window.ingredientsData = ingredients;
window.getProductById = getProductById;
window.getIngredient = getIngredient;
window.getSimilarProducts = getSimilarProducts;
window.filterProducts = filterProducts;
