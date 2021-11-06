import { ReactComponent as Sextagon } from '../../assets/icons/sextagon.svg';
import { ReactComponent as Hexagon } from '../../assets/icons/hexagon.svg';
import { ReactComponent as Circle } from '../../assets/icons/circle.svg';
import { ReactComponent as Pentagon } from '../../assets/icons/pentagon.svg';


export const stageOptions = ['Идея', 'Посевная', 'Ранний рост', 'Расширение'];
export const stageRows = [
    ['Консультационная поддержка по развитию бизнеса', 'Обучение (образовательные программы)', 'Тематические мероприятия (нетворкинг)', 'Поддержка по юридическим / бухгалтерским вопросам'],
    ['Найти помещение в аренду', 'Протестировать продукт', 'Выпустить мелкую серию продукта', 'Найти финансирование'],
    ['Маркетинг и продвижение', 'Найти заказчиков / партнеров', 'Доработать прототип', 'Доработать ценностное предложение'],
    ['Масштабировать бизнес ', 'Выйти на международный рынок']
];

export const marketOptions = [
    'Advertising & Marketing', 'AgroTech', 'Business Software', 'CleanTech', 'Consumer goods', 'Cybersecurity',
    'E-commerce', 'EdTech', 'Entertainment', 'FashionTech', 'FinTech', 'FoodTech', 'Gaming', 'Healthcare', 'HRTech',
    'Industrial Tech', 'InsuranceTech', 'LegalTech', 'PropTech', 'RetailTech', 'SafetyTech', 'SpaceTech', 'SportTech',
    'Telecom,Transport & Logistics', 'Travel', 'Мedia & Communication'
];

export const technologies = ['Блокчейн', ' Аддитивные технологии', ' Новые материалы', ' BigData',
    ' Искусственный интеллект и машинное обучение', ' Компьютерное зрение', 'Робототехника', ' AR/VR',
    ' Интернет вещей', ' Нейротехнологии', ' Новые и портативные источники энергии', 'Зеленые технологии',
    ' Нанотехнологии', ' Биотехнологии', ' Биометрия', ' 3D-моделирование', ' 5G', ' Беспилотники'];

export const engRows = [
    ['Рынок и Технологии', 'Обучение (образовательные программы)', 'Тематические мероприятия (нетворкинг)'],
    ['Найти помещение в аренду', 'Протестировать продукт', 'Выпустить мелкую серию продукта'],
    ['Маркетинг и продвижение', 'Найти заказчиков / партнеров', 'Доработать прототип'],
    ['Масштабировать бизнес ', 'Выйти на международный рынок']
];


export const investorTypes = [
    { label: 'Частный фонд', icon: <Sextagon fill='#848FA6' />, selectedIcon: <Sextagon fill='#FF1F55' /> },
    { label: 'Корпоративный', icon: <Pentagon fill='#848FA6' />, selectedIcon: <Pentagon fill='#FF1F55' /> },
    { label: 'Государственный', icon: <Hexagon fill='#848FA6' />, selectedIcon: <Hexagon fill='#FF1F55' /> },
    { label: 'Акселератор', icon: <Circle stroke='#848FA6' />, selectedIcon: <Circle stroke='#FF1F55' /> },
]

export const moneyOptions = [
    {
        value: 1,
        label: '$10k',
    },
    {
        value: 2,
        label: '$100k',
    },
    {
        value: 3,
        label: '$500k',
    },
    {
        value: 4,
        label: '$1M',
    },
    {
        value: 5,
        label: '$5M',
    },
];

export const recommendation_types = [
    'Венчурные фонды', 'Акселераторы', 'Бизнес-инкубаторы',
    'Инжиниринговые центры', 'Офисы и коворкинги', 'Сервисы развития', 'Площадки пилотного тестирования'
];

export const vcs = {
    "0": {
        "index": 119,
        "Rank": 125.0,
        "ID": 2390,
        "Название объекта": "ИК Криптонит",
        "Тип объекта инновационной инфраструктуры": "Венчурные фонды",
        "Рынок": "AgroTech|Cybersecurity|EdTech|PropTech|Telecom|IndustrialTech|FinTech",
        "Стадия стартапа": "Ранний рост|Расширение",
        "Сервисы": "Инвестиции|Тестирование продукта |Консультационная поддержка по развитию бизнеса|Маркетинг и продвижение |Доступ к потенциальным заказчикам",
        "Технологии": "Big Data|Интернет вещей|Искусственный интеллект и машинное обучение|Робототехника",
        "Форма собственности": "Корпоративный",
        "Тип по источнику возник-ния": "Российский",
        "Раунд инвестирования": "Раунд А|Раунд В",
        "ИНН организации": 9701115158.0,
        "Организация полное название": "АКЦИОНЕРНОЕ ОБЩЕСТВО ИНВЕСТИЦИОННАЯ КОМПАНИЯ \"КРИПТОНИТ\"",
        "Организация краткое название": "АО ИК \"КРИПТОНИТ\"",
        "Организация комм. название": null,
        "Описание": "Инвестиционная компания является частью \"ИКС Холдинг\" — многопрофильной ИТ-структуры. Поддерживает компании с MVP и первыми продажами, предоставляет возможность организовать пилот, получить инвестиции и новых клиентов среди партнеров группы.\n",
        "График работы": null,
        "Год основания": 2018,
        "Дата закрытия": null,
        "Сайт": "https:\/\/kryptonite.ru\/investments",
        "Адрес": "г Москва, Шлюзовая наб, д 4",
        "Ближайшая станция метро": "Таганская",
        "Округ": "Центральный",
        "Район": "Замоскворечье",
        "Фотографии (количество)": null,
        "Логотип (есть\/нет)": "Да",
        "Широта": 55.7314764,
        "Долгота": 37.6442667,
        "Форма собственности.1": "Непубличные акционерные общества",
        "Предыдущие названия": null,
        "Штаб-квартира": "Москва",
        "Объем инвестиций ОТ, $": "500 000",
        "Объем инвестиций ДО, $": "5 000 000",
        "Технологический фокус": null,
        "Общий объем фондов, руб. млн": null,
        "Общий объем фондов, $ млн": null,
        "Венчурные фонды \"Статус\"": "Активный",
        "Количество инвестиций": null,
        "Количество выходов": null,
        "Тип фонда по ист. возн.(VC\/PE)": "VC",
        "Название фонда": null,
        "Сервисы.1": null,
        "Комментарии": null,
        "Опубл. на Startup Guide (да\/нет)": "Да"
    },
    "1": {
        "index": 120,
        "Rank": 120.0,
        "ID": 2391,
        "Название объекта": "Elevator Venture",
        "Тип объекта инновационной инфраструктуры": "Венчурные фонды",
        "Рынок": "FinTech",
        "Стадия стартапа": "Ранний рост|Расширение",
        "Сервисы": "Инвестиции|Консультационная поддержка по развитию бизнеса|Маркетинг и продвижение |Доступ к потенциальным заказчикам",
        "Технологии": null,
        "Форма собственности": "Корпоративный",
        "Тип по источнику возник-ния": "Иностранный",
        "Раунд инвестирования": "Раунд А|Раунд В",
        "ИНН организации": null,
        "Организация полное название": null,
        "Организация краткое название": null,
        "Организация комм. название": null,
        "Описание": "Корпоративный венчурный фонд Райффайзенбанка с фокусом на инвестиции в финтех-компании на стадии раннего роста и расширения в странах Центральной и Восточной Европы. \n",
        "График работы": null,
        "Год основания": 2018,
        "Дата закрытия": null,
        "Сайт": "https:\/\/elevator-ventures.com\/",
        "Адрес": null,
        "Ближайшая станция метро": null,
        "Округ": null,
        "Район": null,
        "Фотографии (количество)": null,
        "Логотип (есть\/нет)": "Да",
        "Широта": null,
        "Долгота": null,
        "Форма собственности.1": "Непубличные акционерные общества",
        "Предыдущие названия": null,
        "Штаб-квартира": "Вена",
        "Объем инвестиций ОТ, $": "500 000",
        "Объем инвестиций ДО, $": "3 500 000",
        "Технологический фокус": null,
        "Общий объем фондов, руб. млн": null,
        "Общий объем фондов, $ млн": null,
        "Венчурные фонды \"Статус\"": "Активный",
        "Количество инвестиций": 7,
        "Количество выходов": 1,
        "Тип фонда по ист. возн.(VC\/PE)": "VC",
        "Название фонда": null,
        "Сервисы.1": null,
        "Комментарии": null,
        "Опубл. на Startup Guide (да\/нет)": "Да"
    },
    "2": {
        "index": 16,
        "Rank": 110.1,
        "ID": 2083,
        "Название объекта": "Impulse VC",
        "Тип объекта инновационной инфраструктуры": "Венчурные фонды",
        "Рынок": "Advertising & Marketing|RetailTech|E-commerce",
        "Стадия стартапа": "Ранний рост|Посевная",
        "Сервисы": "Инвестиции|Тематические мероприятия (нетворкинг)|Ментор\/ консультант для поддержки развития бизнеса |Консультационная поддержка по развитию бизнеса|Поддержка по юридическим \/ бухгалтерским вопросам ",
        "Технологии": "Интернет вещей",
        "Форма собственности": "Частный ",
        "Тип по источнику возник-ния": "Российский",
        "Раунд инвестирования": "Seed|Раунд А",
        "ИНН организации": 7706799324.0,
        "Организация полное название": "ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ \"ИМПУЛЬС\"",
        "Организация краткое название": "ООО \"ИМПУЛЬС\"",
        "Организация комм. название": null,
        "Описание": "Венчурный фонд, акселератор и инкубатор технологических интернет-проектов, предоставляет посевное финансирование для компаний с потенциалом масштабирования бизнес-модели и выхода на международные рынки. Помимо финансовой поддержки предоставляет экспертизу, консалтинг, офис, помощь в маркетинге, нетворкинг.  Фокусируется на проектах в сфере онлайн-торговли, интернет-сервисов и мобильных технологий.",
        "График работы": null,
        "Год основания": 2013,
        "Дата закрытия": null,
        "Сайт": "http:\/\/impulsevc.com\/",
        "Адрес": "г Москва, пр-кт Ленинградский, д 74А",
        "Ближайшая станция метро": "Аэропорт",
        "Округ": "Северный",
        "Район": "Аэропорт",
        "Фотографии (количество)": null,
        "Логотип (есть\/нет)": "Да",
        "Широта": 55.8068879,
        "Долгота": 37.5168634,
        "Форма собственности.1": "Общества с ограниченной ответственностью",
        "Предыдущие названия": null,
        "Штаб-квартира": "Москва",
        "Объем инвестиций ОТ, $": 300000,
        "Объем инвестиций ДО, $": 5000000,
        "Технологический фокус": null,
        "Общий объем фондов, руб. млн": 2074,
        "Общий объем фондов, $ млн": 65.0,
        "Венчурные фонды \"Статус\"": "Активный",
        "Количество инвестиций": 53,
        "Количество выходов": 5,
        "Тип фонда по ист. возн.(VC\/PE)": "VC",
        "Название фонда": null,
        "Сервисы.1": null,
        "Комментарии": null,
        "Опубл. на Startup Guide (да\/нет)": "Да"
    },
    "3": {
        "index": 77,
        "Rank": 110.05,
        "ID": 2144,
        "Название объекта": "Altergate",
        "Тип объекта инновационной инфраструктуры": "Венчурные фонды",
        "Рынок": "Gaming|SportTech",
        "Стадия стартапа": "Ранний рост|Посевная",
        "Сервисы": "Инвестиции|Тематические мероприятия (нетворкинг)|Консультационная поддержка по развитию бизнеса",
        "Технологии": "3D моделирование",
        "Форма собственности": "Частный ",
        "Тип по источнику возник-ния": "Российский",
        "Раунд инвестирования": "Seed|Раунд А",
        "ИНН организации": null,
        "Организация полное название": null,
        "Организация краткое название": null,
        "Организация комм. название": null,
        "Описание": "Инвестиционный фонд, сфокусированный на прямых инвестициях в венчурные проекты в сфере киберспорта на ранних стадиях и управление капиталом на глобальных финансовых рынках в интересах частных лиц. ",
        "График работы": null,
        "Год основания": 2019,
        "Дата закрытия": null,
        "Сайт": "http:\/\/altergate.ru\/",
        "Адрес": "г Москва, наб Пресненская, д 10 стр 2",
        "Ближайшая станция метро": "Деловой центр",
        "Округ": "Центральный",
        "Район": "Пресненский",
        "Фотографии (количество)": null,
        "Логотип (есть\/нет)": "Да",
        "Широта": 55.7476819,
        "Долгота": 37.5350195,
        "Форма собственности.1": "Общества с ограниченной ответственностью",
        "Предыдущие названия": null,
        "Штаб-квартира": "Сингапур",
        "Объем инвестиций ОТ, $": 300000,
        "Объем инвестиций ДО, $": 15000000,
        "Технологический фокус": null,
        "Общий объем фондов, руб. млн": null,
        "Общий объем фондов, $ млн": null,
        "Венчурные фонды \"Статус\"": "Активный",
        "Количество инвестиций": 3,
        "Количество выходов": 0,
        "Тип фонда по ист. возн.(VC\/PE)": "PE",
        "Название фонда": null,
        "Сервисы.1": null,
        "Комментарии": "Уточнить про год создания и считать ли его российским или иностранным фондом?",
        "Опубл. на Startup Guide (да\/нет)": "Да"
    },
    "4": {
        "index": 94,
        "Rank": 105.0,
        "ID": 2168,
        "Название объекта": " Startup Lab",
        "Тип объекта инновационной инфраструктуры": "Венчурные фонды",
        "Рынок": "AgroTech|Cybersecurity|EdTech|Transport & Logistics|SpaceTech|PropTech|Telecom|IndustrialTech|Gaming|SportTech|InsuranceTech|LegalTech|FashionTech|HRTech|Business Software|Advertising & Marketing|Consumer Goods & Services|RetailTech|SafetyTech|CleanTech|E-commerce|Entertainment|FinTech|FoodTech|Healthcare|Travel|Мedia & Communication",
        "Стадия стартапа": "Идея|Посевная",
        "Сервисы": "Инвестиции|Тематические мероприятия (нетворкинг)|Ментор\/ консультант для поддержки развития бизнеса |Консультационная поддержка по развитию бизнеса|Поддержка по юридическим \/ бухгалтерским вопросам ",
        "Технологии": "3D моделирование|AR\/VR|Big Data|Аддитивные технологии|Беспилотники|Биометрия|Биотехнологии|Блокчейн|Зеленые технологии|Интернет вещей|Искусственный интеллект и машинное обучение|Компьютерное зрение|Нанотехнологии|Нейротехнологии|Новые и портативные источники энергии|Новые материалы|Робототехника",
        "Форма собственности": "Частный ",
        "Тип по источнику возник-ния": "Российский",
        "Раунд инвестирования": "Pre-seed|Seed",
        "ИНН организации": 7734412988.0,
        "Организация полное название": "ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ \"СТАРТАП ЛАБОРАТОРИЯ\"",
        "Организация краткое название": "ООО \"СТАРТАП ЛАБОРАТОРИЯ\"",
        "Организация комм. название": null,
        "Описание": "Предпосевной венчурный фонд, являющийся дочерней структурой фонда «ТилТех Капитал», который помогает проектам развиваться, наращивать сеть контактов, масштабировать каналы продаж, оптимизировать бизнес модель и внутренние процессы. Инвестиции будут распределяться на трех этапах совместной работы с проектами:\n1. Ознакомительный этап (2-3 месяца). Фонд обеспечит стартап трекерской и менторской поддержкой, связями, экосистемой и юридическими консультациями.\n2. Выход стартапа на новый рынок. С инвестициями фонда от $50 тысяч до $100 тысяч.\n3. Упаковка проекта под привлечение дополнительных инвестиций. С вложениями фонда до $300 тысяч.",
        "График работы": null,
        "Год основания": 2018,
        "Дата закрытия": null,
        "Сайт": "https:\/\/startup-lab.ru\/",
        "Адрес": "г Москва, проезд Лубянский, д 19 стр 1",
        "Ближайшая станция метро": "Китай-город",
        "Округ": "Центральный",
        "Район": "Басманный",
        "Фотографии (количество)": null,
        "Логотип (есть\/нет)": "Да",
        "Широта": 55.7558036,
        "Долгота": 37.6337306,
        "Форма собственности.1": "Общества с ограниченной ответственностью",
        "Предыдущие названия": null,
        "Штаб-квартира": "Москва",
        "Объем инвестиций ОТ, $": 50000,
        "Объем инвестиций ДО, $": 300000,
        "Технологический фокус": null,
        "Общий объем фондов, руб. млн": 110,
        "Общий объем фондов, $ млн": 1.5,
        "Венчурные фонды \"Статус\"": "Активный",
        "Количество инвестиций": 25,
        "Количество выходов": null,
        "Тип фонда по ист. возн.(VC\/PE)": "VC",
        "Название фонда": "Название фонда -  Startup Lab 2\nОбъем инвестиций, $ млн - н.д.\nДата создания фонда - 2020-12\n|Название фонда -  Startup Lab 1\nОбъем инвестиций, $ млн - 1.5\nДата создания фонда - 2018-0\n",
        "Сервисы.1": null,
        "Комментарии": null,
        "Опубл. на Startup Guide (да\/нет)": "Да"
    }
}