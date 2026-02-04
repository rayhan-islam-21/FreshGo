import React from 'react';
import {
  FaShippingFast,
  FaHeadset,
  FaLock,
  FaUndoAlt,
} from "react-icons/fa";
import Container from '../Container';

export const features = [
  {
    icon: FaShippingFast,
    title: "Free Shipping",
    subtitle: "Free shipping on all your order",
    slug: "free-shipping",
  },
  {
    icon: FaHeadset,
    title: "Customer Support 24/7",
    subtitle: "Instant access to Support",
    slug: "customer-support",
  },
  {
    icon: FaLock,
    title: "100% Secure Payment",
    subtitle: "We ensure your money is safe",
    slug: "secure-payment",
  },
  {
    icon: FaUndoAlt,
    title: "Money-Back Guarantee",
    subtitle: "30 Days Money-Back Guarantee",
    slug: "money-back",
  },
];


const BelowHero = () => {
    return (
        <Container >
            <div className='p-8 shadow-md bg-[#FFFFFF]  rounded-md border-black/20 mt-4 flex items-center justify-between'>
                {
                features.map((f)=>{
                    return (
                        <div key={`${f.slug}`} className='flex items-center gap-4'>
                          <div>
                            <f.icon className='text-[#00B307]' size={30}/>
                          </div>
                          <div>
                            <h2 className="text-sm font-medium">{f.title}</h2>
                            <p className="text-sm text-[#999999] mt-1">{f.subtitle}</p>
                          </div>
                        </div>
                    )
                })
            }
            </div>
        </Container>
    );
};

export default BelowHero;