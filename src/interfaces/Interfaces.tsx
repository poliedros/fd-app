export interface Item {
    id: string,
    name: string,
    description: string,
    type: string,
    subType: string,
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
    city: string,
    code: string,           //unnecessary
    deliveryPrice: string,
    email: string,
    id: string,
    items: Item[],
    logoImage: string,
    name: string,
    paymentMethods: string,
    phoneNumber: string,
    socialMedia: string,
    theme: string,
    type: string,
    urlName: string,
    _id: string
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
    urlName: string,
    firstItem: string,
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