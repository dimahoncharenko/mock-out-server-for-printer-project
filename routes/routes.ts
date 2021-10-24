import { Router } from "express";

const router = Router();

const characteristics = [
    { 
      title: "Основні", 
      cells: [
        ["Формат пристрою", "А3"],
        ["Технологія друку", "струменева"],
        ["Кольоровість", "кольоровий"],
        ["РК дисплей", "кольоровий, сенсорний - 10,9 см"],
        ["Конфігурація сопел", "360 cопла, 180 - на чорну фарбу, 180 - на кольорову"],
      ] 
    },
    { 
      title: "Друк", 
      cells: [
        ["Швидкість чорно-білого друку", "16 листів/хв"],
        ["Швидкість кольорового друку", "12 листів/хв"],
        ["Макс. роздільна здатність, dpi", "5760x1440"],
      ] 
    },
    {
      title: "Копіювання",
      cells: [
        ["Роздільна здатність копіювання", "1200x4800 dpi"],
        ["Кількість копій за цикл", "1-99"]
      ]
    },
    {
      title: "Сканування",
      cells: [
        ["Тип сканера", "планшетний"],
        ["Роздільна здатність сканера", "1200х4800 dpi"],
        ["Макс. розмір сканованого об'єкта", "216x297 мм"],
        ["Формат виведення даних", "BMP, JPEG, TIFF, multi-TIFF, PDF, PNG"],
      ]
    },
    {
      title: "Лотки",
      cells: [
        ["Ємність лотка для подачі паперу", "100 листів"],
        ["Ємність лотка для видачі паперу", "50 листів"],
      ]
    },
    {
      title: "Інтерфейси",
      cells: [
        ["Провідні інтерфейси", "Підключення до мережі (Ethernet); USB"],
        ["Безпровідні інтерфейси", "Wi-Fi"]  
      ]
    },
    {
      title: "Додатково",
      cells: [
        ["Підтримка ОС", "Windows 8; Mac OS X v10.10; Mac OS X v10.14; Windows 7; Mac OS X v10.12; Windows 8.1; Mac OS X v10.13; Windows 10; Mac OS X v10.11"],
        ["Картки пам'яті", "SD, SDHC, SDXC, MicroSD, MicroSDHC, MicroSDXC, MiniSD, MiniSDHC, Mini SDXC"],
      ]
    },
    {
      title: "Фізичні характеристики",
      cells: [
        ["Колір", "чорний"],
        ["Споживана потужність", "17 Вт"],
        ["Напруга живлення", "АС 220 В - 240 В, 50 Гц - 60 Гц"],
        ["Підтримуване програмне забезпечення", "Epson Photo+, Epson ScanSmart, EpsonNet Config"],
        ["Габарити (ШхДхВ)", "523х379х169 мм"],
        ["Вага", "11.1 кг"],
        ["Гарантійний термін", "12 місяців"],
      ]
    },
    
  ];
  
  const centres = [
    {
        street: "Вул. Княжий Затон 2/30",
        company: "Ремонт принтеров",
        workSchedule: "Пн-Пт: 10-19 \nСб-Нд: вихідний",
        logo: "https://serviceclub.com.ua/services/fcff7410ac86bf16ad1f11b74937311c.png.pagespeed.ce.BdvvIDpyuJ.png",
        coordinates: [50.4029068, 30.6261845],
        phone: "(067) 251-00-45"
    },
    {
        street: "Вул. Білоруська, 40",
        company: "Ремонт принтеров",
        workSchedule: "Пн-Пт: 10-19 \nСб-Нд: вихідний",
        logo: "https://serviceclub.com.ua/services/fcff7410ac86bf16ad1f11b74937311c.png.pagespeed.ce.BdvvIDpyuJ.png",
        coordinates: [50.4657072, 30.4707327],
        phone: "(067) 251-00-45"
    },
    {
        street: "Вул. Антонова 12",
        company: "Теле Європа-Сервіс",
        workSchedule: "Пн-Пт: 10-18.30 \nСб: 10-16 \nНд: вихідний",
        logo: "https://serviceclub.com.ua/services/d7caea61ae87c3169633224a023fa8f0.png.pagespeed.ce.4CNqsya-o-.png",
        coordinates: [50.4331589, 30.4493026],
        phone: "(097) 332-33-02"
    },
    {
        street: "Софіївська Борщагівка, вул. Райдужна 86",
        company: "Сервісний центр Nine-Lives",
        workSchedule: "Пн-Пт: 10-18 \nСб: 10-15 \nНд: вихідний",
        logo: "https://serviceclub.com.ua/services/198c3aacb0a1ee540208096c0f7e23e6.png.pagespeed.ce.1TMjouOSqR.png",
        coordinates: [50.4061115,30.3299153],
        phone: "(099) 307-15-66"
    },
    {
        street: "Вул. Жмеринська 30/8 офіс 7",
        company: "Сервісний центр SERVICEmobile",
        workSchedule: "Пн-Пт: 10-19 \nСб: 12-17 \nНд: вихідний",
        logo: "https://serviceclub.com.ua/services/e5521eacc85319b0f5fd101dd9f7ffc4.jpg.pagespeed.ce.soMUqKVs8-.jpg",
        coordinates: [50.4392623, 30.3762967],
        phone: "(066) 704-11-80"
    },
    {
        street: "Вул. Поречкова 189",
        company: "Сервісний центр Сервіс Солушнс",
        workSchedule: "Пн-Пт: 10-18 \nСб-Нд: вихідний",
        logo: "https://serviceclub.com.ua/services/c6774ee951a33dc203cfe49d8fc8e8f0.png.pagespeed.ce.WCcG7kITZ6.png",
        coordinates: [50.4840478, 30.4032697],
        phone: "(095) 351-11-55"
    },
    {
        street: "Біла Церква, вул. Шевченка 87",
        company: "Сервісний центр Ф1 Сервіс",
        workSchedule: "Пн-Пт: 09-18 \nСб-Нд: вихідний",
        logo: "https://serviceclub.com.ua/services/7946b89d425aafd5ae3494f281cd0019.png.pagespeed.ce.jNqSxRki7K.png",
        coordinates: [49.7869064, 30.1264924],
        phone: "(067) 322-35-43"
    },
    {
        street: "Вул. Райдужна 25Б",
        company: "Сервісний центр Крок-ТТЦ",
        workSchedule: "Пн-Пт: 9-20 \nСб: 10-18 \nНд: вихідний",
        logo: "https://serviceclub.com.ua/services/036fe287d84c788bfd1e33f8678f07c5.png.pagespeed.ce.MzNu3pqHOt.png",
        coordinates: [50.4838582, 30.5866264],
        phone: "0(800) 50-45-04"
    },
    {
        street: "Вул. Ревуцького, 6",
        company: "Сервісний центр Крок-ТТЦ",
        workSchedule: "Пн-Пт: 9-20 \nСб: 10-18 \nНд: вихідний",
        logo: "https://serviceclub.com.ua/services/036fe287d84c788bfd1e33f8678f07c5.png.pagespeed.ce.MzNu3pqHOt.png",
        coordinates: [50.4155702, 30.6405087],
        phone: "0(800) 50-45-04"
    },
    {
        street: "Вул. Русанівська набережна, 8",
        company: "Сервісний центр Крок-ТТЦ",
        workSchedule: "Пн-Пт: 9-20 \nСб: 10-18 \nНд: вихідний",
        logo: "https://serviceclub.com.ua/services/036fe287d84c788bfd1e33f8678f07c5.png.pagespeed.ce.MzNu3pqHOt.png",
        coordinates: [50.4369312, 30.5905985],
        phone: "0(800) 50-45-04"
    }
  ];
  
  const photos = [
    {
      img: "https://i.ibb.co/F6y5jXX/slide1.jpg",
      title: "Представляємо принтери EcoTank",
      content: "Кольоровий друк сторінок за допомогою EcoTank коштує недорого. Принтери EcoTank використовують технологію Heat-Free, щоб забезпечити передові переваги для клієнтів над лазерною та тепловою струменевою технологією та, для повного спокою, користуватися трирічною гарантією, коли ви реєструєте свій EcoTank у Epson."
    }, 
    {
      img: "https://i.ibb.co/gdggKxP/slide3.jpg",
      title: "Що таке EcoTank?",
      content: "Принтер EcoTank принципово відрізняється від більшості принтерів - замість картриджів він має великий чорнильний бак, який ви заповнюєте чорнилом з пляшок. З самого початку у вас достатньо чорнила для друку до 14 000 сторінок - це означає, що як гроші, так і час заощаджуються, оскільки ви не часто змінюєте картриджі. Налаштування просте, заправка баку не викликає безладу і також надійна."
    }, 
    {
      img: "https://i.ibb.co/Qnq8fs2/slide4.jpg",
      title: "Надійний друк без безладу",
      content: "Кожен принтер оснащений технологією друкуючої головки Epson Micro Piezo, яка забезпечує неперевершену довговічність, якість і надійність. Чорнильниця надвисокої місткості повністю інтегрована в принтер, тому ви можете насолоджуватися надійним друком без безладу або клопоту інших систем заправки. Унікальна технологія швидкого поповнення чорнила Epson, зі спеціально розробленими герметичними ковпачками та фільтрами, забезпечує мінімальні втрати чорнила."
    }, 
    {
      img: "https://i.ibb.co/JBnFLVm/slide5.jpg",
      title: "Відмінна колірна гамма",
      content: "Новітня технологія нанесення паперового покриття застосовується, щоб гарантувати роботу з найсучаснішими фарбами Epson UltraChrome, щоб відтворити найширшу колірну гаму."
    }, 
    {
      img:"https://i.ibb.co/PmhHB5f/slide6.jpg",
      title: "Резистентність до шкідливих факторів мікроклімату",
      content: "Продукція принтера Epson призначена для використання в різних середовищах. Під час нормальних операцій продукти піддаються взаємодії та дотику людей."
    }, 
    {
      img: "https://i.ibb.co/NFBtZWN/slide7.jpg",
      title: "Epson та Windows 10",
      content: "Epson прагне підтримувати Windows 10 і постійно розробляє програми та драйвери пристроїв відповідно до нових глобальних стандартів Microsoft. Windows 10 буде підтримувати деякі продукти Epson прямо з коробки, крім того, Epson випустила ряд сумісних драйверів і програмного забезпечення для Windows 10."
    }, 
    {
      img: "https://i.ibb.co/XCyZK76/slide8.jpg",
      title: "Друк з мобільних пристроїв і багато іншого",
      content: "Завдяки лінійці компактних мультипакетів Epson з Wi-Fi, друк з мобільних телефонів може бути швидким і легким. Більше не потрібно прив'язуватися до столу – надсилайте товари для друку з планшета або смартфона за допомогою Wi-Fi та ряду безкоштовних мобільних додатків для друку."
    }];
  
    const pricing = {
      printer: [
        {
          price: "18 942 грн.",
          link: "https://konotop.prom.ua/ua/p1440802220-bfp-epson-l8180.html?&primelead=MS4wMw",
          logoUrl: "https://konotop.prom.ua/cloud-cgi/static/uaprom-static/js/build/portal-portable/images/logo_prom-3K4N3.svg"
        },
        {
          price: "19 825 грн.",
          link: "https://distri.mti.ua/noutbuki-ta-kompyuteri/pristroyi-dlya-druku/mfp/3699726",
          logoUrl: "https://distri.mti.ua/themes/mti/assets/img/logo.svg"
        },
        {
          price: "19 825 грн.",
          link: "https://megaprint.kiev.ua/bfp-a3-epson-l8180-fabrika-druku-z-wi-fi/",
          logoUrl: "https://megaprint.kiev.ua/content/images/2/200x26l90nn0/18790293426215.webp"
        },
        {
          price: "19 479 грн.",
          link: "https://podillyafinance.com.ua/bfp-a3-epson-l8180-fabrika-druku-z-wi-fi?search=Epson%20L8180",
          logoUrl: "https://podillyafinance.com.ua/image/catalog/LOGO/logotype.png"
        },
        {
          price: "19 825 грн.",
          link: "https://katran.vn.ua/orgtehnika-aksesuari/printeri-skaneri-bfp-3v1/bagatofunkcional-ni-pristroi/1124344",
          logoUrl: "https://katran.vn.ua/assets/img/logo.svg"
        },
        {
          price: "18 099 грн.",
          link: "https://chip-mag.com/p1492229788-bfp-epson-l8180.html",
          logoUrl: "https://images.ua.prom.st/1651382861_w120_h120_chipinternet-magazin-tehniki-i.jpg"
        },
        {
          price: "29 250 грн.",
          link: "https://click24.in.ua/p/1265564035-epson-ecotank-l8180/?utm_source=nadavi&utm_medium=cpc",
          logoUrl: "https://images.zakupka.com/i3/firms/27/10766/10766494/click24-biz_42bb44d567fa70a_400x120.png"
        },
        {
          price: "19 825 грн.",
          link: "https://rozetka.com.ua/epson-c11cj21403/p314140141/",
          logoUrl: "https://xl-static.rozetka.com.ua/assets/img/design/logo_n.svg"
        },
        {
          price: "19 825 грн.",
          link: "https://brain.com.ua/ukr/Bagatofunkcionalniy_pristriy_Epson_L8180_Fabrika_pechati_c_WI-FI_C11CJ21403-p789594.html",
          logoUrl: "https://brain.com.ua/static/retail/images/brain-logo-gray.svg"
        },
        {
          price: "19 825 грн",
          link: "https://www.itbox.ua/ua/product/Mnogofunkcionalnoe_ustroystvo_Epson_L8180_Fabrika_pechati_c_WI-FI_C11CJ21403-p698638/",
          logoUrl: "https://static.itbox.ua/static/src/img/logo/logo-itbox-mobile.svg"
        },
      ],
      inks: [
        {
          price: "558 грн",
          link: "https://kiev.pacxodka.net/category/epson-l8180/",
          logoUrl: "https://kiev.pacxodka.net/wa-data/public/site/themes/ahead/logo.svg?v1.4.4"
        },
        {
          price: "529 грн",
          link: "https://p.ua/uk/buy-epson-l8180_original-ink/",
          logoUrl: "https://p.ua/media/logo/websites/1/Logo-P.ua-MAIN.svg"
        },
        {
          price: "491 грн",
          link: "https://www.itbox.ua/ua/product/Konteyner_s_chernilami_Epson_115_EcoTank_Grey_C13T07D54A-p705805/",
          logoUrl: "https://static.itbox.ua/static/src/img/logo/logo-itbox-mobile.svg"
        },
        {
          price: "529 грн",
          link: "https://can.ua/ru/epson-115-ecotank-magenta-c13t07d34a/p277242/",
          logoUrl: "https://i.can.ua/logo-white.svg"
        },
        {
          price: "491 грн",
          link: "https://mt.dp.ua/catalog/konteyner-s-chernilami-epson-115-ecotank-yellow-c13t07d44a.html",
          logoUrl: "https://mt.dp.ua/upload/images/mtlogo-header8.png"
        },
        {
          price: "553 грн",
          link: "https://impulse-ua.com/kontejner-s-chernilami-epson-115-ecotank-black-c13t07c14a-115-ecotank-black-1",
          logoUrl: "https://impulse-ua.com/image/logo2.png"
        },
        {
          price: "491 грн",
          link: "https://brain.com.ua/Konteyner_s_chernilami_Epson_115_EcoTank_Magenta_C13T07D34A-p796436.html",
          logoUrl: "https://brain.com.ua/static/retail/images/brain-logo-gray.svg"
        },
      ]
    };
   

router.get('/photos', function (request, reply) {
    reply.json({ photos });
});

router.get("/centres", (request, reply) => {
    reply.json({ centres });
});

router.get("/characteristics", (request, reply) => {
    reply.json({ characteristics });
});

router.get("/pricing", (request, reply) => {
    reply.json({ pricing });
});

router.get("/", (request, reply) => {
    reply.json("Welcome to mock out api for printer project!");;
});

export default router;