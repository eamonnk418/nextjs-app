import {z} from "zod";

export const schema = z.object({
    githubURL: z.string().url(),
    description: z.string().min(10).max(1000),
});

export type ReportFormSchema = z.infer<typeof schema>;


