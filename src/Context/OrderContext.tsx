// src/components/shared/Contexts/OrderContext.tsx
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface OrderContextType {
  accessToken: string;
  setAccessToken: (email: string) => void;
  userID: string;
  setUserID: (email: string) => void;
  email: string;
  setEmail: (email: string) => void;
  preferredLocation: string;
  setPreferredLocation: (preferredLocation: string) => void;
  paymentMethod: string;
  setPaymentMethod: (paymentMethod: string) => void;
  firstName: string;
  setFirstName: (firstName: string) => void;
  lastName: string;
  setLastName: (lastName: string) => void;
  city: string;
  setCity: (city: string) => void;
  town: string;
  setTown: (town: string) => void;
  street: string;
  setStreet: (street: string) => void;
  postCode: string;
  setPostCode: (postCode: string) => void;
  taxNumber: string;
  setTaxNumber: (taxNumber: string) => void;
  taxAdministrator: string;
  setTaxAdministrator: (taxAdministrator: string) => void;
  orderID: string;
  setOrderID: (orderID: string) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accesstoken') || "");
  const [userID, setUserID] = useState(localStorage.getItem('userid') || "");
  const [email, setEmail] = useState(localStorage.getItem('email') || "");
  const [preferredLocation, setPreferredLocation] = useState(localStorage.getItem('preferredLocation') || "");
  const [paymentMethod, setPaymentMethod] = useState(localStorage.getItem('paymentMethod') || "");
  const [firstName, setFirstName] = useState(localStorage.getItem('firstName') || "");
  const [lastName, setLastName] = useState(localStorage.getItem('lastName') || "");
  const [city, setCity] = useState(localStorage.getItem('city') || "");
  const [town, setTown] = useState(localStorage.getItem('town') || "");
  const [street, setStreet] = useState(localStorage.getItem('street') || "");
  const [postCode, setPostCode] = useState(localStorage.getItem('postCode') || "");
  const [taxNumber, setTaxNumber] = useState(localStorage.getItem('taxNumber') || "");
  const [taxAdministrator, setTaxAdministrator] = useState(localStorage.getItem('taxAdministrator') || "");
  const [orderID, setOrderID] = useState(localStorage.getItem('orderid') || "");


  useEffect(() => {
    localStorage.setItem('email', email);
  }, [email]);

  useEffect(() => {
    localStorage.setItem('preferredLocation', preferredLocation);
  }, [preferredLocation]);

  useEffect(() => {
    localStorage.setItem('paymentMethod', paymentMethod);
  }, [paymentMethod]);

  useEffect(() => {
    localStorage.setItem('firstName', firstName);
  }, [firstName]);

  useEffect(() => {
    localStorage.setItem('lastName', lastName);
  }, [lastName]);

  useEffect(() => {
    localStorage.setItem('city', city);
  }, [city]);

  useEffect(() => {
    localStorage.setItem('town', town);
  }, [town]);

  useEffect(() => {
    localStorage.setItem('street', street);
  }, [street]);

  useEffect(() => {
    localStorage.setItem('postCode', postCode);
  }, [postCode]);

  useEffect(() => {
    localStorage.setItem('taxNumber', taxNumber);
  }, [taxNumber]);

  useEffect(() => {
    localStorage.setItem('taxAdministrator', taxAdministrator);
  }, [taxAdministrator]);

  useEffect(() => {
    localStorage.setItem('orderid', orderID);
  }, [orderID]);

  return (
    <OrderContext.Provider
      value={{
        accessToken,
        setAccessToken,
        userID,
        setUserID,
        email,
        setEmail,
        preferredLocation,
        setPreferredLocation,
        paymentMethod,
        setPaymentMethod,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        city,
        setCity,
        town,
        setTown,
        street,
        setStreet,
        postCode,
        setPostCode,
        taxNumber,
        setTaxNumber,
        taxAdministrator,
        setTaxAdministrator,
        orderID,
        setOrderID
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
