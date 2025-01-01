import { z } from 'zod';
import { isValidPhoneNumber } from 'react-phone-number-input';

/* LOGIN */

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Debe ingresar un email' })
    .email({ message: 'Debe ingresar un email valido' }),
  password: z.string().min(1, { message: 'La contraseña no puede estar vacia' })
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;

/* REGISTER */

export const RegisterSchema = z
  .object({
    name: z
      .string()
      .min(6, { message: 'El nombre debe tener al menos 6 caracteres' })
      .max(50, { message: 'El nombre no puede exceder los 50 caracteres' })
      .regex(/^[a-zA-Z\s]+$/, {
        message: 'El nombre solo debe contener letras y espacios'
      })
      .regex(/^\S+\s\S+$/, {
        message: 'Debe ingresar un nombre completo (nombre y apellido)'
      }),
    email: z
      .string()
      .min(1, { message: 'Debe ingresar un email' })
      .email({ message: 'Debe ingresar un email valido' }),
    password: z
      .string()
      .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
      .regex(/[A-Z]/, { message: 'Debe contener al menos una letra mayúscula' })
      .regex(/[a-z]/, { message: 'Debe contener al menos una letra minúscula' })
      .regex(/\d/, { message: 'Debe contener al menos un número' })
      .regex(/[@$!%*?&]/, {
        message: 'Debe contener al menos un carácter especial'
      }),
    confirmPassword: z.string().min(1, 'Debes confirmar tu contraseña'),
    phone: z
      .string()
      .min(1, 'Debes ingresar tu numero telefonico')
      .refine((value) => isValidPhoneNumber(value || '', 'AR'), {
        message: 'El numero telefonico no es valido'
      })
  })

  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword']
  });

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;

/* Forgot password */

export const ForgotSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Debe ingresar un email' })
    .email({ message: 'Debe ingresar un email valido' })
});

export type ForgotSchemaType = z.infer<typeof ForgotSchema>;
