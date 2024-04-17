import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import type { Database } from "./app/lib/supabase/database.types";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareClient<Database>({ req, res });

  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    console.log(session);
    const path = req.nextUrl.pathname;

    const loginPath = "/auth/login";

    if (!session && path === "/dashboard/dash/dashboard") {
      console.log("redirecting to login");
      return NextResponse.redirect(new URL(loginPath, req.url));
    }
  } catch (error) {
    console.error("Error:", error);
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
