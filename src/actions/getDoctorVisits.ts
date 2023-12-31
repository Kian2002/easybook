import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getDoctorVisits = async () => {
    const supabase = createServerComponentClient({
        cookies: cookies,
    })

    const { data : sessionData, error: sessionError } = await supabase.auth.getSession()

    if (sessionError) {
        console.log(sessionError.message)
    }

    const { data: appointmentCount, error: appointmentError } = await supabase
        .from("appointment")
        .select("*")
        .eq("PHN", sessionData?.session?.user.user_metadata.user_id)
        .eq("status", "Completed")

    if (appointmentError) {
        console.log(appointmentError.message)
    }

    const { data: patient, error: patientError } = await supabase
        .from("patient")
        .update({ doctor_visits: appointmentCount?.length })
        .eq("PHN", sessionData?.session?.user.user_metadata.user_id)


    const { data, error } = await supabase
        .from('patient')
        .select('doctor_visits')
        .eq('user_id', sessionData?.session?.user.id)

    if (error) {
        console.log(error)
        return []
    }

    return data[0].doctor_visits || 0
}

export default getDoctorVisits
