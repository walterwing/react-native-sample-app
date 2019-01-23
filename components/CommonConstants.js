// This file contains some hard coded values for demonstration purpose only

export const userDetails = {
  contactName: 'Wing',
  userName: 'Wing',
  email: 'walterwing@hotmail.com',
  businessPhone: '9999999999999',
  mobilePhone: '',
};

export const accountNotifications = [
  {
    id: 'Account 1',
    paymentSMS: true,
    paymentEmail: false,
    invoiceSMS: false,
    invoiceEmail: true,
    orderSMS: false,
    orderEmail: false,
  },
  {
    id: 'Account 2',
    paymentSMS: false,
    paymentEmail: true,
    invoiceSMS: false,
    invoiceEmail: false,
    orderSMS: false,
    orderEmail: false,
  },
  {
    id: 'Account 3',
    paymentSMS: false,
    paymentEmail: false,
    invoiceSMS: false,
    invoiceEmail: true,
    orderSMS: false,
    orderEmail: false,
  },
  {
    id: 'Account 4',
    paymentSMS: false,
    paymentEmail: true,
    invoiceSMS: false,
    invoiceEmail: false,
    orderSMS: false,
    orderEmail: false,
  },
  {
    id: 'Account 5',
    paymentSMS: false,
    paymentEmail: false,
    invoiceSMS: false,
    invoiceEmail: false,
    orderSMS: false,
    orderEmail: true,
  },
  {
    id: 'Account 6',
    paymentSMS: false,
    paymentEmail: false,
    invoiceSMS: true,
    invoiceEmail: false,
    orderSMS: false,
    orderEmail: false,
  },
];

export const products = [
  { id: 0, code: '10001', name: 'Product 1' },
  { id: 1, code: '10002', name: 'Product 2' },
  { id: 2, code: '10003', name: 'Product 3' },
  { id: 3, code: '10004', name: 'Product 4' },
  { id: 4, code: '10005', name: 'Product 5' },
  { id: 5, code: '10006', name: 'Product 6' },
  { id: 6, code: '10007', name: 'Product 7' },
  { id: 7, code: '10008', name: 'Product 8' },
  { id: 8, code: '10009', name: 'Product 9' },
  { id: 9, code: '10010', name: 'Product 10' },
];

export const categories = [
  {
    id: 0,
    label: 'All Categories',
    value: 'all',
  },
  {
    id: 1,
    label: 'Clothing',
    value: 'clothing',
  },
  {
    id: 2,
    label: 'Garden',
    value: 'garden',
  },
  {
    id: 3,
    label: 'Electronics',
    value: 'electronics',
  },
  {
    id: 4,
    label: 'Sports',
    value: 'sports',
  },
  {
    id: 5,
    label: 'Books',
    value: 'books',
  },
  {
    id: 6,
    label: 'Music',
    value: 'music',
  },
  {
    id: 7,
    label: 'Movies',
    value: 'movies',
  },
  {
    id: 8,
    label: 'Food',
    value: 'food',
  },
  {
    id: 9,
    label: 'Specials',
    value: 'specials',
  },
];
