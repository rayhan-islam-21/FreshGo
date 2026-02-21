"use client"
import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useSelector } from 'react-redux';
import Container from '../Container';

const MyCart = () => {
    const {items} = useSelector((state)=>state.cart)


    return (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>
                    Product
                </TableHead>
                <TableHead>
                    Price
                </TableHead>
                <TableHead>
                  Quantity
                </TableHead>
                <TableHead>
                    Subtotal
                </TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
        {items.map((item,idx)=>{
            <TableRow key={idx}>
                <TableCell>
                {item.name}
                </TableCell>
            </TableRow>
        })}
        </TableBody>
       </Table>
    );
};

export default MyCart;