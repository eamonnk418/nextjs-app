"use server";

import {z} from "zod";

export const formAction = async (formData: FormData) => {
    const schema = z.object({
        firstName: z.string().max(20, "First name must be 20 characters or less"),
    })

    const rawFormData = Object.entries(formData);

    const result = schema.safeParse(rawFormData);
    if (!result) {
        throw new Error("Invalid form data", {cause: result.error});
    }

    console.log(result);

    return rawFormData
}