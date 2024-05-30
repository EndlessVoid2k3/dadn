
import publish_value from "@/models/mqtt";
import { NextResponse } from "next/server";


// export async function POST(req) {
//   try {
//     const { name, email, password } = await req.json();
//     const hashedPassword = await bcrypt.hash(password, 10);
//     await connectMongoDB();
//     await User.create({ name, email, password: hashedPassword });

//     return NextResponse.json({ message: "User registered." }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json(
//       { message: "An error occurred while registering the user." },
//       { status: 500 }
//     );
//   }
// }

export async function POST(req) {
  try {
    const { feed_name, value } = await req.json();

    publish_value(feed_name, value)
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while publishing the value." },
      { status: 500 }
    );
  }
}