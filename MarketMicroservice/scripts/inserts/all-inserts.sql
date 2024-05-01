USE `market_microservices`;

INSERT INTO
    `company` (`id`, `name`, `urlImage`)
VALUES
    (
        '1',
        'Walmart',
        'https://imgs.search.brave.com/U7osKveKZcGGjIKWin2bisv7Z_YGXQG2oDMWQ8isjnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzVT/dEFiUkhMQTRaZHl6/UVpWaXZtMmMtMzIw/LTgwLmpwZw'
    ),
    (
        '2',
        'Bodega Aurrera',
        'https://shorturl.at/cdruU'
    ),
    ('3', 'Soriana', 'https://shorturl.at/uJMT7'),
    ('4', 'Chedraui', 'https://rb.gy/z5vak0'),
    ('5', 'HEB', 'https://rb.gy/en52q5'),
    ('6', 'Superama', 'https://rb.gy/nnsvh3'),
    ('7', 'Ley', 'https://rb.gy/fgueh3');

INSERT INTO
    market (`id`, `name`, `urlImage`, `company_id`, `address`)
VALUES
    (
        '1',
        'Walmart',
        'https://imgs.search.brave.com/U7osKveKZcGGjIKWin2bisv7Z_YGXQG2oDMWQ8isjnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzVT/dEFiUkhMQTRaZHl6/UVpWaXZtMmMtMzIw/LTgwLmpwZw',
        '1',
        'México 15 1073, Zona Nte Comercial, 85000 Cdad. Obregón, Son.'
    ),
    (
        '2',
        'Walmart',
        'https://imgs.search.brave.com/U7osKveKZcGGjIKWin2bisv7Z_YGXQG2oDMWQ8isjnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzVT/dEFiUkhMQTRaZHl6/UVpWaXZtMmMtMzIw/LTgwLmpwZw',
        '1',
        'Kiosco SC 2646, C. Sufragio Efectivo 901, Miravalle, 85000 Cdad. Obregón, Son.'
    ),
    (
        '3',
        'Bodega Aurrera',
        'https://imgs.search.brave.com/kPf4v2D6Ohya9vDLbkUAB2cjmV30OfxV61Mwg0IQIyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9uYS5s/ZWFmbGV0c2NkbnMu/Y29tL214L2RhdGEv/NC9sb2dvLndlYnA_/MmMyMjU1M2NlNzM5/NWExZTE0MzQ5ZDdj/MWNjOTMwN2Y',
        '2',
        'Zona Comercial, Blvd Rodolfo Elias Calles S/N Lote 2 Manzana 1, Blvd. Rodolfo Elías Calles S/N, Zona Comercial, 85013 Cdad. Obregón, Son.'
    ),
    (
        '4',
        'Bodega Aurrera',
        'https://imgs.search.brave.com/kPf4v2D6Ohya9vDLbkUAB2cjmV30OfxV61Mwg0IQIyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9uYS5s/ZWFmbGV0c2NkbnMu/Y29tL214L2RhdGEv/NC9sb2dvLndlYnA_/MmMyMjU1M2NlNzM5/NWExZTE0MzQ5ZDdj/MWNjOTMwN2Y',
        '2',
        'C. Michoacán S/N, Cumuripa, 85000 Cajame, Son.'
    );