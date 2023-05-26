
import { v4 as uuidv4 } from 'uuid';

class User {
    private _id!: string;
    private _name!: string;
    private _age!: number;
    private _cart: Item[] = [];

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get cart(): Item[] {
        return this._cart;
    }
    public set cart(value: Item[]) {
        this._cart = value;
    }
    addToCart(item: Item): void {
        this._cart.push(item);
    }
    removeFromCart(item: Item): void {
        let res = []
        for (let i = 0; i < this._cart.length; i++) {
            if (this._cart[i].id !== item.id) {
                res.push(this._cart[i])
            }
        }
        this._cart = res;
    }
    removeQuantityFromCart(item: Item, quantity: number): void {
        for (let i = 0; i < this._cart.length; i++) {
            if (this._cart[i].id === item.id) {
                this._cart.splice(i, quantity);
            }
        }
    }
    cartTotal(): number {
        let total = 0;
        for (let i = 0; i < this._cart.length; i++) {
            total += this._cart[i].price;
        }
        return Math.round(total * 100) / 100;
    }
    printCart(): void {
        console.log('Cart: ');
        for (let i = 0; i < this._cart.length; i++) {
            console.log(this._cart[i].name);   // remove .name to print all info
        }
    }
}

class Item {
    private _id: string = uuidv4();
    private _name: string = '';
    private _price: number = 0;
    private _description: string = '';

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
}

class Shop {
    private _items: Item[] = [];

    public get items(): Item[] {
        return this._items;
    }
    public set items(value: Item[]) {
        this._items = value;
    }
    constructor() {
        let itemA = new Item();
        itemA.name = 'Shirt';
        itemA.price = 19.99;
        itemA.description = 'Nike Shirt';
        this._items.push(itemA);
        
        let itemB = new Item();
        itemB.name = 'Socks';
        itemB.price = 15.99;
        itemB.description = 'Nike Soccer Socks';
        this._items.push(itemB);

        let itemC = new Item();
        itemC.name = 'Shoes';
        itemC.price = 59.99;
        itemC.description = 'Nike Shoes';
        this._items.push(itemC);
    }
}



let shop = new Shop();
let user = new User();
user.name = 'Vinh';
user.age = 30;
user.addToCart(shop.items[0]);
user.printCart();
user.addToCart(shop.items[1]);
user.addToCart(shop.items[1]);
user.addToCart(shop.items[1]);
user.printCart();
user.removeQuantityFromCart(shop.items[1], 2);
user.printCart();
user.addToCart(shop.items[2]);
user.addToCart(shop.items[2]);
user.addToCart(shop.items[2]);
user.printCart();
console.log(user.cartTotal());
user.removeFromCart(shop.items[2]);
user.printCart();
console.log(user.cartTotal());








