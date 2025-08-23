import { NextResponse } from "next/server";

const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
];

export async function GET(request) {
  return NextResponse.json(products);
}
