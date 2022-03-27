interface Product {
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
}

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