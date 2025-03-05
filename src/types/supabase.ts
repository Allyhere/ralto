export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      documents: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          title: string;
          content: string;
          user_id: string;
          slug: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          title: string;
          content: string;
          user_id: string;
          slug: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          title?: string;
          content?: string;
          user_id?: string;
          slug?: string;
        };
      };
      profiles: {
        Row: {
          id: string;
          created_at: string;
          username: string;
          full_name: string;
          avatar_url: string;
        };
        Insert: {
          id: string;
          created_at?: string;
          username: string;
          full_name: string;
          avatar_url: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          username?: string;
          full_name?: string;
          avatar_url?: string;
        };
      };
    };
  };
}
