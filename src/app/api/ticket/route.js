import { NextResponse } from 'next/server';
import Ticket from '@/models/Tickets';

export async function GET() {
  try {
    const tickets = await Ticket.find();
    return NextResponse.json({ data: tickets }, { status: 200 });
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    const { title, description, active } = body;

    const ticket = await Ticket.create({
      title,
      description,
      active,
    });

    return NextResponse.json({ message: 'Ticket Created', data: ticket }, { status: 201 });
  } catch (err) {
    // console.log(err);
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
}
