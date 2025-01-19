// export const apiUrl = "http://localhost:5000/api/v1/";
export const apiUrl = "https://job-backend-sjwq.onrender.com/api/v1/";

export const getAuthToken = () => {
    try {
        const tokenData = JSON.parse(localStorage.getItem("token"));
        if (tokenData?.token) {
            return `Bearer ${tokenData.token}`;
        }
    } catch (error) {
    }
    return null;
}

export const formateCustomerData = (generalInfo, addresses) => {
    const billingAddress = addresses[0] || {};
    const shippingAddress = addresses[1] || {};

    return {
        customerName: generalInfo.name || "",
        email: generalInfo.email || "",
        telephone: generalInfo.phoneNumber || "",
        receivableAccount: "",
        payableAccount: "",
        paymentTerm: "",
        billingAddressOne: billingAddress.address1 || "",
        billingAddressSec: billingAddress.address2 || "",
        billingState: billingAddress.state || "",
        billingStateCode: "",
        billingCity: billingAddress.city || "",
        billingPostalCode: billingAddress.postalCode || "",
        shippingAddressOne: billingAddress.address1 || "",
        shippingAddressSec: billingAddress.address2 || "",
        country: billingAddress.country || "",
        shippingState: billingAddress.state || "",
        shippingStateCode: "",
        shippingCity: billingAddress.city || "",
        shippingPostalCode: billingAddress.postalCode || "",
        gstTreatmentType: "",
        gstIn: ""
    };
};


export const calculateInvoiceAmount = ({ quantity, price, discount, tax }) => {
    const qty = parseFloat(quantity) || 0;
    const unitPrice = parseFloat(price) || 0;
    const discountAmount = parseFloat(discount) || 0;
    const taxRate = parseFloat(tax) || 0;

    const totalPrice = qty * unitPrice;
    const discountedPrice = totalPrice - discountAmount;
    const taxAmount = (taxRate / 100) * discountedPrice;

    return discountedPrice + taxAmount;
};

export const calculateInvoiceTotals = (data) => {
    let subTotal = 0;
    let totalDiscount = 0;
    let totalTax = 0;
    let tcs = 0;
    let roundOff = 0;

    data.forEach(item => {
        const itemPrice = parseFloat(item.price) || 0;
        const itemQty = parseFloat(item.quantity) || 0;
        const itemDiscount = parseFloat(item.discount) || 0;
        const itemTax = parseFloat(item.tax) || 0;

        const itemTotal = itemPrice * itemQty;
        subTotal += itemTotal;
        totalDiscount += itemDiscount;
        totalTax += ((itemTotal - itemDiscount) * itemTax) / 100;
    });

    const totalBeforeTax = subTotal - totalDiscount;
    const total = totalBeforeTax + totalTax;

    return {
        subTotal: `${subTotal.toFixed(2)}`,
        totalDiscount: `${totalDiscount.toFixed(2)}`,
        beforeTax: `${totalBeforeTax.toFixed(2)}`,
        tax: `${totalTax.toFixed(2)}`,
        tcs: `${tcs.toFixed(2)}`,
        roundOff: roundOff,
        total: `${(total).toFixed(2)}`
    };
};
