export interface Item {
    id: string,
    name: string,
    description: string,
    type: string,
    price: number,
    quantity: number,
    clientId: string,       //unnecessary
    code: string,           //unnecessary
    image: string,
    label: string,
    note: string
}

export interface Client {
    additionalInfo: string,
    address: string,
    code: string,           //unnecessary
    email: string,
    id: string,
    name: string,
    phoneNumber: string,
    items: Item[],
    type: string
}

export interface Product {
    type: string;
    image: string | undefined;
    description: string;
    id: number;
    label: string;
    title: string;
    name: string;
    half: string;
    quantity: number;
    price: number;
    note: string;
}

export interface Data {
    url: string,
    firstName: string,
    client: Client,
    products: Product[]
}

/* interface Product {
    productId: number;
    lable: string;
    type: string;
    name: string;
    quantity: string;
    price: number;
    note: string;
}

export interface Order {
    orderId: number;
    delivery: boolean;
    Payment: {
        type: string;
        cardBrand: string;
        exchange: number;
    };
    Client: {
        name: string;
        phoneNumber: string;
        email: string;
        address: string;
        addicionalInfo: string;
        city: string;
    };
    Products: Product[];
} */

/*interface Product {
    productId: number;
    title: string;
    type: string;
    name: string;
    count: string;
    unit: string;
    price: number;
    note: string;
    characteristics: {
        name: string;
        type: string;
        description: string;
        brand: string;
        unit: {
            type: string;
            name: string;
            quantinty: number;
        }
    }
}*/