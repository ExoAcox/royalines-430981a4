export const errorHelper = (error: unknown): FetchError => {
    if (error instanceof Error || typeof error === "object") {
        return error;
    } else {
        return { message: String(error) };
    }
};


export const convertCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID').format(value)
}

export const parseCurrency = (value: string) => {
    return Number(value.replace(/[^0-9,-]+/g, '').replace(',', '.'));
}

export const formatInputNumber = (value: string) => {
    if (value.startsWith("0")) {
        return Number(value.slice(1));
    } else {
        return Number(value)
    }
}