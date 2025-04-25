const exampleVehicles = [
    {
        plate: "ABC123",
        brand: "Toyota",
        model: "Corolla",
        year: 2010,
        owner: {
            fullName: "Carlos Martínez López",
            id: 1234567890,
            phone: "+34 612 345 678",
            email: "carlos.martinez@gmail.com"
        },
        holder: {
            fullName: "María Gómez Ruiz",
            id: 2345678901,
            phone: "+34 698 765 432",
            email: "maria.gomez@hotmail.com"
        },
        driver: {
            fullName: "David Pérez Sánchez",
            id: 3456789012,
            phone: "+34 612 987 654",
            email: "david.perez@yahoo.com"
        }
    },
    {
        plate: "DEF456",
        brand: "Renault",
        model: "Clio",
        year: 2015,
        owner: {
            fullName: "Laura García Hernández",
            id: 4567890123,
            phone: "+34 621 234 567",
            email: "laura.garcia@gmail.com"
        },
        holder: {
            fullName: "Javier Rodríguez Moreno",
            id: 5678901234,
            phone: "+34 679 876 543",
            email: "javier.rodriguez@hotmail.com"
        },
        driver: {
            fullName: "Sofía Díaz Castro",
            id: 6789012345,
            phone: "+34 612 345 679",
            email: "sofia.diaz@yahoo.com"
        }
    },
    {
        plate: "GHI789",
        brand: "Nissan",
        model: "Qashqai",
        year: 2018,
        owner: {
            fullName: "Antonio Sánchez Rivas",
            id: 7890123456,
            phone: "+34 631 234 568",
            email: "antonio.sanchez@gmail.com"
        },
        holder: {
            fullName: "Paula Fernández Ortiz",
            id: 8901234567,
            phone: "+34 689 876 542",
            email: "paula.fernandez@hotmail.com"
        },
        driver: {
            fullName: "Miguel Ruiz Torres",
            id: 9012345678,
            phone: "+34 632 345 670",
            email: "miguel.ruiz@yahoo.com"
        }
    },
    {
        plate: "JKL012",
        brand: "Ford",
        model: "Fiesta",
        year: 2012,
        owner: {
            fullName: "Isabel Navarro Gómez",
            id: 2345678902,
            phone: "+34 641 234 569",
            email: "isabel.navarro@gmail.com"
        },
        holder: {
            fullName: "Fernando López Salas",
            id: 3456789013,
            phone: "+34 649 876 541",
            email: "fernando.lopez@hotmail.com"
        },
        driver: {
            fullName: "Ana Castillo Vega",
            id: 4567890124,
            phone: "+34 642 345 671",
            email: "ana.castillo@yahoo.com"
        }
    },
    {
        plate: "MNO345",
        brand: "Chevrolet",
        model: "Cruze",
        year: 2016,
        owner: {
            fullName: "Pablo Molina Díaz",
            id: 5678901235,
            phone: "+34 651 234 570",
            email: "pablo.molina@gmail.com"
        },
        holder: {
            fullName: "Lucía Romero Gil",
            id: 6789012346,
            phone: "+34 659 876 540",
            email: "lucia.romero@hotmail.com"
        },
        driver: {
            fullName: "Jorge Herrera Blanco",
            id: 7890123457,
            phone: "+34 652 345 672",
            email: "jorge.herrera@yahoo.com"
        }
    },
    {
        plate: "PQR678",
        brand: "Mazda",
        model: "3",
        year: 2019,
        owner: {
            fullName: "Marta Ruiz López",
            id: 8901234568,
            phone: "+34 661 234 571",
            email: "marta.ruiz@gmail.com"
        },
        holder: {
            fullName: "Diego Aguilar Márquez",
            id: 9012345679,
            phone: "+34 669 876 543",
            email: "diego.aguilar@hotmail.com"
        },
        driver: {
            fullName: "Sandra Gómez Pérez",
            id: 1234567893,
            phone: "+34 662 345 673",
            email: "sandra.gomez@yahoo.com"
        }
    },
    {
        plate: "STU901",
        brand: "Honda",
        model: "Civic",
        year: 2021,
        owner: {
            fullName: "Rubén Vargas Martín",
            id: 2345678904,
            phone: "+34 671 234 572",
            email: "ruben.vargas@gmail.com"
        },
        holder: {
            fullName: "Elena Serrano Ramos",
            id: 3456789015,
            phone: "+34 679 876 544",
            email: "elena.serrano@hotmail.com"
        },
        driver: {
            fullName: "Javier Torres Cobo",
            id: 4567890126,
            phone: "+34 672 345 674",
            email: "javier.torres@yahoo.com"
        }
    },
    {
        plate: "VWX234",
        brand: "Kia",
        model: "Rio",
        year: 2017,
        owner: {
            fullName: "Laura Molina Salazar",
            id: 5678901238,
            phone: "+34 681 234 573",
            email: "laura.molina@gmail.com"
        },
        holder: {
            fullName: "Rafael Oliver Gómez",
            id: 6789012349,
            phone: "+34 689 876 545",
            email: "rafael.oliver@hotmail.com"
        },
        driver: {
            fullName: "Patricia Ruiz Lara",
            id: 7890123450,
            phone: "+34 682 345 675",
            email: "patricia.ruiz@yahoo.com"
        }
    },
    {
        plate: "YZA567",
        brand: "Volkswagen",
        model: "Polo",
        year: 2013,
        owner: {
            fullName: "Miguel Ángel Blanco",
            id: 8901234560,
            phone: "+34 691 234 576",
            email: "miguel.blanco@gmail.com"
        },
        holder: {
            fullName: "Inés Moreno Vega",
            id: 9012345671,
            phone: "+34 699 876 546",
            email: "ines.moreno@hotmail.com"
        },
        driver: {
            fullName: "Raúl Ortiz Medina",
            id: 1234567894,
            phone: "+34 692 345 676",
            email: "raul.ortiz@yahoo.com"
        }
    },
    {
        plate: "BCD890",
        brand: "Peugeot",
        model: "208",
        year: 2014,
        owner: {
            fullName: "Clara Domínguez Ruiz",
            id: 2345678905,
            phone: "+34 701 234 577",
            email: "clara.dominguez@gmail.com"
        },
        holder: {
            fullName: "Mario Herrera García",
            id: 3456789016,
            phone: "+34 709 876 547",
            email: "mario.herrera@hotmail.com"
        },
        driver: {
            fullName: "Verónica Suárez López",
            id: 4567890127,
            phone: "+34 702 345 677",    
            email: "veronica.suarez@yahoo.com"
        }
    },
    {
        plate: "EFG123",
        brand: "Citroën",
        model: "C3",
        year: 2011,
        owner: {
            fullName: "Óscar Delgado Pardo",
            id: 5678901239,
            phone: "+34 711 234 578",
            email: "oscar.delgado@gmail.com"
        },
        holder: {
            fullName: "Sara Montes Ruiz",
            id: 6789012350,
            phone: "+34 719 876 548",
            email: "sara.montes@hotmail.com"
        },
        driver: {
            fullName: "Andrés Navarro Ruiz",
            id: 7890123451,
            phone: "+34 712 345 678",
            email: "andres.navarro@yahoo.com"
        }
    },
    {
        plate: "HIJ456",
        brand: "Hyundai",
        model: "Tucson",
        year: 2018,
        owner: {
            fullName: "Mónica Pérez Salgado",
            id: 8901234561,
            phone: "+34 721 234 579",
            email: "monica.perez@gmail.com"
        },
        holder: {
            fullName: "Óliver Castro Muñoz",
            id: 9012345672,
            phone: "+34 729 876 549",
            email: "oliver.castro@hotmail.com"
        },
        driver: {
            fullName: "Rebeca Ortiz Herrera",
            id: 1234567895,
            phone: "+34 722 345 679",
            email: "rebeca.ortiz@yahoo.com"
        }
    },
    {
        plate: "KLM789",
        brand: "Toyota",
        model: "Corolla",
        year: 2022,
        owner: {
            fullName: "Francisco Gil Navarro",
            id: 2345678906,
            phone: "+34 731 234 570",
            email: "francisco.gil@gmail.com"
        },
        holder: {
            fullName: "Beatriz Santos Pérez",
            id: 3456789017,
            phone: "+34 739 876 550",
            email: "beatriz.santos@hotmail.com"
        },
        driver: {
            fullName: "Pablo Ruiz Muñoz",
            id: 4567890128,
            phone: "+34 732 345 670",
            email: "pablo.ruiz@yahoo.com"
        }
    },
    {
        plate: "NOP012",
        brand: "Nissan",
        model: "Leaf",
        year: 2020,
        owner: {
            fullName: "Marta Lorente Vidal",
            id: 5678901240,
            phone: "+34 741 234 571",
            email: "marta.lorente@gmail.com"
        },
        holder: {
            fullName: "Sergio Molina López",
            id: 6789012351,
            phone: "+34 749 876 551",
            email: "sergio.molina@hotmail.com"
        },
        driver: {
            fullName: "Laura Herrera Ramos",
            id: 7890123452,
            phone: "+34 742 345 671",
            email: "laura.herrera@yahoo.com"
        }
    },
    {
        plate: "QRS345",
        brand: "Ford",
        model: "Focus",
        year: 2019,
        owner: {
            fullName: "Diego Ferrer Ortega",
            id: 8901234562,
            phone: "+34 751 234 572",
            email: "diego.ferrer@gmail.com"
        },
        holder: {
            fullName: "Alicia Campos Sanz",
            id: 9012345673,
            phone: "+34 759 876 552",
            email: "alicia.campos@hotmail.com"
        },
        driver: {
            fullName: "Víctor Ramos Blanco",
            id: 1234567896,
            phone: "+34 752 345 672",
            email: "victor.ramos@yahoo.com"
        }
    },
    {
        plate: "TUV678",
        brand: "Chevrolet",
        model: "Spark",
        year: 2017,
        owner: {
            fullName: "Cristina Reyes Montoya",
            id: 2345678907,
            phone: "+34 761 234 573",
            email: "cristina.reyes@gmail.com"
        },
        holder: {
            fullName: "Eduardo Muñoz Díaz",
            id: 3456789018,
            phone: "+34 769 876 553",
            email: "eduardo.munoz@hotmail.com"
        },
        driver: {
            fullName: "Carla López Vega",
            id: 4567890129,
            phone: "+34 762 345 673",
            email: "carla.lopez@yahoo.com"
        }
    },
    {
        plate: "WXY901",
        brand: "Mazda",
        model: "CX-30",
        year: 2021,
        owner: {
            fullName: "Pepe Ríos Morales",
            id: 5678901241,
            phone: "+34 771 234 574",
            email: "pepe.rios@gmail.com"
        },
        holder: {
            fullName: "Ana Torres Santiago",
            id: 6789012352,
            phone: "+34 779 876 554",
            email: "ana.torres@hotmail.com"
        },
        driver: {
            fullName: "Juan Pérez Ruiz",
            id: 7890123453,
            phone: "+34 772 345 674",
            email: "juan.perez@yahoo.com"
        }
    },
    {
        plate: "YZA234",
        brand: "Honda",
        model: "HR-V",
        year: 2023,
        owner: {
            fullName: "Sonia Blanco Puig",
            id: 8901234563,
            phone: "+34 781 234 575",
            email: "sonia.blanco@gmail.com"
        },
        holder: {
            fullName: "Luis Herrero Franco",
            id: 9012345674,
            phone: "+34 789 876 555",
            email: "luis.herrero@hotmail.com"
        },
        driver: {
            fullName: "Rosa Moreno Castillo",
            id: 1234567897,
            phone: "+34 782 345 675",
            email: "rosa.moreno@yahoo.com"
        }
    },
    {
        plate: "BCD567",
        brand: "Kia",
        model: "Sportage",
        year: 2018,
        owner: {
            fullName: "Gabriel Soler Ortiz",
            id: 2345678908,
            phone: "+34 791 234 576",
            email: "gabriel.soler@gmail.com"
        },
        holder: {
            fullName: "Laura Villena Cruz",
            id: 3456789019,
            phone: "+34 799 876 556",
            email: "laura.villena@hotmail.com"
        },
        driver: {
            fullName: "David Martín García",
            id: 4567890130,
            phone: "+34 792 345 676",
            email: "david.martin@yahoo.com"
        }
    },
    {
        plate: "EFG890",
        brand: "Volkswagen",
        model: "Golf",
        year: 2016,
        owner: {
            fullName: "Patricia Ruiz Sama",
            id: 5678901242,
            phone: "+34 701 234 577",
            email: "patricia.ruiz@gmail.com"
        },
        holder: {
            fullName: "Manuel García Palau",
            id: 6789012353,
            phone: "+34 709 876 557",	
            email: "manuel.garcia@hotmail.com"
        },
        driver: {
            fullName: "Cristina Pérez Soler",
            id: 7890123454,
            phone: "+34 702 345 677",
            email: "cristina.perez@yahoo.com"
        }
    }
];

// localStorage.setItem('vehiculos', JSON.stringify(exampleVehicles));
