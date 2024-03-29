import americano_pic_1_portrait from '../../assets/americano_pic_1_portrait.png';
import americano_pic_1_square from '../../assets/americano_pic_1_square.png';
import americano_pic_2_portrait from '../../assets/americano_pic_2_portrait.png';
import americano_pic_2_square from '../../assets/americano_pic_2_square.png';
import americano_pic_3_portrait from '../../assets/americano_pic_3_portrait.png';
import americano_pic_3_square from '../../assets/americano_pic_3_square.png';

import black_coffee_pic_1_square from '../../assets/black_coffee_pic_1_square.png';
import black_coffee_pic_1_portrait from '../../assets/black_coffee_pic_1_portrait.png';
import black_coffee_pic_2_square from '../../assets/black_coffee_pic_2_square.png';
import black_coffee_pic_2_portrait from '../../assets/black_coffee_pic_2_portrait.png';
import black_coffee_pic_3_square from '../../assets/black_coffee_pic_3_square.png';
import black_coffee_pic_3_portrait from '../../assets/black_coffee_pic_3_portrait.png';

import cappuccino_pic_1_square from '../../assets/cappuccino_pic_1_square.png';
import cappuccino_pic_1_portrait from '../../assets/cappuccino_pic_1_portrait.png';
import cappuccino_pic_2_square from '../../assets/cappuccino_pic_2_square.png';
import cappuccino_pic_2_portrait from '../../assets/cappuccino_pic_2_portrait.png';
import cappuccino_pic_3_square from '../../assets/cappuccino_pic_3_square.png';
import cappuccino_pic_3_portrait from '../../assets/cappuccino_pic_3_portrait.png';

import espresso_pic_1_square from '../../assets/espresso_pic_1_square.png';
import espresso_pic_1_portrait from '../../assets/espresso_pic_1_portrait.png';
import espresso_pic_2_square from '../../assets/espresso_pic_2_square.png';
import espresso_pic_2_portrait from '../../assets/espresso_pic_2_portrait.png';
import espresso_pic_3_square from '../../assets/espresso_pic_3_square.png';
import espresso_pic_3_portrait from '../../assets/espresso_pic_3_portrait.png';

import latte_pic_1_square from '../../assets/latte_pic_1_square.png';
import latte_pic_1_portrait from '../../assets/latte_pic_1_portrait.png';
import latte_pic_2_square from '../../assets/latte_pic_2_square.png';
import latte_pic_2_portrait from '../../assets/latte_pic_2_portrait.png';
import latte_pic_3_square from '../../assets/latte_pic_3_square.png';
import latte_pic_3_portrait from '../../assets/latte_pic_3_portrait.png';

import macchiato_pic_1_square from '../../assets/macchiato_pic_1_square.png';
import macchiato_pic_1_portrait from '../../assets/macchiato_pic_1_portrait.png';
import macchiato_pic_2_square from '../../assets/macchiato_pic_2_square.png';
import macchiato_pic_2_portrait from '../../assets/macchiato_pic_2_portrait.png';
import macchiato_pic_3_square from '../../assets/macchiato_pic_3_square.png';
import macchiato_pic_3_portrait from '../../assets/macchiato_pic_3_portrait.png';

const CoffeeData = [
  {
    id: 'C1',
    name: 'Americano',
    description: `The Americano is another popular type of coffee drink, and it's very easy to make! It's just espresso with hot water dripping over it. The name came about during World War II when European baristas added water to their espresso drinks for the American soldiers stationed there. The resulting drink had a smoother, less concentrated flavour than espresso and thus the Americano was born.`,
    roasted: 'Medium Roasted',
    imagelink_square: americano_pic_1_square,
    imagelink_portrait: americano_pic_1_portrait,
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 0,
  },
  {
    id: 'C2',
    name: 'Americano',
    description: `The Americano is another popular type of coffee drink, and it's very easy to make! It's just espresso with hot water dripping over it. The name came about during World War II when European baristas added water to their espresso drinks for the American soldiers stationed there. The resulting drink had a smoother, less concentrated flavour than espresso and thus the Americano was born.`,
    roasted: 'Medium Roasted',
    imagelink_square: americano_pic_2_square,
    imagelink_portrait: americano_pic_2_portrait,
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.2,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 1,
  },
  {
    id: 'C3',
    name: 'Americano',
    description: `The Americano is another popular type of coffee drink, and it's very easy to make! It's just espresso with hot water dripping over it. The name came about during World War II when European baristas added water to their espresso drinks for the American soldiers stationed there. The resulting drink had a smoother, less concentrated flavour than espresso and thus the Americano was born.`,
    roasted: 'Medium Roasted',
    imagelink_square: americano_pic_3_square,
    imagelink_portrait: americano_pic_3_portrait,
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.5,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 2,
  },
  {
    id: 'C4',
    name: 'Black Coffee',
    description: `Black coffee is arguably the most common type of coffee drink out there. Its popularity can be mainly attributed to how easy it is to make this beverage, be it drip, pour-over, French press, or anything else. Black coffee is usually served with no add-ins.`,
    roasted: 'Medium Roasted',
    imagelink_square: black_coffee_pic_1_square,
    imagelink_portrait: black_coffee_pic_1_portrait,
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.4,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 3,
  },
  {
    id: 'C5',
    name: 'Black Coffee',
    description: `Black coffee is arguably the most common type of coffee drink out there. Its popularity can be mainly attributed to how easy it is to make this beverage, be it drip, pour-over, French press, or anything else. Black coffee is usually served with no add-ins.`,
    roasted: 'Medium Roasted',
    imagelink_square: black_coffee_pic_2_square,
    imagelink_portrait: black_coffee_pic_2_portrait,
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.9,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 4,
  },
  {
    id: 'C6',
    name: 'Black Coffee',
    description: `Black coffee is arguably the most common type of coffee drink out there. Its popularity can be mainly attributed to how easy it is to make this beverage, be it drip, pour-over, French press, or anything else. Black coffee is usually served with no add-ins.`,
    roasted: 'Medium Roasted',
    imagelink_square: black_coffee_pic_3_square,
    imagelink_portrait: black_coffee_pic_3_portrait,
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.1,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 5,
  },
  {
    id: 'C7',
    name: 'Cappucchino',
    description: `Cappuccinos are a classic Italian type of coffee drink made of espresso, steamed milk, and thick foam in equal parts. The name comes from the resemblance to the hoods worn by Capuchin monks. Making cappuccino is relatively easy and can be done at home too if you know how to make espresso.`,
    roasted: 'Medium Roasted',
    imagelink_square: cappuccino_pic_1_square,
    imagelink_portrait: cappuccino_pic_1_portrait,
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.3,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 6,
  },
  {
    id: 'C8',
    name: 'Cappucchino',
    description: `Cappuccinos are a classic Italian type of coffee drink made of espresso, steamed milk, and thick foam in equal parts. The name comes from the resemblance to the hoods worn by Capuchin monks. Making cappuccino is relatively easy and can be done at home too if you know how to make espresso.`,
    roasted: 'Medium Roasted',
    imagelink_square: cappuccino_pic_2_square,
    imagelink_portrait: cappuccino_pic_2_portrait,
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 7,
  },
  {
    id: 'C9',
    name: 'Cappucchino',
    description: `Cappuccinos are a classic Italian type of coffee drink made of espresso, steamed milk, and thick foam in equal parts. The name comes from the resemblance to the hoods worn by Capuchin monks. Making cappuccino is relatively easy and can be done at home too if you know how to make espresso.`,
    roasted: 'Medium Roasted',
    imagelink_square: cappuccino_pic_3_square,
    imagelink_portrait: cappuccino_pic_3_portrait,
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.4,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 8,
  },
  {
    id: 'C10',
    name: 'Espresso',
    description: `Espresso is made by forcing nearly boiling water through finely-ground coffee beans, which results in a concentrated, syrup-like coffee drink. This is the base for many Italian beverages in coffee shops. When compared to regular brewed coffee, espresso is much stronger than the other types of coffee drinks. Espressos are enjoyed in shots where a single shot is one ounce and a long (single and double) shot is two ounces in amount, respectively.`,
    roasted: 'Medium Roasted',
    imagelink_square: espresso_pic_1_square,
    imagelink_portrait: espresso_pic_1_portrait,
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.3,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 9,
  },
  {
    id: 'C11',
    name: 'Espresso',
    description: `Espresso is made by forcing nearly boiling water through finely-ground coffee beans, which results in a concentrated, syrup-like coffee drink. This is the base for many Italian beverages in coffee shops. When compared to regular brewed coffee, espresso is much stronger than the other types of coffee drinks. Espressos are enjoyed in shots where a single shot is one ounce and a long (single and double) shot is two ounces in amount, respectively.`,
    roasted: 'Medium Roasted',
    imagelink_square: espresso_pic_2_square,
    imagelink_portrait: espresso_pic_2_portrait,
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.2,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 10,
  },
  {
    id: 'C12',
    name: 'Espresso',
    description: `Espresso is made by forcing nearly boiling water through finely-ground coffee beans, which results in a concentrated, syrup-like coffee drink. This is the base for many Italian beverages in coffee shops. When compared to regular brewed coffee, espresso is much stronger than the other types of coffee drinks. Espressos are enjoyed in shots where a single shot is one ounce and a long (single and double) shot is two ounces in amount, respectively.`,
    roasted: 'Medium Roasted',
    imagelink_square: espresso_pic_3_square,
    imagelink_portrait: espresso_pic_3_portrait,
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.6,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 11,
  },
  {
    id: 'C13',
    name: 'Latte',
    description: `A latte is an espresso with steamed milk and a dollop of milk foam on top. This beverage is more prevalent in America than other coffee drinks like cappuccinos because it contains less foam, making it smoother and gentler for those with sensitive palettes. And if you want to spice up your latte, add some flavouring syrup. To make an iced version of this drink, simply pour espresso and steamed milk over ice cubes.`,
    roasted: 'Medium Roasted',
    imagelink_square: latte_pic_1_square,
    imagelink_portrait: latte_pic_1_portrait,
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.8,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 12,
  },
  {
    id: 'C14',
    name: 'Latte',
    description: `A latte is an espresso with steamed milk and a dollop of milk foam on top. This beverage is more prevalent in America than other coffee drinks like cappuccinos because it contains less foam, making it smoother and gentler for those with sensitive palettes. And if you want to spice up your latte, add some flavouring syrup. To make an iced version of this drink, simply pour espresso and steamed milk over ice cubes.`,
    roasted: 'Medium Roasted',
    imagelink_square: latte_pic_2_square,
    imagelink_portrait: latte_pic_2_portrait,
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.5,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 13,
  },
  {
    id: 'C15',
    name: 'Latte',
    description: `A latte is an espresso with steamed milk and a dollop of milk foam on top. This beverage is more prevalent in America than other coffee drinks like cappuccinos because it contains less foam, making it smoother and gentler for those with sensitive palettes. And if you want to spice up your latte, add some flavouring syrup. To make an iced version of this drink, simply pour espresso and steamed milk over ice cubes.`,
    roasted: 'Medium Roasted',
    imagelink_square: latte_pic_3_square,
    imagelink_portrait: latte_pic_3_portrait,
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.6,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 14,
  },
  {
    id: 'C16',
    name: 'Macchiato',
    description: `The word "macchiato" means spotted, so a macchiato espresso is an espresso with a splash of milk. Most coffee shops will top off this type of coffee drink with some foamed milk instead of just steamed milk for what's known as a traditional macchiato. `,
    roasted: 'Medium Roasted',
    imagelink_square: macchiato_pic_1_square,
    imagelink_portrait: macchiato_pic_1_portrait,
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.3,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 15,
  },
  {
    id: 'C17',
    name: 'Macchiato',
    description: `The word "macchiato" means spotted, so a macchiato espresso is an espresso with a splash of milk. Most coffee shops will top off this type of coffee drink with some foamed milk instead of just steamed milk for what's known as a traditional macchiato. `,
    roasted: 'Medium Roasted',
    imagelink_square: macchiato_pic_2_square,
    imagelink_portrait: macchiato_pic_2_portrait,
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.2,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 16,
  },
  {
    id: 'C18',
    name: 'Macchiato',
    description: `The word "macchiato" means spotted, so a macchiato espresso is an espresso with a splash of milk. Most coffee shops will top off this type of coffee drink with some foamed milk instead of just steamed milk for what's known as a traditional macchiato. `,
    roasted: 'Medium Roasted',
    imagelink_square: macchiato_pic_3_square,
    imagelink_portrait: macchiato_pic_3_portrait,
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.5,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 17,
  },
];
export default CoffeeData;
