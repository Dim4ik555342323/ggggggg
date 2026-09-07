// ============================================
// ДАНІ ТОВАРІВ
// ============================================
const productsData = [
    {id: 1, name: "Молоко 'Домашнє', 1 л", price: 45.50, discountPrice: 39.90, desc: "Свіже пастеризоване молоко зі зниженим вмістом жиру.", producer: "Яготинське", country: "Україна", dateInfo: "01.09.2026", img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=500&q=80"},
    {id: 2, name: "Яйця С1 'Сільські', 10 шт.", price: 38.90, discountPrice: null, desc: "Курячі яйця першої категорії.", producer: "Птахофабрика Поділля", country: "Україна", dateInfo: "28.08.2026", img: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=500&q=80"},
    {id: 3, name: "Шоколад 'Темний', 100 г", price: 21.00, discountPrice: null, desc: "Екстра-темний шоколад 72% какао.", producer: "Світоч", country: "Україна", dateInfo: "15.05.2026", img: "https://tse2.mm.bing.net/th/id/OIP._K8zjtTIbuJlCnnd3YwFuQHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"},
    {id: 4, name: "Напій 'Живчик' Лимонний, 0.5 л", price: 16.50, discountPrice: 13.00, desc: "Класичний український лимонад.", producer: "Оболонь", country: "Україна", dateInfo: "10.07.2026", img: "https://th.bing.com/th/id/OIP.JD7moALQkkgniZbshTazoAHaHa?w=177&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 5, name: "Хліб 'Житній', 450 г", price: 21.00, discountPrice: null, desc: "Свіжоспечений житній хліб за традиційним рецептом.", producer: "Хлібний Дар", country: "Україна", dateInfo: "03.09.2026", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80"},
    {id: 6, name: "Банани, кг", price: 65.00, discountPrice: 59.90, desc: "Стиглі солодкі банани.", producer: "Фруктовий Світ", country: "Еквадор", dateInfo: "Свіжий завіз", img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=500&q=80"},
    {id: 7, name: "Сир 'Голландський', 100 г", price: 35.00, discountPrice: null, desc: "Твердий сир 45% жирності.", producer: "Золотоніський сирзавод", country: "Україна", dateInfo: "10.08.2026", img: "https://th.bing.com/th/id/OIP.6sL_5oyvk_wP3jMiQXYs_wHaHa?w=216&h=217&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 8, name: "Вода 'Моршинська', 1.5 л", price: 19.90, discountPrice: 17.50, desc: "Природна столова вода негазована.", producer: "Моршинська", country: "Україна", dateInfo: "01.06.2026", img: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=500&q=80"},
    {id: 9, name: "Печиво 'Вівсяне', 300 г", price: 42.00, discountPrice: null, desc: "Класичне вівсяне печиво з родзинками.", producer: "Ярич", country: "Україна", dateInfo: "20.07.2026", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=500&q=80"},
    {id: 10, name: "Кава 'Галка' Мелена, 100 г", price: 85.00, discountPrice: 69.00, desc: "Натуральна мелена кава середньої обсмажки.", producer: "Галка", country: "Україна", dateInfo: "01.03.2026", img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=500&q=80"},
    {id: 11, name: "Масло Вершкове 82%, 200 г", price: 68.00, discountPrice: null, desc: "Натуральне вершкове масло з високоякісних вершків.", producer: "Яготинське", country: "Україна", dateInfo: "25.08.2026", img: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=500&q=80"},
    {id: 12, name: "Яблука 'Фуджі', кг", price: 29.90, discountPrice: 24.50, desc: "Соковиті червоні яблука з українських садів.", producer: "Сади Поділля", country: "Україна", dateInfo: "2026", img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=500&q=80"},
    {id: 13, name: "Паштет 'Курячий', 150 г", price: 32.50, discountPrice: null, desc: "Ніжний м'ясний паштет з курки.", producer: "Глобино", country: "Україна", dateInfo: "01.02.2026", img: "https://th.bing.com/th/id/OIP.mwej0HX60d0XX7-hp4E6AwHaHa?w=159&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 14, name: "Пельмені 'З яловичиною', 800 г", price: 145.00, discountPrice: 119.00, desc: "Заморожені пельмені з натуральною яловичиною.", producer: "Три Ведмеді", country: "Україна", dateInfo: "18.07.2026", img: "https://th.bing.com/th/id/OIP.OEFCkSyPQl8OxWD8dk-eiQHaHa?w=184&h=184&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 15, name: "Пральний порошок 'Український', 1 кг", price: 65.00, discountPrice: 49.90, desc: "Універсальний порошок для прання білизни.", producer: "Чумак", country: "Україна", dateInfo: "10.01.2026", img: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=500&q=80"},
    {id: 16, name: "Чай 'Луцький' Зелений, 100 г", price: 58.00, discountPrice: null, desc: "Ароматний зелений чай з додаванням м'яти.", producer: "Луцькчай", country: "Україна", dateInfo: "05.04.2026", img: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=500&q=80"},
    {id: 17, name: "Сметана 20%, 350 г", price: 41.00, discountPrice: 36.00, desc: "Густа сметана з гірських ферм.", producer: "Гуцульський Дар", country: "Україна", dateInfo: "02.09.2026", img: "https://th.bing.com/th/id/OIP.ETEWomSnSlqeBH-XuItDjwHaIp?w=146&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 18, name: "Сік 'Черкаський' Яблучний, 1 л", price: 34.00, discountPrice: null, desc: "Натуральний яблучний сік прямого віджиму.", producer: "Оболонь", country: "Україна", dateInfo: "12.06.2026", img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=500&q=80"},
    {id: 19, name: "Рис Довгозернистий, 1 кг", price: 58.00, discountPrice: null, desc: "Шліфований довгий рис високої якості.", producer: "Агро-Трейд", country: "Україна", dateInfo: "15.03.2026", img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80"},
    {id: 20, name: "Гречка Ядриця, 1 кг", price: 42.00, discountPrice: 35.00, desc: "Добірна смажена гречка з українських полів.", producer: "Агро-Трейд", country: "Україна", dateInfo: "20.02.2026", img: "https://th.bing.com/th/id/OIP.WBGBtKFQPmTg92GxBCoeDgHaHa?w=203&h=203&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 21, name: "Цукор білий, 1 кг", price: 32.00, discountPrice: null, desc: "Кристалічний буряковий цукор найвищої якості.", producer: "Хуторок", country: "Україна", dateInfo: "10.01.2026", img: "https://th.bing.com/th/id/OIP.G2-FW9hcxSeM-SliBn5urAHaHa?w=169&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 22, name: "Борошно Пшеничне, 2 кг", price: 46.00, discountPrice: 39.90, desc: "Вищий ґатунок борошна для професійної випічки.", producer: "Хуторок", country: "Україна", dateInfo: "12.05.2026", img: "https://th.bing.com/th/id/OIP.bmeAIFLDhBEdrUeFK_en5AHaHa?w=175&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 23, name: "Олія Соняшникова, 850 мл", price: 62.00, discountPrice: 54.90, desc: "Рафінована дезодорована олія з українського соняшнику.", producer: "Хуторок", country: "Україна", dateInfo: "01.08.2026", img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=500&q=80"},
    {id: 24, name: "Макарони 'Спіральки', 400 г", price: 28.00, discountPrice: null, desc: "З твердих сортів пшениці українського виробництва.", producer: "Таврія Плюс", country: "Україна", dateInfo: "15.04.2026", img: "https://images.unsplash.com/photo-1612966874574-e0a92ad2bc43?auto=format&fit=crop&w=500&q=80"},
    {id: 25, name: "Сардельки 'Шкільні', 1 кг", price: 180.00, discountPrice: 155.00, desc: "Ніжні варені сардельки з яловичини та свинини.", producer: "Глобино", country: "Україна", dateInfo: "28.08.2026", img: "https://th.bing.com/th/id/OIP.oxPkZRjtqN3Ta_tpnPO_3gHaHa?w=186&h=186&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 26, name: "Сосиски 'Молочні', 350 г", price: 75.00, discountPrice: null, desc: "Сосиски вищого сорту з натуральних інгредієнтів.", producer: "Ятрань", country: "Україна", dateInfo: "30.08.2026", img: "https://znaj.ua/crops/214053/620x0/1/0/2022/11/14/TL1jjijxOiOaDcttBDCrdVcMckzaS7w5Z5jQZBmH.png"},
    {id: 27, name: "Кетчуп 'Томатний', 250 г", price: 24.50, discountPrice: 19.90, desc: "Томатний кетчуп без консервантів та ГМО.", producer: "Торчин", country: "Україна", dateInfo: "10.06.2026", img: "https://th.bing.com/th/id/OIP.PqHHtmmy535hQLTgLR61WwHaHa?w=167&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 28, name: "Майонез 'Провансаль', 300 г", price: 31.00, discountPrice: null, desc: "Класичний майонез з високим вмістом яєчного жовтка.", producer: "Щедро", country: "Україна", dateInfo: "05.07.2026", img: "https://th.bing.com/th/id/OIP.Uze5OcSiSNqTVJLh_TlAPAHaHa?w=162&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 29, name: "Гірчиця 'Українська', 130 г", price: 14.00, discountPrice: null, desc: "Гостра традиційна гірчиця з українським характером.", producer: "Верес", country: "Україна", dateInfo: "11.03.2026", img: "https://th.bing.com/th/id/OIP.A1pPr4977T84Nt2dzQk4vQHaHa?w=160&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 30, name: "Огірки Консервовані, 500 г", price: 65.00, discountPrice: 52.00, desc: "Хрусткі херсонські огірочки в маринаді.", producer: "Чумак", country: "Україна", dateInfo: "01.10.2025", img: "https://th.bing.com/th/id/OIP._3svMKeIcqm0xg2ghrkgZgHaHa?w=219&h=219&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 31, name: "Томати у власному соку, 680 г", price: 58.00, discountPrice: null, desc: "Мариновані червоні томати з українських теплиць.", producer: "Чумак", country: "Україна", dateInfo: "15.09.2025", img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=80"},
    {id: 32, name: "Горошок Зелений, 400 г", price: 36.00, discountPrice: 29.50, desc: "Ніжний мозковий горошок з українських полів.", producer: "Чумак", country: "Україна", dateInfo: "20.05.2026", img: "https://th.bing.com/th/id/OIP.ionECFsblCkClfS9t68RpQHaHa?w=169&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 33, name: "Кукурудза Солодка, 340 г", price: 39.00, discountPrice: null, desc: "Солодка цукрова кукурудза з українських плантацій.", producer: "Чумак", country: "Україна", dateInfo: "18.04.2026", img: "https://th.bing.com/th/id/OIP.YipX9Nlrb_kQ5cqUAcgMbQHaHa?w=176&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 34, name: "Шпроти в олії, 160 г", price: 49.00, discountPrice: null, desc: "Балтійські крупні шпроти у власному соку.", producer: "Аквамарин", country: "Латвія", dateInfo: "01.01.2026", img: "https://th.bing.com/th/id/OIP.ySyyVOatjacAHrTFx67XrgHaHa?w=180&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 35, name: "Оливкова олія, 500 мл", price: 180.00, discountPrice: 149.00, desc: "Перший холодний віджим з грецьких оливок.", producer: "Грецький Смак", country: "Греція", dateInfo: "12.03.2026", img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=500&q=80"},
    {id: 36, name: "Чіпси 'Смаколик' Сметана і Зелень, 120 г", price: 45.00, discountPrice: null, desc: "Картопляні чіпси з натуральним смаком зелені.", producer: "Снак-Україна", country: "Україна", dateInfo: "01.07.2026", img: "https://th.bing.com/th/id/OIP.tQnkdoMPwZziJzukiUgC6gHaKo?w=147&h=212&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 37, name: "Сухарики 'Хрустики' з часником, 70 г", price: 15.00, discountPrice: 12.00, desc: "Житні хрусткі сухарики з ароматом часнику.", producer: "Хлібний Дар", country: "Україна", dateInfo: "10.08.2026", img: "https://th.bing.com/th/id/OIP.N-RBSi_ONkbjIMxLJRsyHAHaJ4?w=118&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 38, name: "Арахіс солоний, 100 г", price: 28.00, discountPrice: null, desc: "Смажений солоний арахіс з української обсмажки.", producer: "Горіховий Світ", country: "Україна", dateInfo: "05.06.2026", img: "https://th.bing.com/th/id/OIP.QgD3xPrlV1SPyPPMMTd01wHaHa?w=210&h=210&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 39, name: "Вафлі 'Київські', 80 г", price: 14.50, discountPrice: null, desc: "Класичні шоколадні вафлі за старовинним рецептом.", producer: "Світоч", country: "Україна", dateInfo: "19.07.2026", img: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=500&q=80"},
    {id: 40, name: "Зефір 'Ванільний', 300 г", price: 54.00, discountPrice: 45.00, desc: "Ніжний ванільний зефір з натуральних інгредієнтів.", producer: "Солодка Країна", country: "Україна", dateInfo: "22.08.2026", img: "https://th.bing.com/th/id/OIP.l9FabphvVE-IUogCnqi17QHaJ7?w=157&h=211&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 41, name: "Мармелад 'Фруктовий Сад', 250 г", price: 38.00, discountPrice: null, desc: "Фруктово-ягідний желейний мармелад з натуральним соком.", producer: "Рошен", country: "Україна", dateInfo: "14.05.2026", img: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=500&q=80"},
    {id: 42, name: "Морозиво 'Пломбір', 90 г", price: 29.00, discountPrice: 22.50, desc: "Класичний пломбір у стаканчику з натуральних вершків.", producer: "Хладопром", country: "Україна", dateInfo: "01.08.2026", img: "https://th.bing.com/th/id/OIP.Va1uTfeEDgah-AQqdfbJzwHaHd?w=190&h=191&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 43, name: "Вода мінеральна 'Трускавецька', 0.5 л", price: 25.00, discountPrice: null, desc: "Природна лікувально-столова вода з Трускавця.", producer: "Трускавецька", country: "Україна", dateInfo: "10.01.2026", img: "https://th.bing.com/th/id/OIP.oDNvzJLOJ1iJPWJ2gmliFQHaHa?w=215&h=215&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 44, name: "Енергетик 'Актив', 250 мл", price: 35.00, discountPrice: 28.00, desc: "Тонізуючий безалкогольний напій з вітамінами.", producer: "Оболонь", country: "Україна", dateInfo: "15.06.2026", img: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=500&q=80"},
    {id: 45, name: "Мило 'Лісове', 90 г", price: 18.00, discountPrice: null, desc: "Кремове мило з екстрактом лісових трав.", producer: "Київський миловар", country: "Україна", dateInfo: "01.01.2026", img: "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?auto=format&fit=crop&w=500&q=80"},
    {id: 46, name: "Шампунь 'Травневий', 400 мл", price: 85.00, discountPrice: 69.00, desc: "Відновлюючий шампунь з українськими травами.", producer: "Косметика Сходу", country: "Україна", dateInfo: "10.04.2026", img: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=500&q=80"},
    {id: 47, name: "Паста зубна 'М'ятна', 75 мл", price: 52.00, discountPrice: null, desc: "Захист від карієсу та відбілювання українського виробництва.", producer: "Зубна Фабрика", country: "Україна", dateInfo: "05.03.2026", img: "https://th.bing.com/th/id/OIP.5lzYcswMQb5vcuLPWPLgVAHaHa?w=188&h=188&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 48, name: "Серветки вологі 'Малятко', 72 шт", price: 42.00, discountPrice: 35.00, desc: "Гіпоалергенні серветки з екстрактом ромашки.", producer: "Дитячий Світ", country: "Україна", dateInfo: "12.08.2026", img: "https://th.bing.com/th/id/OIP._pBKfcGIMgYq-210KxAjZQHaHa?w=165&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 49, name: "Паперові рушники, 2 рулони", price: 38.00, discountPrice: null, desc: "Двошарові міцні паперові рушники з української целюлози.", producer: "Паперовий Дім", country: "Україна", dateInfo: "01.01.2026", img: "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&w=500&q=80"},
    {id: 50, name: "Кефір 'Домашній', 1 л", price: 52.00, discountPrice: 44.00, desc: "Натуральний кефір з живими бактеріями.", producer: "Яготинське", country: "Україна", dateInfo: "02.09.2026", img: "https://th.bing.com/th/id/OIP.bhXTa2br6MPfCd_s6BBn0wHaHa?w=206&h=206&c=7&r=0&o=7&pid=1.7&rm=3"}
];

// ============================================
// ЗМІННІ
// ============================================
let cart = [];
let purchaseHistory = [];
let allPurchases = [];
let userData = {
    phone: '',
    address: ''
};
let currentUser = null;
let users = [
    { id: 1, email: 'user@shop.com', password: '123456', name: 'Іван Петренко', phone: '+380 50 123 45 67', role: 'user', registered: '2026-01-01' },
    { id: 2, email: 'admin@shop.com', password: 'admin123', name: 'Адміністратор', phone: '+380 67 987 65 43', role: 'admin', registered: '2026-01-01' }
];
let nextUserId = 3;
let pendingProductId = null;
const ignoredUnits = ["кг", "г", "шт", "шт.", "л", "мл", "упак", "упак."];

// ============================================
// ЗБЕРЕЖЕННЯ ІСТОРІЇ ПОКУПОК
// ============================================

function savePurchaseData() {
    localStorage.setItem(
        'humps_purchases',
        JSON.stringify(allPurchases)
    );
}

function loadPurchaseData() {
    try {
        const saved = JSON.parse(
            localStorage.getItem('humps_purchases') || '[]'
        );

        if (Array.isArray(saved)) {
            allPurchases = saved;
        }

        if (currentUser) {
            purchaseHistory = allPurchases.filter(
                order => order.userId === currentUser.id
            );
        } else {
            purchaseHistory = [];
        }

    } catch (error) {
        console.error('Помилка завантаження історії:', error);

        allPurchases = [];
        purchaseHistory = [];
    }
}

// ============================================
// СИСТЕМА АВТОРИЗАЦІЇ
// ============================================

function switchAuthTab(tab) {
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (tab === 'login') {
        loginTab.style.background = '#6c5ce7';
        loginTab.style.color = 'white';
        registerTab.style.background = 'transparent';
        registerTab.style.color = '#666';
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        registerTab.style.background = '#6c5ce7';
        registerTab.style.color = 'white';
        loginTab.style.background = 'transparent';
        loginTab.style.color = '#666';
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}

function togglePasswordVisibility() {
    const loginPass = document.getElementById('login-password');
    const registerPass = document.getElementById('register-password');
    const registerConfirm = document.getElementById('register-password-confirm');
    const isChecked = document.getElementById('show-password').checked;
    
    if (loginPass) loginPass.type = isChecked ? 'text' : 'password';
    if (registerPass) registerPass.type = isChecked ? 'text' : 'password';
    if (registerConfirm) registerConfirm.type = isChecked ? 'text' : 'password';
}

function handleRegister() {
    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const phone = document.getElementById('register-phone').value.trim();
    const password = document.getElementById('register-password').value.trim();
    const confirm = document.getElementById('register-password-confirm').value.trim();
    
    if (!name || !email || !phone || !password || !confirm) {
        alert('❌ Будь ласка, заповніть всі поля!');
        return;
    }
    if (password.length < 6) {
        alert('❌ Пароль повинен містити мінімум 6 символів!');
        return;
    }
    if (password !== confirm) {
        alert('❌ Паролі не співпадають!');
        return;
    }
    if (users.find(u => u.email === email)) {
        alert('❌ Користувач з таким email вже існує!');
        return;
    }
    
    const newUser = {
        id: nextUserId++,
        name: name,
        email: email,
        phone: phone,
        password: password,
        role: 'user',
        registered: new Date().toLocaleDateString('uk-UA')
    };
    users.push(newUser);
    currentUser = newUser;
    
    alert('✅ Реєстрація успішна! Вітаємо в ХНУПС!');
    
    document.getElementById('register-name').value = '';
    document.getElementById('register-email').value = '';
    document.getElementById('register-phone').value = '';
    document.getElementById('register-password').value = '';
    document.getElementById('register-password-confirm').value = '';
    
    loadPurchaseData();
    purchaseHistory = allPurchases.filter(
        order => order.userId === currentUser.id
    );
    
    enterShop();
}

function handleLogin() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
    
    if (!email || !password) {
        alert('❌ Будь ласка, введіть email та пароль!');
        return;
    }
    
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        alert('❌ Невірний email або пароль! Спробуйте ще раз.');
        return;
    }
    
    currentUser = user;
    
    loadPurchaseData();
    purchaseHistory = allPurchases.filter(
        order => order.userId === currentUser.id
    );
    
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
    
    enterShop();
}

function enterShop() {
    document.getElementById('login-screen').classList.remove('active');
    showHomeScreen();
    
    const roleText = currentUser.role === 'admin' ? 'Адміністратор' : 'Користувач';
    showWelcomeToast(`👋 Вітаємо, ${currentUser.name}! (${roleText})`);
    
    updateUIForRole();
    
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) logoutBtn.style.display = 'block';
}

function updateUIForRole() {
    let adminNav = document.querySelector('.admin-nav');
    const isAdmin = !!(currentUser && currentUser.role === 'admin');

    document.querySelectorAll('.nav-item').forEach(item => {
        const label = item.innerText || '';
        const onclick = item.getAttribute('onclick') || '';

        if (
            label.includes('Кошик') ||
            onclick.includes('showCartScreen')
        ) {
            item.style.display = isAdmin ? 'none' : 'flex';
        }
    });

    const cartBadge = document.getElementById('cart-badge');

    if (cartBadge) {
        cartBadge.style.display = isAdmin ? 'none' : '';
    }

    if (isAdmin) {
        if (!adminNav) {
            adminNav = document.createElement('button');
            adminNav.className = 'nav-item admin-nav';
            adminNav.innerHTML = `
                <span>⚙️</span>
                <small>Адмін</small>
            `;

            adminNav.onclick = showAdminPanel;

            const bottomNav = document.querySelector('.bottom-nav');

            if (bottomNav) {
                bottomNav.appendChild(adminNav);
            }
        }

        adminNav.style.display = 'flex';

    } else if (adminNav) {
        adminNav.remove();
    }
}

function logout() {
    if (confirm('Ви впевнені, що хочете вийти?')) {
        currentUser = null;
        
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) logoutBtn.style.display = 'none';
        
        const adminNav = document.querySelector('.admin-nav');
        if (adminNav) adminNav.remove();
        
        hideAllScreens();
        document.getElementById('login-screen').classList.add('active');
        document.getElementById('app-title').innerText = 'Вхід';
        
        document.getElementById('login-email').value = '';
        document.getElementById('login-password').value = '';
        
        showWelcomeToast('👋 Ви вийшли з системи');
    }
}

// ============================================
// АДМІН ПАНЕЛЬ
// ============================================

function showAdminPanel() {
    if (!currentUser || currentUser.role !== 'admin') {
        alert('❌ Доступ заборонено! Тільки для адміністратора.');
        return;
    }
    
    hideAllScreens();
    document.getElementById('home-screen').classList.add('active');
    document.getElementById('app-title').innerText = '👑 Адмін панель';
    
    document.getElementById('login-screen').classList.remove('active');
    
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) logoutBtn.style.display = 'block';
    
    const allOrders = allPurchases;
    const grid = document.getElementById('product-grid');
    
    grid.innerHTML = `
        <div style="grid-column: 1/-1;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-bottom: 20px;">
                <div style="background: rgba(255,255,255,0.95); padding: 15px; border-radius: 12px; text-align: center; box-shadow: 0 2px 10px rgba(0,0,0,0.04);">
                    <div style="font-size: 28px; font-weight: 700; color: #6c5ce7;">${productsData.length}</div>
                    <div style="color: #666; font-size: 13px;">Всього товарів</div>
                </div>
                <div style="background: rgba(255,255,255,0.95); padding: 15px; border-radius: 12px; text-align: center; box-shadow: 0 2px 10px rgba(0,0,0,0.04);">
                    <div style="font-size: 28px; font-weight: 700; color: #00b894;">${users.length}</div>
                    <div style="color: #666; font-size: 13px;">Користувачів</div>
                </div>
                <div style="background: rgba(255,255,255,0.95); padding: 15px; border-radius: 12px; text-align: center; box-shadow: 0 2px 10px rgba(0,0,0,0.04);">
                    <div style="font-size: 28px; font-weight: 700; color: #fd79a8;">${allOrders.length}</div>
                    <div style="color: #666; font-size: 13px;">Всього замовлень</div>
                </div>
                <div style="background: rgba(255,255,255,0.95); padding: 15px; border-radius: 12px; text-align: center; box-shadow: 0 2px 10px rgba(0,0,0,0.04);">
                    <div style="font-size: 28px; font-weight: 700; color: #fdcb6e;">${allOrders.reduce((sum, o) => sum + o.total, 0).toFixed(0)} ₴</div>
                    <div style="color: #666; font-size: 13px;">Загальна сума</div>
                </div>
            </div>
            
            <div style="background: rgba(255,255,255,0.95); padding: 20px; border-radius: 16px; margin-bottom: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.04);">
                <h3 style="margin-bottom: 15px;">📦 Управління товарами</h3>
                <button onclick="showAddProductForm()" style="padding: 10px 20px; background: linear-gradient(135deg, #00b894, #00cec9); color: white; border: none; border-radius: 10px; font-weight: 600; cursor: pointer; margin-bottom: 15px;">➕ Додати товар</button>
                <div id="admin-product-list" style="max-height: 400px; overflow-y: auto;">
                    ${productsData.map(p => `
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #eee; gap: 10px;">
                            <div style="flex: 1; min-width: 0;">
                                <strong>${p.name}</strong>
                                <span style="color: #666; font-size: 13px;">(${p.price.toFixed(2)} ₴)</span>
                                <span style="font-size: 12px; color: #888;">${p.producer}</span>
                            </div>
                            <div style="display: flex; gap: 5px; flex-shrink: 0;">
                                <button onclick="editProduct(${p.id})" style="padding: 4px 12px; background: #fdcb6e; border: none; border-radius: 6px; cursor: pointer;">✏️</button>
                                <button onclick="deleteProduct(${p.id})" style="padding: 4px 12px; background: #fd79a8; border: none; border-radius: 6px; color: white; cursor: pointer;">🗑️</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div style="background: rgba(255,255,255,0.95); padding: 20px; border-radius: 16px; box-shadow: 0 2px 10px rgba(0,0,0,0.04);">
                <h3 style="margin-bottom: 15px;">📋 Всі покупки користувачів</h3>
                ${allOrders.length === 0 ? '<p style="color: #888; text-align: center;">Немає покупок</p>' : 
                allOrders.map((order, index) => `
                    <div style="border: 1px solid #eee; border-radius: 12px; padding: 15px; margin-bottom: 10px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 5px;">
                            <div>
                                <strong>#${order.id}</strong>
                                <span style="color: #666; font-size: 13px;">${order.date}</span>
                            </div>
                            <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
                                <span style="font-weight: 700; color: #6c5ce7;">${order.total.toFixed(2)} ₴</span>
                                <span style="padding: 2px 10px; border-radius: 20px; background: #74b9ff; color: white; font-size: 12px;">${order.paymentMethod || 'Готівка'}</span>
                                <span style="padding: 2px 10px; border-radius: 20px; background: ${order.status === 'Скасовано' ? '#fd79a8' : '#00b894'}; color: white; font-size: 12px;">${order.status || 'Виконано'}</span>
                                <button onclick="cancelOrder(${index})" style="padding: 4px 12px; background: #fd79a8; border: none; border-radius: 6px; color: white; cursor: pointer; font-size: 12px;">Скасувати</button>
                            </div>
                        </div>
                        <div style="font-size: 13px; color: #888; margin-top: 5px;">
                            <span>👤 ${order.userName || 'Невідомий'}</span>
                            <span style="margin-left: 10px;">📞 ${order.phone || 'Немає'}</span>
                            <span style="margin-left: 10px;">📦 ${order.items.length} товарів</span>
                        </div>
                        <div style="font-size: 12px; color: #999; margin-top: 3px;">
                            ${order.items.map(item => `${item.name} x${item.quantity}`).join(', ')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function showAddProductForm() {
    const name = prompt('Введіть назву товару:');
    if (!name) return;
    const price = parseFloat(prompt('Введіть ціну (грн):'));
    if (isNaN(price) || price <= 0) return alert('❌ Невірна ціна!');
    const discountPrice = prompt('Введіть ціну зі знижкою (або залиште порожнім):');
    const discount = discountPrice ? parseFloat(discountPrice) : null;
    if (discount && isNaN(discount)) return alert('❌ Невірна ціна зі знижкою!');
    const desc = prompt('Введіть опис товару:') || 'Опис відсутній';
    const producer = prompt('Введіть виробника:') || 'Невідомий';
    const country = prompt('Введіть країну виробництва:') || 'Україна';
    const dateInfo = prompt('Введіть дату виготовлення (або термін):') || new Date().toLocaleDateString('uk-UA');
    
    const newProduct = {
        id: Math.max(...productsData.map(p => p.id)) + 1,
        name: name,
        price: price,
        discountPrice: discount,
        desc: desc,
        producer: producer,
        country: country,
        dateInfo: dateInfo,
        img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80'
    };
    productsData.push(newProduct);
    alert('✅ Товар додано!');
    showAdminPanel();
}

function editProduct(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return alert('❌ Товар не знайдено!');
    const newName = prompt('Назва товару:', product.name);
    if (newName !== null) product.name = newName;
    const newPrice = prompt('Ціна:', product.price);
    if (newPrice !== null && !isNaN(newPrice) && newPrice > 0) product.price = parseFloat(newPrice);
    const newDiscount = prompt('Ціна зі знижкою (або порожньо):', product.discountPrice || '');
    if (newDiscount !== null) {
        product.discountPrice = newDiscount ? parseFloat(newDiscount) : null;
        if (product.discountPrice && isNaN(product.discountPrice)) return alert('❌ Невірна ціна зі знижкою!');
    }
    const newDesc = prompt('Опис:', product.desc);
    if (newDesc !== null) product.desc = newDesc;
    const newProducer = prompt('Виробник:', product.producer);
    if (newProducer !== null) product.producer = newProducer;
    const newDate = prompt('Дата виготовлення:', product.dateInfo);
    if (newDate !== null) product.dateInfo = newDate;
    alert('✅ Товар оновлено!');
    showAdminPanel();
}

function deleteProduct(productId) {
    if (!confirm('Ви впевнені, що хочете видалити цей товар?')) return;
    const index = productsData.findIndex(p => p.id === productId);
    if (index !== -1) {
        productsData.splice(index, 1);
        alert('✅ Товар видалено!');
        showAdminPanel();
    }
}

function cancelOrder(orderIndex) {
    if (!confirm('Ви впевнені, що хочете скасувати це замовлення?')) return;
    if (allPurchases[orderIndex]) {
        allPurchases[orderIndex].status = 'Скасовано';
        const userOrder = purchaseHistory.find(o => o.id === allPurchases[orderIndex].id);
        if (userOrder) userOrder.status = 'Скасовано';
        savePurchaseData();
        alert('✅ Замовлення скасовано!');
        showAdminPanel();
    }
}

// ============================================
// ОСНОВНІ ФУНКЦІЇ МАГАЗИНУ
// ============================================

function hideAllScreens() {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
}

function showHomeScreen() {
    if (!currentUser) {
        hideAllScreens();
        document.getElementById('login-screen').classList.add('active');
        document.getElementById('app-title').innerText = 'Вхід';
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) logoutBtn.style.display = 'none';
        return;
    }
    
    hideAllScreens();
    document.getElementById('home-screen').classList.add('active');
    document.getElementById('app-title').innerText = '🛒 ХНУПС';
    
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    if (navItems[0]) navItems[0].classList.add('active');
    
    renderProductGrid(productsData);
    
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) logoutBtn.style.display = 'block';
    
    document.getElementById('login-screen').classList.remove('active');
}

function calculateDiscountPercent(originalPrice, discountPrice) {
    if (!discountPrice || discountPrice >= originalPrice) return 0;
    return Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = function(e) {
        if (e.target.tagName !== 'BUTTON') {
            showProductDetails(product.id);
        }
    };

    let discountBadgeHTML = "";
    let priceHTML = `<div class="price">${product.price.toFixed(2)} UAH</div>`;

    if (product.discountPrice) {
        const discountPercent = calculateDiscountPercent(product.price, product.discountPrice);
        discountBadgeHTML = `<div class="discount-label">-${discountPercent}%</div>`;
        priceHTML = `
            <div class="price-block">
                <span class="old-price">${product.price.toFixed(2)} UAH</span>
                <span class="price" style="color: #ff3b30;">${product.discountPrice.toFixed(2)} UAH</span>
            </div>
        `;
    }

    card.innerHTML = `
        ${discountBadgeHTML}
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        ${priceHTML}
        <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Купити</button>
    `;
    return card;
}

function renderProductGrid(dataToRender = productsData) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = "";
    dataToRender.forEach(product => {
        grid.appendChild(createProductCard(product));
    });
}

function renderPromoBanner() {
    const homeScreen = document.getElementById('home-screen');
    if (!homeScreen) return;
    const existingBanner = document.getElementById('promo-banner');
    if (existingBanner) existingBanner.remove();
    const banner = document.createElement('div');
    banner.id = 'promo-banner';
    banner.innerHTML = `
        <h3 style="margin: 0 0 4px 0; font-size: 15px;">🔥 ЗНИЖКИ ТА АКЦІЇ</h3>
        <p style="margin: 0; font-size: 12px;">Показати товари зі знижкою</p>
    `;
    banner.onclick = function() {
        const discounted = productsData.filter(p => p.discountPrice !== null);
        renderProductGrid(discounted);
    };
    homeScreen.insertBefore(banner, homeScreen.firstChild);
}

function showProductDetails(productId) {
    hideAllScreens();
    document.getElementById('product-details-screen').classList.add('active');
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    document.getElementById('app-title').innerText = "Опис";
    document.getElementById('details-img').src = product.img;
    document.getElementById('details-title').innerText = product.name;
    document.getElementById('details-desc').innerHTML = `
        <p style="margin-top: 10px;"><strong>Опис:</strong> ${product.desc}</p>
        <p style="margin-top: 5px;"><strong>Виробник:</strong> ${product.producer}</p>
        <p style="margin-top: 5px;"><strong>Країна:</strong> ${product.country}</p>
        <p style="margin-top: 5px;"><strong>Термін придатності:</strong> ${product.dateInfo}</p>
    `;
    const oldPriceSpan = document.getElementById('details-old-price');
    const priceSpan = document.getElementById('details-price');
    if (product.discountPrice) {
        const discountPercent = calculateDiscountPercent(product.price, product.discountPrice);
        oldPriceSpan.innerText = `${product.price.toFixed(2)} UAH (-${discountPercent}%)`;
        priceSpan.innerText = product.discountPrice.toFixed(2) + " UAH";
        priceSpan.style.color = "#ff3b30";
    } else {
        oldPriceSpan.innerText = "";
        priceSpan.innerText = product.price.toFixed(2) + " UAH";
        priceSpan.style.color = "#000";
    }
    document.getElementById('details-add-to-cart').onclick = function() {
        addToCart(productId);
    };
}

function promptUserData(productId) {
    pendingProductId = productId;
    let phone = prompt("Будь ласка, введіть ваш номер телефону для доставки:", userData.phone || "+380");
    if (!phone || phone.trim().length < 10) {
        alert("Замовлення неможливе без вказання правильного телефону!");
        return false;
    }
    let address = prompt("Введіть адресу доставки (місто, вулиця, будинок):", userData.address || "");
    if (!address || address.trim().length < 3) {
        alert("Замовлення неможливе без вказання адреси!");
        return false;
    }
    userData.phone = phone.trim();
    userData.address = address.trim();
    return true;
}

function addToCart(productId) {
    if (!currentUser) {
        alert('Будь ласка, увійдіть у систему!');
        return;
    }
    if (currentUser.role === 'admin') {
        alert('❌ Адміністратор не може додавати товари в кошик!');
        return;
    }
    if (!userData.phone || !userData.address) {
        const success = promptUserData(productId);
        if (!success) return;
    }
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity++;
    } else {
        cart.push({...product, quantity: 1});
    }
    updateCartBadge();
}

function increaseQty(productId) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity++;
        updateCartBadge();
        renderCartList();
    }
}

function decreaseQty(productId) {
    const itemIndex = cart.findIndex(i => i.id === productId);
    if (itemIndex !== -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity--;
        } else {
            cart.splice(itemIndex, 1);
        }
        updateCartBadge();
        renderCartList();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    updateCartBadge();
    renderCartList();
}

function updateCartBadge() {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('cart-badge');
    if (badge) {
        badge.innerText = total;
        badge.style.display = total > 0 ? 'block' : 'none';
    }
}

function showCartScreen() {
    if (!currentUser) {
        alert('Будь ласка, увійдіть у систему, щоб переглянути кошик!');
        return;
    }
    if (currentUser.role === 'admin') {
        alert('❌ Адміністратор не має доступу до кошика!');
        return;
    }
    hideAllScreens();
    document.getElementById('cart-screen').classList.add('active');
    document.getElementById('app-title').innerText = "🛒 Кошик";
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    if (navItems[2]) navItems[2].classList.add('active');
    renderCartList();
}

function renderCartList() {
    const list = document.getElementById('cart-list');
    const totalSumSpan = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const paymentBlock = document.getElementById('payment-block');

    if (!list) return;
    list.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        list.innerHTML = "<p style='text-align: center; color: #888; margin-top: 30px;'>Ваш кошик порожній.</p>";
        if (totalSumSpan) totalSumSpan.innerText = "Всього: 0.00 UAH";
        if (paymentBlock) paymentBlock.style.display = "none";
        if (checkoutBtn) checkoutBtn.style.display = "none";
        return;
    }

    if (paymentBlock) paymentBlock.style.display = "block";
    if (checkoutBtn) {
        checkoutBtn.style.display = "block";
        checkoutBtn.onclick = processCheckout;
    }

    const userInfoDiv = document.createElement('div');
    userInfoDiv.style.cssText = "background: #eef6ff; border: 1px solid #b6d4fe; padding: 10px; border-radius: 8px; margin-bottom: 15px; font-size: 13px;";
    userInfoDiv.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <strong>📍 Дані для доставки:</strong>
            <button onclick="promptUserData()" style="background: none; border: none; color: #007aff; cursor: pointer; text-decoration: underline; font-size: 12px;">Змінити</button>
        </div>
        <div>📞 <strong>Тел:</strong> ${userData.phone || 'Не вказано'}</div>
        <div>🏠 <strong>Адреса:</strong> ${userData.address || 'Не вказано'}</div>
    `;
    list.appendChild(userInfoDiv);

    cart.forEach(item => {
        const finalPrice = item.discountPrice ? item.discountPrice : item.price;
        const itemTotal = finalPrice * item.quantity;
        total += itemTotal;

        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-info">
                <strong>${item.name}</strong><br>
                <small style="color: #666;">${finalPrice.toFixed(2)} UAH = <strong>${itemTotal.toFixed(2)} UAH</strong></small>
            </div>
            <div class="qty-controls">
                <button class="qty-btn" onclick="decreaseQty(${item.id})">-</button>
                <span style="font-weight: bold; min-width: 18px; text-align: center;">${item.quantity}</span>
                <button class="qty-btn" onclick="increaseQty(${item.id})">+</button>
                <button class="remove-btn" onclick="removeFromCart(${item.id})" title="Видалити">❌</button>
            </div>
        `;
        list.appendChild(div);
    });

    if (totalSumSpan) totalSumSpan.innerText = `Всього: ${total.toFixed(2)} UAH`;
    togglePaymentFields();
}

function togglePaymentFields() {
    const methodSelect = document.getElementById('payment-method');
    if (!methodSelect) return;
    const method = methodSelect.value;
    document.getElementById('card-fields').style.display = (method === 'card') ? 'block' : 'none';
    document.getElementById('apple-google-fields').style.display = (method === 'apple_google') ? 'block' : 'none';
    document.getElementById('crypto-fields').style.display = (method === 'crypto') ? 'block' : 'none';
    document.getElementById('cash-fields').style.display = (method === 'cash') ? 'block' : 'none';
}

function clearCardFields() {
    const cardNumber = document.getElementById('card-number');
    const cardDate = document.getElementById('card-date');
    const cardCvc = document.getElementById('card-cvc');
    const cryptoWallet = document.getElementById('crypto-wallet');
    const cryptoTxHash = document.getElementById('crypto-tx-hash');
    if (cardNumber) cardNumber.value = '';
    if (cardDate) cardDate.value = '';
    if (cardCvc) cardCvc.value = '';
    if (cryptoWallet) cryptoWallet.value = '';
    if (cryptoTxHash) cryptoTxHash.value = '';
}

function toggleCVCVisibility() {
    const cvcInput = document.getElementById('card-cvc');
    const button = document.querySelector('#card-fields button');
    if (cvcInput.type === 'password') {
        cvcInput.type = 'text';
        button.textContent = '🙈';
    } else {
        cvcInput.type = 'password';
        button.textContent = '👁️';
    }
}

function processCheckout() {
    if (!currentUser) {
        alert('Будь ласка, увійдіть у систему!');
        return;
    }
    if (currentUser.role === 'admin') {
        alert('❌ Адміністратор не може оформлювати замовлення!');
        return;
    }
    if (!userData.phone || !userData.address) {
        alert("Будь ласка, вкажіть ваш номер телефону та адресу!");
        promptUserData();
        return;
    }
    if (cart.length === 0) {
        alert('❌ Ваш кошик порожній!');
        return;
    }

    const methodSelect = document.getElementById('payment-method');
    const paymentMethod = methodSelect ? methodSelect.value : 'cash';
    let paymentDetailsText = "Готівка при отриманні";

    if (paymentMethod === 'crypto') {
        const networkSelect = document.getElementById('crypto-network');
        const walletInput = document.getElementById('crypto-wallet');
        const txHashInput = document.getElementById('crypto-tx-hash');
        const walletValue = walletInput ? walletInput.value.trim() : '';
        const txHashValue = txHashInput ? txHashInput.value.trim() : '';
        const networkValue = networkSelect ? networkSelect.value : 'USDT';
        if (!walletValue) return alert("Будь ласка, введіть адресу гаманця!");
        if (!txHashValue) return alert("Будь ласка, введіть хеш транзакції!");
        if (walletValue.length > 20) return alert("Адреса гаманця не більше 20 символів!");
        if (txHashValue.length > 20) return alert("Хеш транзакції не більше 20 символів!");
        paymentDetailsText = `Криптовалюта (${networkValue}) | Гаманець: ${walletValue} | TxHash: ${txHashValue}`;
    } else if (paymentMethod === 'card') {
        paymentDetailsText = "Оплата карткою онлайн";
    } else if (paymentMethod === 'apple_google') {
        paymentDetailsText = "Apple Pay / Google Pay";
    }

    const totalSum = cart.reduce((sum, item) => sum + (item.discountPrice || item.price) * item.quantity, 0);
    const vatRate = 0.20;
    const vatAmount = totalSum - (totalSum / (1 + vatRate));

    const receipt = {
        id: 'CHK-' + Date.now(),
        date: new Date().toLocaleString('uk-UA'),
        userId: currentUser.id,
        userEmail: currentUser.email,
        userName: currentUser.name,
        phone: userData.phone,
        address: userData.address,
        paymentMethod: paymentDetailsText,
        items: [...cart],
        total: totalSum,
        vat: vatAmount,
        status: 'Виконано'
    };

    purchaseHistory.unshift(receipt);
    allPurchases.unshift(receipt);
    savePurchaseData();

    showPurchaseToast(`
        Користувач <strong>${currentUser.name}</strong>
        (${currentUser.phone || userData.phone})
        щойно купив:
        <br>
        <em>${cart.map(item => item.name).join(', ')}</em>
        на суму ${totalSum.toFixed(2)} ₴
    `);

    alert(
        `Дякуємо за замовлення!\nЧек №${receipt.id} збережено в історії покупок.`
    );

    clearCardFields();
    cart = [];
    updateCartBadge();
    renderCartList();
}

function showHistoryScreen() {
    if (!currentUser) {
        alert('Будь ласка, увійдіть у систему, щоб переглянути історію покупок!');
        return;
    }
    
    const userOrders = purchaseHistory.filter(o => o.userId === currentUser.id);
    
    hideAllScreens();
    document.getElementById('history-screen').classList.add('active');
    document.getElementById('app-title').innerText = '📜 Мої покупки';
    
    const container = document.getElementById('history-container');
    container.innerHTML = '';
    
    if (userOrders.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#888; margin-top:30px;">Ви ще не робили покупок.</p>';
        return;
    }
    
    userOrders.forEach(receipt => {
        const receiptDiv = document.createElement('div');
        receiptDiv.style.cssText = `background: #fff; border: 1px dashed #777; padding: 15px; margin-bottom: 20px; font-family: 'Courier New', Courier, monospace; box-shadow: 0 2px 8px rgba(0,0,0,0.1); border-radius: 4px;`;
        let itemsHTML = "";
        receipt.items.forEach(item => {
            const price = item.discountPrice || item.price;
            itemsHTML += `<div style="display:flex; justify-content: space-between; margin-bottom: 3px;"><span>${item.name} x${item.quantity}</span><span style="margin-left: auto;">${(price * item.quantity).toFixed(2)} UAH</span></div>`;
        });
        receiptDiv.innerHTML = `
            <div style="text-align:center; font-weight:bold; font-size:16px;">=== ХНУПС ===</div>
            <div style="text-align:center; font-size:12px; margin-bottom:8px;">ЧЕК № ${receipt.id}</div>
            <div style="font-size:11px; color:#555;">Дата: ${receipt.date}</div>
            <div style="font-size:11px; color:#555;">Оплата: ${receipt.paymentMethod || 'Готівка'}</div>
            <div style="font-size:11px; color:#555; margin-bottom:4px;">Статус: ${receipt.status || 'Виконано'}</div>
            <hr style="border:none; border-top:1px dashed #aaa; margin:8px 0;">
            ${itemsHTML}
            <hr style="border:none; border-top:1px dashed #aaa; margin:8px 0;">
            <div style="display:flex; justify-content: space-between; font-weight:bold; font-size:14px; margin-top:4px;">
                <span>СУМА до сплати:</span>
                <span style="margin-left: auto;">${receipt.total.toFixed(2)} UAH</span>
            </div>
            <div style="text-align:center; font-size:11px; margin-top:10px;">Дякуємо за покупку!</div>
        `;
        container.appendChild(receiptDiv);
    });
}

function showQrScreen() {
    if (!currentUser) {
        alert('Будь ласка, увійдіть у систему, щоб переглянути QR-код!');
        return;
    }
    hideAllScreens();
    document.getElementById('qr-screen').classList.add('active');
    document.getElementById('app-title').innerText = "📱 QR-код";
}

function showSearchScreen() {
    hideAllScreens();
    document.getElementById('search-screen').classList.add('active');
    document.getElementById('app-title').innerText = "🔍 Пошук";
    const searchInput = document.getElementById('search-page-input');
    if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
    }
    renderSearchResults([]);
}

function renderSearchResults(dataToRender) {
    const grid = document.getElementById('search-results-grid');
    if (!grid) return;
    grid.innerHTML = "";
    if (dataToRender.length === 0) {
        grid.innerHTML = "<p style='grid-column: 1/-1; text-align: center; color: #888; margin-top: 30px;'>Товарів не знайдено.</p>";
        return;
    }
    dataToRender.forEach(product => {
        grid.appendChild(createProductCard(product));
    });
}

function setupSearchUI() {
    const searchBtn = document.getElementById('search-btn');
    const searchBackBtn = document.getElementById('search-back-btn');
    const searchPageInput = document.getElementById('search-page-input');

    if (searchBtn) searchBtn.onclick = showSearchScreen;
    if (searchBackBtn) searchBackBtn.onclick = showHomeScreen;

    if (searchPageInput) {
        searchPageInput.oninput = function() {
            const query = searchPageInput.value.trim().toLowerCase();
            if (query === '') {
                renderSearchResults([]);
                return;
            }
            const filtered = productsData.filter(product => {
                const cleanedName = product.name.replace(/['"«»,.()/]/g, ' ').toLowerCase();
                const words = cleanedName.split(/\s+/).filter(w => w.length > 0 && !ignoredUnits.includes(w));
                return words.some(word => word.startsWith(query));
            });
            renderSearchResults(filtered);
        };
    }
}

function showPurchaseToast(message) {
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.style.cssText = `
            position: fixed;
            bottom: 80px;
            right: 20px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        document.body.appendChild(toastContainer);
    }
    const toast = document.createElement('div');
    toast.style.cssText = `
        background: #333;
        color: white;
        padding: 12px 18px;
        border-radius: 8px;
        font-size: 13px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        opacity: 0;
        transition: opacity 0.4s ease;
        max-width: 350px;
    `;
    toast.innerHTML = `🛍️ <strong>Нова покупка!</strong><br>${message}`;
    toastContainer.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '1'; }, 10);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 400);
    }, 6000);
}

function showWelcomeToast(message) {
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.style.cssText = `
            position: fixed;
            bottom: 80px;
            right: 20px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        document.body.appendChild(toastContainer);
    }
    const toast = document.createElement('div');
    toast.style.cssText = `
        background: linear-gradient(135deg, #6c5ce7, #a29bfe);
        color: white;
        padding: 12px 18px;
        border-radius: 12px;
        font-size: 14px;
        box-shadow: 0 4px 20px rgba(108,92,231,0.3);
        opacity: 0;
        transition: opacity 0.4s ease;
        max-width: 320px;
    `;
    toast.innerHTML = message;
    toastContainer.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '1'; }, 10);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// ============================================
// ДЕМОНСТРАЦІЙНІ ПОВІДОМЛЕННЯ
// ============================================

function startLivePurchaseNotifications() {
    const phones = [
        "097***4215",
        "050***1189",
        "063***9942",
        "098***3301",
        "067***7720"
    ];

    const names = [
        "Олександр",
        "Марія",
        "Дмитро",
        "Анна",
        "Володимир",
        "Олена",
        "Сергій",
        "Катерина"
    ];

    setInterval(() => {
        const randomProduct =
            productsData[
                Math.floor(Math.random() * productsData.length)
            ];

        const randomPhone =
            phones[
                Math.floor(Math.random() * phones.length)
            ];

        const randomName =
            names[
                Math.floor(Math.random() * names.length)
            ];

        showPurchaseToast(`
            Користувач <strong>${randomName}</strong>
            (${randomPhone})
            щойно купив:
            <br>
            <em>${randomProduct.name}</em>
        `);

    }, 20000);
}

// ============================================
// ЗАПУСК ДОДАТКУ
// ============================================

window.onload = function() {
    loadPurchaseData();

    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    document.getElementById('login-screen').classList.add('active');
    document.getElementById('app-title').innerText = 'Вхід';

    const logoutBtn = document.getElementById('logout-btn');

    if (logoutBtn) {
        logoutBtn.style.display = 'none';
    }

    setupSearchUI();
    renderPromoBanner();
    updateCartBadge();

    startLivePurchaseNotifications();
};
