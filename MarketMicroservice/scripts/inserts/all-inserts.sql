USE `market_microservices`;

INSERT INTO
    `company` (`id`, `name`, `urlImage`)
VALUES
    ('1', 'Walmart', 'https://shorturl.at/bklqX'),
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
        'https://rb.gy/p9w65x',
        '1',
        'México 15 1073, Zona Nte Comercial, 85000 Cdad. Obregón, Son.'
    ),
    (
        '2',
        'Walmart',
        'https://t.ly/X7m95',
        '1',
        'Kiosco SC 2646, C. Sufragio Efectivo 901, Miravalle, 85000 Cdad. Obregón, Son.'
    ),
    (
        '3',
        'Bodega Aurrera',
        'https://shorturl.at/ciRVZ',
        '2',
        'Zona Comercial, Blvd Rodolfo Elias Calles S/N Lote 2 Manzana 1, Blvd. Rodolfo Elías Calles S/N, Zona Comercial, 85013 Cdad. Obregón, Son.'
    ),
    (
        '4',
        'Bodega Aurrera',
        'https://shorturl.at/pxMN5',
        '2',
        'C. Michoacán S/N, Cumuripa, 85000 Cajame, Son.'
    );