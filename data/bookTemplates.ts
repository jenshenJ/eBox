import Book from "../entities/Book";

const bookTemplates = [
  new Book(
    0,
    'Лолита',
    'Владимир Набоков',
    'https://i.pinimg.com/originals/a7/77/75/a777750a26fb4a69f7f045b8a98e2c99.jpg',
    'https://englishonlineclub.com/pdf/Vladimir%20Nabokov%20-%20Lolita%20%5BEnglishOnlineClub.com%5D.pdf',
     new Date(),
  ),
  new Book(
    1,
    'Кладбище домашних животных',
    'Стивен Кинг',
    'https://avatars.dzeninfra.ru/get-zen_doc/5378318/pub_6327720b0f3e723924f65e82_632772f7e7192016d3d375f5/scale_1200',
    'https://fantlab.ru/edition244634.pdf',
    new Date(),
  ),
  new Book(
    2,
    'Норвежский лес',
    'Харуки Мураками',
    'https://cdn1.ozone.ru/s3/multimedia-y/6440487898.jpg',
    'https://www.macobo.com/essays/epdf/Haruki%20Murakami%20-%20Norwegian%20Wood.pdf',
    new Date(),
    
  ),
  new Book(
    3,
    'Медвежий угол',
    'Фредрик Бакман',
    'https://inet-kniga.ru/upload/iblock/94b/81zdfsb2zolmqdayz18cj1v2gd0f0zbw/420831.jpg',
    'https://drive.google.com/uc?export=download&id=15zl4vspdr4P6odbozQRcsoxw9K7sokHY',
    new Date(),
  ),
  new Book(
    4,
    'Парфюмер, история одного убийцы',
    'Патрик Зюскинд',
    'https://cdn1.ozone.ru/s3/multimedia-z/6008290763.jpg',
    'http://lambre-work.narod.ru/publicationslambre/books/Zuskind_Parfumer.pdf',
    new Date(),

  ),
  new Book(
    5,
    'Прощай, оружие!',
    'Эрнест Хемингуэй',
    'https://cdn1.ozone.ru/s3/multimedia-f/6009214251.jpg',
    'https://fantlab.ru/edition339840.pdf',
    new Date(),
  ),
  
  new Book(
    6,
    '1984',
    'Джордж Оруэлл',
    'https://s1.livelib.ru/boocover/1007684998/140/ea26/Dzhordzh_Oruell__1984.jpg',
    'https://vtoraya-literatura.com/pdf/orwell_1984_text.pdf',
    new Date(),
  ),
  new Book(
    7,
    'Мартин Иден',
    'Джек Лондон',
    'https://s1.livelib.ru/boocover/1008477196/140/7457/Dzhek_London__Martin_Iden.jpg',
    'https://fantlab.ru/edition369736.pdf',
    new Date(),
  ),
  new Book(
    8,
    'Над гнездом кукухи',
    'Кен Кизи',
    'https://s1.livelib.ru/boocover/1008345577/140/752d/Ken_Kizi__Nad_gnezdom_kukuhi.jpg',
    'https://fantlab.ru/edition368434.pdf',
    new Date(),
  ),
  new Book(
    9,
    'Анна Каренина',
    'Лев Толстой',
    'https://s1.livelib.ru/boocover/1007684992/140/491b/Lev_Tolstoj__Anna_Karenina.jpg',
    'https://b1.culture.ru/c/96290/Анна%20Каренина.%20Лев%20Толстой.pdf',
    new Date(),
  ),
  new Book(
    10,
    'Белые ночи',
    'Федор Достоевский',
    'https://s1.livelib.ru/boocover/1008445804/140/464c/Fjodor_Dostoevskij__Belye_nochi.jpg',
    'https://www.100bestbooks.ru/files/Dostoevskii_Belye_nochi.pdf',
    new Date(),
  ),
  new Book(
    11,
    '451° по Фаренгейту',
    'Рэй Брэдбери',
    'https://s1.livelib.ru/boocover/1001287644/140/37e3/Rej_Bredberi__451_po_Farengejtu.jpg',
    'https://fantlab.ru/edition182734.pdf',
    new Date(),
  ),
  new Book(
    12,
    'Приключения Тома Сойера',
    'Марк Твен',
    'https://s1.livelib.ru/boocover/1008528733/140/5723/Mark_Tven__Priklyucheniya_Toma_Sojera.jpg',
    'https://fantlab.ru/edition219833.pdf',
    new Date(),
  ),
  new Book(
    13,
    'Гарри Поттер и философский камень',
    'Джоан Роулинг',
    'https://i.pinimg.com/originals/7f/21/20/7f212010fb43e5d7cd839c5372e08433.jpg',
    'https://www.pottermorepublishing.com/wp-content/uploads/1_Harry-Potter-and-Philosophers-Stone.pdf',
    new Date(),
  ),

  new Book(
    14,
    'Гарри Поттер и тайная комната',
    'Джоан Роулинг',
    'https://biblioteka-fb2.com/uploads/posts/2022-04/garri-potter-i-tajnaja-komnata-1.webp',
    'https://library.samdu.uz/files/d9b2b6de80f3586a6e2fdc36b914480b_ГАРРИ%20ПОТТЕР.pdf',
    new Date(),
  ),

  new Book(
    15,
    'Гарри Поттер и узник Азкабана',                      // тут тока обложка на англе
    'Джоан Роулинг',
    'https://pbs.twimg.com/media/FZ8q34fXoAABsU2?format=jpg&name=small',
    'https://library.samdu.uz/files/1ebe4e449d363e76cd9d82829927c094_ГАРРИ%20ПОТТЕР.pdf',
    new Date(),
  ),

  new Book(
    16,
    'Гарри Поттер и кубок огня',                  // тут англ 
    'Джоан Роулинг',
    'https://images-na.ssl-images-amazon.com/images/I/91RyDBEgtbL.jpg',
    'https://hasanboy.uz/wp-content/uploads/2018/04/Harry-Potter-and-the-Goblet-of-Fire.pdf',
    new Date(),
  ),

  new Book(
    17,
    'Гарри Поттер и орден Феникса',
    'Джоан Роулинг',
    'https://cdn1.ozone.ru/s3/multimedia-v/6012509599.jpg',
    'http://garri-potter-life.narod.ru/online/hp_fenix.pdf',
    new Date(),
  ),

  new Book(
    18,
    'Гарри Поттер и Принц-полукровка',
    'Джоан Роулинг',
    'https://avatars.mds.yandex.net/get-mpic/5238263/img_id2101865637082658583.jpeg/orig',
    'https://library.samdu.uz/files/92513dcac7972089171ce575d76b577c_ГАРРИ%20ПОТТЕР.pdf',
    new Date(),
  ),

  new Book(
    19,
    'Гарри Поттер и Дары Смерти',
    'Джоан Роулинг',
    'https://100knig.com/wp-content/uploads/2016/09/6012509585.jpg',
    'http://marketing4121.narod.ru/Harry_Potter_7_The_Deathly_Hallows.pdf',
    new Date(),
  ),

  new Book(
    20,
    'Властелин колец',
    'Джон Рональд Руэл Толкин',
    'https://s1.livelib.ru/boocover/1003446750/o/c351/Dzhon_R._R._Tolkin__Vlastelin_kolets_sbornik.jpeg',  
    'https://www.100bestbooks.ru/files/Tolkien_Vlastelin_kolets.pdf',
    new Date(),
  ),

  new Book(
    21,
    'Джен Эйр',
    'Шарлотта Бронте',
    'https://s1.livelib.ru/boocover/1007460388/o/f471/Sharlotta_Bronte__Dzhejn_Ejr.jpeg',  
    'https://www.100bestbooks.ru/files/Bronte_S_Jane_Eyre.pdf',
    new Date(),
  ),
  new Book(
    22,
    'Убить пересмешника',
    'Харпер Ли',
    'https://cdn1.ozone.ru/s3/multimedia-f/6010175307.jpg',  
    'https://24library.ru/wp-content/uploads/2023/05/Ли-Убить-пересмешника.pdf',
    new Date(),
  ),
  
  new Book(
    23,
    'Граф Монте-Кристо',
    'Александр Дюма',
    'https://s1.livelib.ru/boocover/1002217446/o/518c/Aleksandr_Dyuma__Graf_MonteKristo.jpeg',  
    'https://www.100bestbooks.ru/files/Duma_Graf_Monte_Cristo.pdf',
    new Date(),
  ),
  
  new Book(
    24,
    'О всех созданиях - больших и малых',
    'Джеймс Хэрриот',
    'https://liza.ua/wp-content/uploads/2018/03/1017428831.jpg',  
    'https://imwerden.de/pdf/herriot_o_sozdaniyakh_bolshikh_i_malykh_1985_text.pdf',
    new Date(),
  ),

  new Book(
    25,
    'Тайная опора',
    'Людмила Владимировна Петрановская',
    'https://main-cdn.sbermegamarket.ru/big2/hlr-system/1482065/100023074003b0.jpg',  
    'https://balapan.org.kz/wp-content/uploads/2022/04/petranovskaya_l_v.pdf',
    new Date(),
  ),

  new Book(
    26,
    'The Little Prince',
    'Antoine de Saint Exupéry',
    'https://i.pinimg.com/originals/9b/e5/cd/9be5cdd05d7d1e91d1347072fdd2d222.jpg',  
    'https://blogs.ubc.ca/edcp508/files/2016/02/TheLittlePrince.pdf',
    new Date(),
  ),

  new Book(
    27,
    'Вишневый Сад',
    'Антон Павлович Чехов',
    'https://media.b-stock.ru/gallery/5011675.jpeg',  
    'https://www.100bestbooks.ru/files/Chekhov_Vishnevyi_sad.pdf',
    new Date(),
  )
];

export default bookTemplates;