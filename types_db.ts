export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Allergy: {
        Row: {
          allergy_id: string
          created_at: string | null
          name: string
        }
        Insert: {
          allergy_id: string
          created_at?: string | null
          name: string
        }
        Update: {
          allergy_id?: string
          created_at?: string | null
          name?: string
        }
        Relationships: []
      }
      Appointment: {
        Row: {
          appointment_id: string
          created_at: string | null
          date: string
          doctor_id: string
          PHN: string
          reason: string | null
          status: string
          time: string
        }
        Insert: {
          appointment_id: string
          created_at?: string | null
          date: string
          doctor_id: string
          PHN: string
          reason?: string | null
          status: string
          time: string
        }
        Update: {
          appointment_id?: string
          created_at?: string | null
          date?: string
          doctor_id?: string
          PHN?: string
          reason?: string | null
          status?: string
          time?: string
        }
        Relationships: [
          {
            foreignKeyName: "Appointment_doctor_id_fkey"
            columns: ["doctor_id"]
            referencedRelation: "Doctor"
            referencedColumns: ["doctor_id"]
          },
          {
            foreignKeyName: "Appointment_PHN_fkey"
            columns: ["PHN"]
            referencedRelation: "Patient"
            referencedColumns: ["PHN"]
          }
        ]
      }
      Doctor: {
        Row: {
          created_at: string | null
          DOB: string | null
          doctor_id: string
          email: string | null
          encrypted_password: string | null
          first_name: string | null
          gender: string | null
          last_name: string | null
          specialization: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          DOB?: string | null
          doctor_id: string
          email?: string | null
          encrypted_password?: string | null
          first_name?: string | null
          gender?: string | null
          last_name?: string | null
          specialization?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          DOB?: string | null
          doctor_id?: string
          email?: string | null
          encrypted_password?: string | null
          first_name?: string | null
          gender?: string | null
          last_name?: string | null
          specialization?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "Doctor_email_fkey"
            columns: ["email"]
            referencedRelation: "users"
            referencedColumns: ["email"]
          },
          {
            foreignKeyName: "Doctor_encrypted_password_fkey"
            columns: ["encrypted_password"]
            referencedRelation: "users"
            referencedColumns: ["encrypted_password"]
          },
          {
            foreignKeyName: "Doctor_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      History: {
        Row: {
          created_at: string | null
          history_id: string
          PHN: string
        }
        Insert: {
          created_at?: string | null
          history_id: string
          PHN: string
        }
        Update: {
          created_at?: string | null
          history_id?: string
          PHN?: string
        }
        Relationships: []
      }
      History_Allergy: {
        Row: {
          allergy_id: string
          created_at: string | null
          history_id: string
        }
        Insert: {
          allergy_id: string
          created_at?: string | null
          history_id: string
        }
        Update: {
          allergy_id?: string
          created_at?: string | null
          history_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "History_Allergy_allergy_id_fkey"
            columns: ["allergy_id"]
            referencedRelation: "Allergy"
            referencedColumns: ["allergy_id"]
          },
          {
            foreignKeyName: "History_Allergy_history_id_fkey"
            columns: ["history_id"]
            referencedRelation: "History"
            referencedColumns: ["history_id"]
          }
        ]
      }
      History_Medication: {
        Row: {
          created_at: string | null
          history_id: string
          medicine_id: string
        }
        Insert: {
          created_at?: string | null
          history_id: string
          medicine_id: string
        }
        Update: {
          created_at?: string | null
          history_id?: string
          medicine_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "History_Medication_history_id_fkey"
            columns: ["history_id"]
            referencedRelation: "History"
            referencedColumns: ["history_id"]
          },
          {
            foreignKeyName: "History_Medication_medicine_id_fkey"
            columns: ["medicine_id"]
            referencedRelation: "Medication"
            referencedColumns: ["medicine_id"]
          }
        ]
      }
      Medication: {
        Row: {
          created_at: string | null
          medicine_id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          medicine_id: string
          name: string
        }
        Update: {
          created_at?: string | null
          medicine_id?: string
          name?: string
        }
        Relationships: []
      }
      Patient: {
        Row: {
          address: string | null
          created_at: string | null
          DOB: string | null
          email: string | null
          encrypted_password: string | null
          first_name: string | null
          gender: string | null
          last_name: string | null
          PHN: string
          phone: string | null
          user_id: string
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          DOB?: string | null
          email?: string | null
          encrypted_password?: string | null
          first_name?: string | null
          gender?: string | null
          last_name?: string | null
          PHN: string
          phone?: string | null
          user_id: string
        }
        Update: {
          address?: string | null
          created_at?: string | null
          DOB?: string | null
          email?: string | null
          encrypted_password?: string | null
          first_name?: string | null
          gender?: string | null
          last_name?: string | null
          PHN?: string
          phone?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "Patient_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      Record: {
        Row: {
          appointment_id: string
          created_at: string | null
          diagnosis: string
          doctor_id: string
          history_id: string
          PHN: string
          record_id: string
          treatment: string
        }
        Insert: {
          appointment_id: string
          created_at?: string | null
          diagnosis: string
          doctor_id: string
          history_id: string
          PHN: string
          record_id: string
          treatment: string
        }
        Update: {
          appointment_id?: string
          created_at?: string | null
          diagnosis?: string
          doctor_id?: string
          history_id?: string
          PHN?: string
          record_id?: string
          treatment?: string
        }
        Relationships: [
          {
            foreignKeyName: "Record_appointment_id_fkey"
            columns: ["appointment_id"]
            referencedRelation: "Appointment"
            referencedColumns: ["appointment_id"]
          },
          {
            foreignKeyName: "Record_doctor_id_fkey"
            columns: ["doctor_id"]
            referencedRelation: "Doctor"
            referencedColumns: ["doctor_id"]
          },
          {
            foreignKeyName: "Record_history_id_fkey"
            columns: ["history_id"]
            referencedRelation: "History"
            referencedColumns: ["history_id"]
          },
          {
            foreignKeyName: "Record_PHN_fkey"
            columns: ["PHN"]
            referencedRelation: "Patient"
            referencedColumns: ["PHN"]
          }
        ]
      }
      Reviews: {
        Row: {
          comments: string | null
          created_at: string | null
          doctor_id: string
          PHN: string
          rating: number
          review_id: string
        }
        Insert: {
          comments?: string | null
          created_at?: string | null
          doctor_id: string
          PHN: string
          rating: number
          review_id: string
        }
        Update: {
          comments?: string | null
          created_at?: string | null
          doctor_id?: string
          PHN?: string
          rating?: number
          review_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "Reviews_doctor_id_fkey"
            columns: ["doctor_id"]
            referencedRelation: "Doctor"
            referencedColumns: ["doctor_id"]
          },
          {
            foreignKeyName: "Reviews_PHN_fkey"
            columns: ["PHN"]
            referencedRelation: "Patient"
            referencedColumns: ["PHN"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
