import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { sendContactForm } from "@/lib/api";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(2, "Namn krävs (minst 2 tecken)"),
  email: z.string().email("Ange en giltig e-postadress"),
  phone: z.string().optional(),
  message: z.string().min(10, "Meddelandet måste vara minst 10 tecken"),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: sendContactForm,
    onSuccess: () => reset(),
  });

  const onSubmit = (data: FormValues) => mutation.mutate(data);

  const inputClass =
    "w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-300">
          Namn *
        </label>
        <input
          id="name"
          type="text"
          placeholder="Ditt namn"
          className={inputClass}
          {...register("name")}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-300">
          E-post *
        </label>
        <input
          id="email"
          type="email"
          placeholder="din@email.se"
          className={inputClass}
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-300">
          Telefon
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="070-123 45 67"
          className={inputClass}
          {...register("phone")}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-300">
          Meddelande *
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Beskriv vad du behöver hjälp med..."
          className={inputClass}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      {mutation.isError && (
        <div className="rounded-lg border border-red-800 bg-red-900/20 p-3 text-sm text-red-400">
          Något gick fel. Försök igen senare.
        </div>
      )}

      {mutation.isSuccess && (
        <div className="rounded-lg border border-green-800 bg-green-900/20 p-3 text-sm text-green-400">
          Tack! Ditt meddelande har skickats.
        </div>
      )}

      <Button
        type="submit"
        variant="accent"
        size="lg"
        className="w-full"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Skickar..." : "Skicka Meddelande"}
      </Button>
    </form>
  );
}
