'use client'

import { Button } from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// utilizando o zodResolver
const subscriptionSchema = z.object({
  nameP: z.string().min(2, 'Digite seu nome completo'),
  emailP: z.string().email('Digite um e-mail válido'),
})

type SubscriptionSchema = z.infer<typeof subscriptionSchema>

export function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  })
  function onSubscribe(data: SubscriptionSchema) {
    console.log(data)
  }
  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="bg-gray-700 border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>
      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField
              {...register('nameP')}
              type="text"
              placeholder="Nome completo"
            />
          </InputRoot>
          {errors?.nameP && (
            <p className="text-danger text-sm font-semibold">
              {errors.nameP.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField
              {...register('emailP')}
              type="email"
              placeholder="E-mail"
            />
          </InputRoot>
          {errors?.emailP && (
            <p className="text-danger text-sm font-semibold">
              {errors.emailP.message}
            </p>
          )}
        </div>
      </div>
      <Button type="submit">
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  )
}
