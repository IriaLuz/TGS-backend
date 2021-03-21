const products = [
    {
      id: '1',
      name: 'Tree Runners',
      price: 50,
      inventory: [
        {
          id: '1',
          color: 'Charcoal (Charcoal Sole)',
          colorCode: 'charcoal',
          images: [
            {
              src:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imageAngle_24fc0bab-31c1-40c4-9363-166541d7a70a.png?v=1614723172',
              alt: 'Charcoal Sole Shoe',
            },
            {
              src:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/Mens_TR-PDP_Image_6a1b9edc-9926-4719-9d05-93c50cc64dfe.jpg?v=1614723172',
              alt: 'Person with shoes',
            },
            {
              src:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imageLeft_052bf309-4064-450f-af51-bd9f3399ceb5.png?v=1614723172',
              alt: 'Charcoal Sole Shoe from the side',
            },
          ],
          sizes: [
            { size: 7, format: 'uk', stock: 3 },
            { size: 8, format: 'uk', stock: 0 },
            { size: 9, format: 'uk', stock: 3 },
            { size: 10, format: 'uk', stock: 7 },
            { size: 11, format: 'uk', stock: 5 },
            { size: 12, format: 'uk', stock: 3 },
            { size: 13, format: 'uk', stock: 2 },
          ],
        },
        {
          id: '2',
          color: 'Mist (White Sole)',
          colorCode: 'mist',
          images: [
            {
              src:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/TR3MMST080_SHOE_ANGLE_GLOBAL_MENS_TREE_RUNNER_MIST_WHITE.png?v=1614724703',
              alt: 'Mist Shoe',
            },
            {
              src:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/Mens_TR-PDP_Image_6a1b9edc-9926-4719-9d05-93c50cc64dfe.jpg?v=1614723172',
              alt: 'Person with shoes',
            },
            {
              src:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/TR3MMST080_SHOE_LEFT_GLOBAL_MENS_TREE_RUNNER_MIST_WHITE.png?v=1614724703',
              alt: 'Mist Shoe from the side',
            },
          ],
          sizes: [
            { size: 7, format: 'uk', stock: 0 },
            { size: 8, format: 'uk', stock: 0 },
            { size: 9, format: 'uk', stock: 3 },
            { size: 10, format: 'uk', stock: 7 },
            { size: 11, format: 'uk', stock: 0 },
            { size: 12, format: 'uk', stock: 3 },
            { size: 13, format: 'uk', stock: 0 },
          ],
        },
      ],
      features: [
        { id: '1', description: 'Renewable Materials' },
        { id: '2', description: 'Machine Washable' },
        { id: '3', description: 'Flexibly Conforms To Your Movements' },
      ],
      summaryDescription:
        'Our breathable, silky-smooth sneaker made with responsibly sourced eucalyptus tree fiber treads lightly in everything you do. Made in Reading UK',
      informationContent: [
        {
          id: '1',
          title: 'TREE UPPER',
          subtitle: 'Silky And Breezy',
          content:
            'Our proprietary knit feels silky smooth, breathable, and pleasantly cool thanks to eucalyptus tree fiber responsibly sourced from FSC® Certified forests.',
          imageId:
            'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_860/production/pageSectionBodyCard/en-GB/images/12Bq4J7wYMbddnSDS1DCTP/2',
        },
        {
          id: '2',
          title: 'SUGARCANE MIDSOLE',
          subtitle: 'Sweet On The Planet',
          content:
            "Contoured and delightfully bouncy, our Brazilian sugarcane midsole is called SweetFoam™, which is made with the world's first carbon negative green EVA.",
          imageId:
            'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_860/production/pageSectionBodyCard/en-GB/images/4iJaypr7TQR4Xhj7xbFmIk/2',
        },
      ],
      rate: { rateCount: 119, averageRate: 4.5 },
    },
    {
      id: '2',
      name: 'Flow Top Tan Leather',
      price: 95,
      inventory: [
        {
          id: '3',
          color: 'Tan Leather',
          colorCode: 'tan-leather',
          images: [
            {
              src:
                'https://clarks.scene7.com/is/image/Pangaea2Build/26147956_W_1?wid=2000&hei=2000&fmt=jpg',
              alt: 'Flow Top Shoe',
            },
            {
              src:
                'https://clarks.scene7.com/is/image/Pangaea2Build/26147956_W_7?wid=2000&hei=2000&fmt=jpg',
              alt: 'Flow Top shoe from top and bottom',
            },
            {
              src:
                'https://clarks.scene7.com/is/image/Pangaea2Build/26147956_W_4?wid=2000&hei=2000&fmt=jpg',
              alt: 'Flow Top Shoe from the side',
            },
          ],
          sizes: [
            { size: 7, format: 'uk', stock: 3 },
            { size: 8, format: 'uk', stock: 0 },
            { size: 9, format: 'uk', stock: 3 },
            { size: 10, format: 'uk', stock: 7 },
            { size: 11, format: 'uk', stock: 5 },
            { size: 12, format: 'uk', stock: 3 },
            { size: 13, format: 'uk', stock: 2 },
          ],
        },
        {
          id: '4',
          color: 'Black Leather',
          colorCode: 'black-leather',
          images: [
            {
              src:
                'https://clarks.scene7.com/is/image/Pangaea2Build/26148917_W_1?wid=2000&hei=2000&fmt=jpg',
              alt: 'Flow Top Shoe',
            },
            {
              src:
                'https://clarks.scene7.com/is/image/Pangaea2Build/26148917_W_7?wid=2000&hei=2000&fmt=jpg',
              alt: 'Flow Top shoe from top and bottom',
            },
            {
              src:
                'https://clarks.scene7.com/is/image/Pangaea2Build/26148917_W_4?wid=2000&hei=2000&fmt=jpg',
              alt: 'Flow Top Shoe from the side',
            },
          ],
          sizes: [
            { size: 7, format: 'uk', stock: 3 },
            { size: 8, format: 'uk', stock: 0 },
            { size: 9, format: 'uk', stock: 3 },
            { size: 10, format: 'uk', stock: 7 },
            { size: 11, format: 'uk', stock: 5 },
            { size: 12, format: 'uk', stock: 3 },
            { size: 13, format: 'uk', stock: 2 },
          ],
        },
      ],
      features: [
        { id: '4', description: 'Real Leather' },
        { id: '5', description: 'Dual Density Foam Technology' },
        { id: '6', description: 'Flexibly Conforms To Your Movements' },
      ],
      summaryDescription:
        'A smart casual staple, Flow Top are crafted from a black leather for ultimate versatility. Teamed with a leather TR outsole for durability, these Chukka boots use our dual density Cushion Plus™ technology for ultimate comfort all day every day.',
      informationContent: [
        {
          id: '3',
          title: 'Cushion Plus',
          subtitle: 'Dual Density Foam Technology',
          content:
            'With precisely placed, anatomically targeted, dual density cushioning, Cushion Plus© increases comfort, while simultaneously supporting the biomechanics of your foot to reduce strain.',
          imageId:
            'https://clarks.scene7.com/is/image/Pangaea2Build/abCushionplusConstructionAW19?fmt=pjpeg&wid=480',
        },
      ],
      rate: { rateCount: 50, averageRate: 4.8 },
    },
    {
      id: '3',
      name: "Women's Tree Breezers",
      price: 35,
      inventory: [
        {
          id: '5',
          color: 'Heathered Black (Black Sole)',
          colorCode: 'heathered-black',
          images: [
            {
              src:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/TB1WHBK080_SHOE_ANGLE_GLOBAL_WOMENS_TREE_BREEZERS_HEATHERED_BLACK_BLACK_82fa40cf-f47f-45e2-9efc-d4ac34740148.png?v=1598999348',
              alt: 'Women Tree Breezers',
            },
            {
              src:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/TB1WHBK080_SHOE_RIGHT_GLOBAL_WOMENS_TREE_BREEZERS_HEATHERED_BLACK_BLACK_dc1fd0fc-1338-4761-b55b-6eb69303b066.png?v=1598999348',
              alt: 'Women Tree Breezers from side',
            },
            {
              src:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/TB1WHBK080_SHOE_PAIR_GLOBAL_WOMENS_TREE_BREEZERS_HEATHERED_BLACK_BLACK_d18daab5-8b10-4301-891f-473945276e42.png?v=1598999348',
              alt: 'Women Tree Breezers from top and side',
            },
          ],
          sizes: [
            { size: 2, format: 'uk', stock: 3 },
            { size: 2.5, format: 'uk', stock: 0 },
            { size: 3, format: 'uk', stock: 3 },
            { size: 3.5, format: 'uk', stock: 7 },
            { size: 4, format: 'uk', stock: 5 },
            { size: 5, format: 'uk', stock: 3 },
            { size: 6, format: 'uk', stock: 2 },
          ],
        },
        {
          id: '6',
          color: 'Salt (Grey Sole)',
          colorCode: 'salt',
          images: [
            {
              src:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/TB1WSAL080_SHOE_ANGLE_GLOBAL_WOMENS_TREE_BREEZER_SALT_WHITE_c524a164-1721-44c8-bbdc-ab7c48905274.png?v=1598999494',
              alt: 'Women Tree Breezers',
            },
            {
              src:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/TB1WSAL080_SHOE_RIGHT_GLOBAL_WOMENS_TREE_BREEZER_SALT_WHITE_cf63b3cc-5fdc-499c-8432-263c2fd02c5a.png?v=1598999494',
              alt: 'Women Tree Breezers from side',
            },
            {
              src:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/TB1WSAL080_SHOE_PAIR_GLOBAL_WOMENS_TREE_BREEZER_SALT_WHITE_fba0d0c8-cac3-4351-9616-29ab629bd9ed.png?v=1598999494',
              alt: 'Women Tree Breezers from top and side',
            },
          ],
          sizes: [
            { size: 2, format: 'uk', stock: 0 },
            { size: 2.5, format: 'uk', stock: 0 },
            { size: 3, format: 'uk', stock: 3 },
            { size: 3.5, format: 'uk', stock: 7 },
            { size: 4, format: 'uk', stock: 0 },
            { size: 5, format: 'uk', stock: 3 },
            { size: 6, format: 'uk', stock: 0 },
          ],
        },
      ],
      features: [
        { id: '1', description: 'Renewable Materials' },
        { id: '2', description: 'Machine Washable' },
        { id: '3', description: 'Flexibly Conforms To Your Movements' },
      ],
      summaryDescription:
        'Crafted with silky-smooth eucalyptus tree fiber and a fitted collar, our ballet flat never misses a beat. Made in Reading UK',
      informationContent: [
        {
          id: '1',
          title: 'TREE UPPER',
          subtitle: 'Silky And Breezy',
          content:
            'Our proprietary knit feels silky smooth, breathable, and pleasantly cool thanks to eucalyptus tree fiber responsibly sourced from FSC® Certified forests.',
          imageId:
            'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_860/production/pageSectionBodyCard/en-GB/images/7vsJjlLMu82hH5Ddl58MT8/1',
        },
        {
          id: '2',
          title: 'SUGARCANE MIDSOLE',
          subtitle: 'Sweet On The Planet',
          content:
            "Contoured and delightfully bouncy, our Brazilian sugarcane midsole is called SweetFoam™, which is made with the world's first carbon negative green EVA.",
          imageId:
            'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_860/production/pageSectionBodyCard/en-GB/images/2fOfrMsLvkzNtkF5YlycCY/1',
        },
      ],
      rate: { rateCount: 119, averageRate: 4.7 },
    },
  ];
  exports.products = products;