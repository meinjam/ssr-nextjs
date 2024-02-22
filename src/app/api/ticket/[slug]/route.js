import { NextResponse } from 'next/server';
import Ticket from '@/models/Tickets';

export async function GET(req, res) {
  try {
    const { slug } = res?.params;

    const ticket = await Ticket.findOne({ slug: slug });

    if (!ticket) {
      return NextResponse.json({ message: 'Sorry, no such ticket.', data: {} }, { status: 404 });
    }

    return NextResponse.json({ data: ticket }, { status: 200 });
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { slug } = params;
    const body = await req.json();

    const ticket = await Ticket.findOneAndUpdate({ slug: slug }, { ...body }, { new: true });

    if (!ticket) {
      return NextResponse.json({ message: 'Sorry, no such ticket.', data: {} }, { status: 404 });
    }

    return NextResponse.json({ message: 'Ticket updated successfully.', data: ticket }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { slug } = params;

    const ticket = await Ticket.findOneAndDelete({ slug: slug });

    if (!ticket) {
      return NextResponse.json({ message: 'Sorry, no such ticket.', data: {} }, { status: 404 });
    }

    return NextResponse.json({ message: 'Ticket deleted successfully.', data: {} }, { status: 200 });
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}
