import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { sendPartnerFormToTelegram, sendContactFormToTelegram, isValidTelegramUsername } from "./telegram";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submitForm: publicProcedure
      .input(
        z.object({
          name: z.string().min(2, "Имя должно быть минимум 2 символа"),
          phone: z.string().regex(/^\+?[0-9\s\-()]{10,}$/, "Некорректный номер телефона"),
          message: z.string().optional().default(''),
          source: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const success = await sendContactFormToTelegram({
            name: input.name,
            phone: input.phone,
            message: input.message || '',
            source: input.source,
          });

          return {
            success,
            message: success
              ? "Заявка отправлена! Мы свяжемся с вами в течение 24 часов."
              : "Ошибка отправки. Попробуйте позже или напишите в Telegram.",
          };
        } catch (error) {
          console.error("[Contact] Form submission error:", error);
          return {
            success: false,
            message: "Ошибка отправки. Попробуйте позже.",
          };
        }
      }),
  }),

  partners: router({
    submitForm: publicProcedure
      .input(
        z.object({
          name: z.string().min(2, "Имя должно быть минимум 2 символа"),
          phone: z.string().regex(/^\+?[0-9\s\-()]{10,}$/, "Некорректный номер телефона"),
          telegram: z.string().refine(
            (val) => isValidTelegramUsername(val),
            "Некорректное имя пользователя Telegram"
          ),
          message: z.string().min(10, "Сообщение должно быть минимум 10 символов"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const success = await sendPartnerFormToTelegram({
            name: input.name,
            phone: input.phone,
            telegram: input.telegram,
            message: input.message,
          });

          return {
            success,
            message: success
              ? "Заявка отправлена! Мы свяжемся с вами в течение 24 часов."
              : "Ошибка отправки. Попробуйте позже или напишите в Telegram.",
          };
        } catch (error) {
          console.error("[Partners] Form submission error:", error);
          return {
            success: false,
            message: "Ошибка отправки. Попробуйте позже.",
          };
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
