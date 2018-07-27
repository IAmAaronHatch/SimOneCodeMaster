create table products (
    id serial primary key,
    name varchar(25),
    price integer,
    image text
);

insert into products (
    name, price, image
) values (
    'Shoes', 45, 'https://images.vans.com/is/image/Vans/EYEBWW-HERO?$583x583$'
);

insert into products (
    name, price, image
) values (
    'Pants', 50, 'https://shop.r10s.jp/crouka-lr/cabinet/bgw_3/gramic-gmp-16f027_1.jpg'
);