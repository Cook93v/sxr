import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email?: string | null;
      name?: string | null;
      role?: string;
      avatarUrl?: string;
    };
  }

  interface User {
    role?: string;
    avatarUrl?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    avatarUrl?: string;
  }
}
