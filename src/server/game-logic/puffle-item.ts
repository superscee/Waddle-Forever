import { StaticDataTable } from "../../common/static-table";

type PuffleItemType = 'care' | 'food' | 'play' | 'head' | 'game' | 'sleep';
type PlayType = 'none' | 'superplay' | 'bubblegum' | 'play' | 'sleep';

type PuffleItem = {
  id: number
  parentId: number
  name: string
  type: PuffleItemType
  playExternal: PlayType
  cost: number
  quantity: number
  member: boolean
  foodEffect: number
  restEffect: number
  playEffect: number
  cleanEffect: number
}

export const PUFFLE_ITEMS = new StaticDataTable<PuffleItem, [
  'id',
  'parentId',
  'name',
  'type',
  'playExternal',
  'cost',
  'quantity',
  'member',
  'foodEffect',
  'restEffect',
  'playEffect',
  'cleanEffect'
]>([
  'id',
  'parentId',
  'name',
  'type',
  'playExternal',
  'cost',
  'quantity',
  'member',
  'foodEffect',
  'restEffect',
  'playEffect',
  'cleanEffect'
],
[
  [1, 1, 'Brush', 'care', 'none', 0, 1, false, -2, -2, 5, 5],
  [3, 3, 'Puffle O\'s', 'food', 'none', 0, 1, false, 50, -5, -5, -1],
  [4, 4, 'Cookie', 'food', 'none', 10, 1, false, 15, -7, -20, -1],
  [5, 5, 'Bubblegum', 'food', 'bubblegum', 5, 1, false, 0, -2, -2, -3],
  [6, 6, 'Carrot', 'food', 'none', 4, 1, false, 50, -5, -5, 0],
  [7, 7, 'Pizza', 'food', 'none', 5, 1, false, 30, -8, -10, -1],
  [8, 8, 'Bath', 'care', 'none', 0, 1, false, -5, -5, 10, 100],
  [9, 6, 'Bunch of 5 Carrots', 'food', 'none', 20, 5, false, 0, 0, 0, 0],
  [10, 6, '10 Carrots', 'food', 'none', 50, 10, false, 0, 0, 0, 0],
  [11, 7, 'Box of Pizza [8 Slices]', 'food', 'none', 40, 8, false, 0, 0, 0, 0],
  [12, 7, '10 Slices of Pizza', 'food', 'none', 40, 10, false, 0, 0, 0, 0],
  [13, 7, '3 Boxes of Pizza [24 Slices]', 'food', 'none', 120, 24, false, 0, 0, 0, 0],
  [14, 14, 'Red Puffle\'s Cannon', 'play', 'superplay', 200, 1, true, -5, -5, 40, -10],
  [15, 15, 'Blue Puffle\'s Bouncy Ball', 'play', 'superplay', 200, 1, true, -5, -5, 40, -10],
  [16, 16, 'Green Puffle\'s Propellor Cap', 'play', 'superplay', 200, 1, true, -5, -5, 40, -10],
  [17, 17, 'Purple Puffle\'s Disco Ball', 'play', 'superplay', 200, 1, true, -5, -5, 40, -10],
  [18, 18, 'Yellow Puffle\'s Director\'s Chair & Camera', 'play', 'superplay', 200, 1, true, -5, -5, 40, -10],
  [19, 19, 'Black Puffle\'s Hot Sauce', 'play', 'superplay', 200, 1, true, -5, -5, 40, -10],
  [20, 20, 'White Puffle\'s Skate', 'play', 'superplay', 200, 1, true, -5, -5, 40, -10],
  [21, 21, 'Pink Puffle\'s Trampoline', 'play', 'superplay', 200, 1, true, -5, -5, 40, -10],
  [22, 22, 'Brown Puffle\'s Rocket', 'play', 'superplay', 200, 1, true, -5, -5, 40, -10],
  [23, 23, 'Orange Puffle\'s Wagon', 'play', 'superplay', 200, 1, true, -5, -5, 40, -10],
  [24, 5, 'Pack of Bubble Gum [10 pieces]', 'food', 'bubblegum', 20, 10, false, 0, 0, 0, 0],
  [25, 4, '10 Cookies', 'food', 'none', 30, 10, false, 0, 0, 0, 0],
  [26, 3, '10 Puffle O\'s', 'food', 'none', 50, 10, false, 0, 0, 0, 0],
  [27, 27, 'Ball', 'play', 'play', 0, 1, false, -2, -2, 30, -5],
  [28, 28, 'Skipping Rope', 'play', 'play', 0, 1, false, -2, -2, 30, -5],
  [29, 29, 'Bowling Pins', 'play', 'play', 0, 1, false, -2, -2, 30, -5],
  [30, 30, 'Unicycle', 'play', 'play', 0, 1, false, -2, -2, 30, -5],
  [31, 31, 'Skateboard', 'play', 'play', 0, 1, false, -2, -2, 30, -5],
  [32, 32, 'Paint Brush', 'play', 'play', 0, 1, false, -2, -2, 30, -5],
  [33, 33, 'Snowflake', 'play', 'play', 0, 1, false, -2, -2, 30, -5],
  [34, 34, 'Hoolahoop', 'play', 'play', 0, 1, false, -2, -2, 30, -5],
  [35, 35, 'Bubble Wand', 'play', 'play', 0, 1, false, -2, -2, 30, -5],
  [36, 36, 'Plasma Ball', 'play', 'play', 0, 1, false, -2, -2, 30, -5],
  [37, 37, 'Sleep', 'sleep', 'sleep', 0, 1, false, -5, 80, -10, 0],
  [38, 38, 'Game', 'game', 'play', 0, 1, false, -10, -10, 70, -15],
  [39, 39, 'Franken Hat', 'head', 'none', 200, 1, false, 0, 0, 0, 0],
  [46, 46, 'Pharaoh Hat', 'head', 'none', 200, 1, false, 0, 0, 0, 0],
  [47, 47, 'Sombrero', 'head', 'none', 200, 1, true, 0, 0, 0, 0],
  [48, 48, 'Pirate Hat', 'head', 'none', 200, 1, true, 0, 0, 0, 0],
  [49, 49, 'Princess Cap', 'head', 'none', 200, 1, true, 0, 0, 0, 0],
  [50, 50, 'Night Cap', 'head', 'none', 200, 1, false, 0, 0, 0, 0],
  [51, 51, 'Propeller Cap', 'head', 'none', 200, 1, true, 0, 0, 0, 0],
  [52, 52, 'Tiara', 'head', 'none', 200, 1, true, 0, 0, 0, 0],
  [53, 53, 'Headphones', 'head', 'none', 200, 1, true, 0, 0, 0, 0],
  [54, 54, 'Gear Hat', 'head', 'none', 200, 1, true, 0, 0, 0, 0],
  [55, 55, 'Jester Hat', 'head', 'none', 200, 1, true, 0, 0, 0, 0],
  [56, 56, 'Crown', 'head', 'none', 200, 1, true, 0, 0, 0, 0],
  [58, 58, 'Snowflake Helmet', 'head', 'none', 200, 1, false, 0, 0, 0, 0],
  [59, 59, 'Gold Viking Helmet', 'head', 'none', 200, 1, false, 0, 0, 0, 0],
  [60, 60, 'Top Hat', 'head', 'none', 200, 1, false, 0, 0, 0, 0],
  [61, 61, 'Heavy Metal Hair', 'head', 'none', 200, 1, false, 0, 0, 0, 0],
  [62, 62, 'Jolly Roger Bandanna', 'head', 'none', 200, 1, false, 0, 0, 0, 0],
  [63, 63, 'The Big Bang', 'head', 'none', 200, 1, false, 0, 0, 0, 0],
  [64, 64, 'The Overgrown', 'head', 'none', 200, 1, false, 0, 0, 0, 0],
  [65, 65, 'The Scene-Stealer', 'head', 'none', 200, 1, false, 0, 0, 0, 0],
  [66, 66, 'The Rad Scientist', 'head', 'none', 200, 1, false, 0, 0, 0, 0],
  [67, 67, 'Disco Dome', 'head', 'none', 200, 1, false, 0, 0, 0, 0],
  [68, 68, 'Candy Cane Cap', 'head', 'none', 200, 1, true, 0, 0, 0, 0],
  [69, 69, 'Turquoise Toque', 'head', 'none', 200, 1, false, 0, 0, 0, 0],
  [70, 70, 'Mini Polka Dot Puffle Hat', 'head', 'none', 0, 1, false, 0, 0, 0, 0],
  [71, 71, 'Blue Earmuffs', 'head', 'none', 200, 1, true, 0, 0, 0, 0],
  [72, 72, 'Pink Bow', 'head', 'none', 200, 1, true, 0, 0, 0, 0],
  [73, 73, 'Mini Squid Lid', 'head', 'none', 200, 1, true, 0, 0, 0, 0],
  [74, 77, '10 Slices of Cake', 'food', 'none', 40, 10, false, 0, 0, 0, 0],
  [75, 78, '10 Wedges of Cheese', 'food', 'none', 40, 10, false, 0, 0, 0, 0],
  [76, 79, '10 Apples', 'food', 'none', 50, 10, false, 0, 0, 0, 0],
  [77, 77, 'Slice of Cake', 'food', 'none', 8, 1, false, 30, -9, -20, -1],
  [78, 78, 'Wedge of Cheese', 'food', 'none', 8, 1, false, 30, -5, -8, -1],
  [79, 79, 'Apple', 'food', 'none', 4, 1, false, 50, -5, -5, 0],
  [80, 80, 'Jingle Jangle Hat', 'head', 'none', 0, 1, false, 0, 0, 0, 0],
  [81, 81, 'Knight Helmet', 'head', 'none', 0, 1, false, 0, 0, 0, 0],
  [82, 82, 'Sherwood Hat', 'head', 'none', 0, 1, false, 0, 0, 0, 0],
  [83, 83, 'Wizard Hat', 'head', 'none', 0, 1, false, 0, 0, 0, 0],
  [84, 84, 'Princess Braid', 'head', 'none', 0, 1, false, 0, 0, 0, 0],
  [85, 85, 'Surf Swoop', 'head', 'none', 0, 1, false, 0, 0, 0, 0],
  [86, 86, 'Sundae Swirl', 'head', 'none', 0, 1, false, 0, 0, 0, 0],
  [87, 87, 'All-Star Curls', 'head', 'none', 0, 1, false, 0, 0, 0, 0],
  [88, 88, 'Shock of Hair', 'head', 'none', 0, 1, false, 0, 0, 0, 0],
  [89, 89, 'Chocolate Beret', 'head', 'none', 0, 1, false, 0, 0, 0, 0],
  [90, 90, 'Touchdown Dome', 'head', 'none', 0, 1, false, 0, 0, 0, 0],
  [91, 91, 'Rainbow Fro', 'head', 'none', 0, 1, false, 0, 0, 0, 0],
  [92, 92, 'Green 180 Cap', 'head', 'none', 0, 1, false, 0, 0, 0, 0],
  [93, 93, 'Blast Off Cap', 'head', 'none', 0, 1, false, 0, 0, 0, 0],
  [94, 94, 'Swing Batta Batta Hat', 'head', 'none', 0, 1, false, 0, 0, 0, 0],
  [95, 95, 'The High Flyer', 'head', 'none', 0, 1, false, 0, 0, 0, 0],
  [96, 96, 'The Workout Curl', 'head', 'none', 0, 1, false, 0, 0, 0, 0],
  [97, 97, 'Ninja Mask', 'head', 'none', 0, 1, false, 0, 0, 0, 0],
  [98, 98, 'The Master Hat', 'head', 'none', 0, 1, false, 0, 0, 0, 0],
  [99, 99, 'Polka Dot Pirate', 'head', 'none', 4000, 1, true, 0, 0, 0, 0],
  [100, 100, 'First Mate Bandana', 'head', 'none', 0, 1, false, 0, 0, 0, 0],
  [101, 101, 'The Stone-Age Roller', 'head', 'none', 200, 1, true, 0, 0, 0, 0],
  [102, 102, 'The Warrior', 'head', 'none', 200, 1, true, 0, 0, 0, 0],
  [103, 103, 'Super Cloud Toy', 'play', 'play', 0, 1, true, -2, -2, 30, -5],
  [104, 104, 'R2-D2 Helmet', 'head', 'none', 200, 1, true, 0, 0, 0, 0],
  [105, 105, 'Pretzel', 'food', 'none', 65000, 1, false, 30, -3, -5, -3],
  [106, 106, 'Stinky Cheese', 'food', 'none', 65000, 1, false, 20, -2, -10, -5],
  [107, 107, 'Watermelon', 'food', 'none', 65000, 1, false, 50, -1, -1, -10],
  [108, 108, 'Sock', 'food', 'none', 65000, 1, false, 40, -1, -10, -10],
  [109, 109, 'Tacos', 'food', 'none', 65000, 1, false, 40, -3, -5, -5],
  [110, 110, 'Hummus and Pita', 'food', 'none', 65000, 1, false, 20, -5, -1, -1],
  [111, 111, 'Yogurt Parfait', 'food', 'none', 65000, 1, false, 10, -3, -2, -2],
  [112, 112, 'Fish Burger', 'food', 'none', 65000, 1, false, 50, -5, -5, -10],
  [113, 113, 'Ice Cream Sandwich', 'food', 'none', 65000, 1, false, 20, -3, -5, -1],
  [114, 114, 'Popcorn', 'food', 'none', 65000, 1, false, 10, -1, -3, -1],
  [115, 115, 'Rainbow Lollipop', 'food', 'none', 65000, 1, false, 20, -10, 5, -1],
  [117, 117, 'Deluxe', 'food', 'none', 10, 1, true, 100, 0, 0, 0],
  [119, 119, 'Candy Deluxe', 'food', 'none', 10, 1, true, 100, 0, 0, 0],
  [121, 121, 'Pepperoni', 'food', 'none', 5, 1, false, 30, -8, -10, -1],
  [122, 122, 'R - Dig Helmet', 'head', 'none', 0, 1, false, 0, 0, 0, 0],
  [123, 123, 'Pumpkin Lid', 'head', 'none', 0, 1, true, 0, 0, 0, 0],
  [125, 125, 'Gold Jackhammer', 'play', 'play', 0, 1, false, -2, -2, 30, -5],
  [126, 126, 'Gold O\'berry', 'food', 'none', 10, 1, true, 0, 0, 0, 0],
  [127, 127, 'Golden Headphones', 'head', 'none', 0, 1, true, 0, 0, 0, 0],
  [128, 128, 'Chocolate Coin', 'food', 'none', 65000, 1, false, 30, -9, -20, -1],
  [129, 129, 'Eat Station', 'care', 'none', 0, 1, false, 15, 0, 0, 0],
  [130, 130, 'Play Station', 'care', 'none', 0, 1, false, 0, 0, 20, 0],
  [131, 131, 'Clean Station', 'care', 'none', 0, 1, false, 0, 0, 0, 50],
  [132, 132, 'Rest Station', 'care', 'none', 0, 1, false, 0, 50, 0, 0],
  [133, 133, 'Gold Puffle\'s Dump Truck', 'play', 'superplay', 200, 1, true, -5, -5, 40, -10],
  [134, 134, 'Rainbow Puffle\'s Royal Throne', 'play', 'superplay', 200, 1, true, -5, -5, 40, -10],
  [135, 146, '10 Pickles', 'food', 'none', 40, 10, false, 0, 0, 0, 0],
  [136, 145, '10 Pieces of Broccoli', 'food', 'none', 50, 10, false, 0, 0, 0, 0],
  [137, 144, '10 Dragon Fruits', 'food', 'none', 50, 10, false, 0, 0, 0, 0],
  [138, 143, '10 Cayenne Peppers', 'food', 'none', 40, 10, false, 0, 0, 0, 0],
  [139, 139, 'Mining Helmet', 'head', 'none', 200, 1, true, 0, 0, 0, 0],
  [140, 140, 'Safari Hat', 'head', 'none', 200, 1, true, 0, 0, 0, 0],
  [141, 141, 'Adventurer\'s Fedora', 'head', 'none', 200, 1, true, 0, 0, 0, 0],
  [142, 142, 'Polka Puffle Hat', 'head', 'none', 0, 1, false, 0, 0, 0, 0],
  [143, 143, 'Cayenne Pepper', 'food', 'none', 4, 1, false, 20, -5, -5, -1],
  [144, 144, 'Dragon Fruit', 'food', 'none', 5, 1, false, 50, -5, -5, 0],
  [145, 145, 'Broccoli', 'food', 'none', 5, 1, false, 50, -5, -5, 0],
  [146, 146, 'Pickle', 'food', 'none', 4, 1, false, 30, -5, -8, -1],
  [147, 147, 'Sheriff Stetson', 'head', 'none', 4000, 1, true, 0, 0, 0, 0],
  [148, 148, 'Quasar Helmet', 'head', 'none', 4000, 1, true, 0, 0, 0, 0],
  [149, 149, 'Aviator Hat', 'head', 'none', 200, 1, true, 0, 0, 0, 0],
  [150, 150, '4 Quart Pot', 'head', 'none', 200, 1, true, 0, 0, 0, 0],
  [151, 151, 'Flap Hat', 'head', 'none', 200, 1, true, 0, 0, 0, 0],
  [152, 152, 'Chef\'s Hat', 'head', 'none', 200, 1, true, 0, 0, 0, 0],
  [153, 153, 'Shrimp', 'food', 'none', 4, 1, false, 20, -5, -5, -1],
  [154, 153, '10 Shrimp', 'food', 'none', 40, 10, false, 0, 0, 0, 0],
  [155, 155, 'Biscuit Treats', 'food', 'none', 4, 1, false, 20, -5, 0, -1],
  [156, 155, '10 Biscuit Treats', 'food', 'none', 40, 10, false, 0, 0, 0, 0],
  [157, 157, 'Rainbow Matrix Hat', 'head', 'none', 0, 40, true, 0, 0, 0, 0],
  [158, 158, 'Drum Roll', 'head', 'none', 0, 1, true, 0, 0, 0, 0],
  [159, 159, 'Swashbuckler Hat', 'head', 'none', 0, 1, true, 0, 0, 0, 0]
]);
