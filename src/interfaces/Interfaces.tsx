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