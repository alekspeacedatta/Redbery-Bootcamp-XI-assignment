import { useLogin } from '../hooks/useLogin'
import { loginSchema, type LoginSchema } from '../model/login.schema'
import { Button, Input } from '@/shared/ui'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import type { AxiosError } from 'axios'

export const LoginForm = () => {
    const { mutate } = useLogin()

    const { register, handleSubmit, formState: { errors }, setError } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        mode: 'onBlur',
        defaultValues: {
            email: '',
            password: '',
        }
    })
    const onSubmit = (data: LoginSchema) => {
        mutate(data, {
            onError: ( error: AxiosError<{ message: string }> ) => {
                const apiMessage = error.response?.data?.message || 'Something went wrong'
                setError("root", {
                    message: apiMessage
                })
            }
        });
    }
  return (
    <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {errors.root && (
            <div className="
                p-3 rounded-lg bg-red-50 border border-red-200
                text-red-500 text-sm font-medium">
                {errors.root.message}
            </div>
        )}
        <section className="flex flex-col gap-2">
            <label className={`
                ${ errors.email ? 'text-red-500' : 'text-[#3D3D3D]' }
                text-sm font-medium
            `}>
                Email*
            </label>
            <Input 
                error={!!errors.email}
                {...register('email')}
                placeholder="your@example.com"
                className={`py-3.25 `} />
            {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
        </section>
        <section className="flex flex-col gap-2">
            <label className={`
                ${ errors.password ? 'text-red-500' : 'text-[#3D3D3D]' }
                text-sm font-medium
            `}>
                Password*
            </label>
            <Input 
                error={!!errors.password}
                {...register('password')}
                placeholder="password"
                type="password" 
                className="py-3.25" />
            {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
        </section>
        {/* Single Dynamic Button */}
        <Button 
            type='submit'
            fullWidth
            variant="primary"
            className="h-12 mt-2"
        >
            Log In
        </Button>
    </form>
  )
}


